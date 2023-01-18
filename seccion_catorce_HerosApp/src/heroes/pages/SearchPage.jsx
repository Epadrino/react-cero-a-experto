import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

import { useForm } from '../../hooks';
import { HeroCard } from '../components/HeroCard';

export const SearchPage = () => {
	//constante para poder pasar parametros a la url
	const navigate = useNavigate();

	//constante para poder extraer parametros a la url
	const location = useLocation();

	//constante para poder extraer los query parametros del search a la eseLocalicacion
	const { q = '' } = queryString.parse(location.search);

	//custom Hook para uso del formulario
	const { searchText, onInputChange } = useForm({
		searchText: '',
	});

	//funcion para obtener el contenido del formulario y pasarlo a la url
	const onSerchSubmit = (event) => {
		event.preventDefault();
		if (searchText.trim().length <= 1) return;

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

					<div className='alert alert-primary'>Search a hero</div>

					<div className='alert alert-primary'>
						No hero witch <b>{q}</b>
					</div>

					{/* <HeroCard /> */}
				</div>
			</div>
		</>
	);
};
