import { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroById } from '../helpers';

export const HeroePage = () => {
	//const para usar la funcion y poder tomar el id como url
	const { id } = useParams();

	//const para usar la funcion para obtener los parametros del heroe
	const hero = useMemo(() => getHeroById(id), [id]);

	//const para navegar, usada en la funcion onReturn
	const navigate = useNavigate();

	//funcion para regresar a la pagina anterior
	const onReturn = () => {
		navigate(-1);
	};

	// condicion para redireccionar si el heroe no exite
	if (!hero) {
		return <Navigate to='/marvel' />;
	}

	return (
		<div className='row mt-5'>
			<div className='col-4'>
				<img
					src={`/assets/heroes/${hero.id}.jpg`}
					alt={hero.superhero}
					className='img-thumbnail animate__animated animate__fadeInLeft'
				/>
			</div>
			<div className='col-8'>
				<h3>{hero.superhero}</h3>
				<ul className='list-group list-group-flush'>
					<li className='list-group-item'>
						<b>Alter ego:</b> {hero.alter_ego}
					</li>
					<li className='list-group-item'>
						<b>Publisher:</b> {hero.publisher}
					</li>
					<li className='list-group-item'>
						<b>First appearance:</b> {hero.first_appearance}
					</li>
				</ul>

				<h5 className='mt-3'>Characters:</h5>
				<p>{hero.characters}</p>

				<button className='btn btn-outline-primary' onClick={onReturn}>
					Back
				</button>
			</div>
		</div>
	);
};
