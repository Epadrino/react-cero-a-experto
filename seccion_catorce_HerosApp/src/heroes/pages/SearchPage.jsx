import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

import { useForm } from '../../hooks';
import { HeroCard } from '../components/HeroCard';
import { getHeroesByName } from '../helpers';
import { heroes } from '../data/heroes';

export const SearchPage = () => {
	//constante para poder pasar parametros a la url
	const navigate = useNavigate();

	//constante para poder extraer parametros a la url
	const location = useLocation();

	//constante para poder extraer los query parametros del search a la eseLocalicacion
	const { q = '' } = queryString.parse(location.search);

	//constante para poder usar lo query parametroas obtenidos de la busqueda
	const heroes = getHeroesByName(q);

	//custom Hook para uso del formulario
	const { searchText, onInputChange } = useForm({
		searchText: q,
	});

	//constante para ocultar o visualizar el aviso de ninguna escritura
	const showSearch = q.length === 0;

	//constante para ocultar o visualizar el aviso de heroe no encontrado
	const showError = q.length > 0 && heroes.length === 0;

	//funcion para obtener el contenido del formulario y pasarlo a la url
	const onSerchSubmit = (event) => {
		event.preventDefault();
		// if (searchText.trim().length <= 1) return;

		navigate(`?q=${searchText}`);
	};

	return (
		<>
			<h1>Search</h1>
			<hr />

			<div className='row'>
				<div className='col-5'>
					<h4>Searching</h4>
					<hr />
					<form onSubmit={onSerchSubmit}>
						<input
							type='text'
							placeholder='Search a hero'
							className='form-control'
							name='searchText'
							autoComplete='off'
							value={searchText}
							onChange={onInputChange}
						/>
						<button className='btn btn-outline-primary mt-1'>
							Search
						</button>
					</form>
				</div>
				<div className='col-7'>
					<h4>Results</h4>
					<hr />
					<div
						className='alert alert-primary animate__animated animate__fadeIn'
						style={{ display: showSearch ? '' : 'none' }}
					>
						Search a hero
					</div>

					<div
						className='alert alert-danger animate__animated animate__fadeIn'
						style={{ display: showError ? '' : 'none' }}
					>
						No hero witch <b>{q}</b>
					</div>
					{heroes.map((hero) => (
						<HeroCard key={hero.id} {...hero} />
					))}
				</div>
			</div>
		</>
	);
};
