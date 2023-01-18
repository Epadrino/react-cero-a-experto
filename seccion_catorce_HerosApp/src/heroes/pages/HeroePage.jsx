import { Navigate, useParams } from 'react-router-dom';
import { getHeroById } from '../helpers';

export const HeroePage = () => {
	//const para usar la funcion y poder tomar el id como url
	const { id } = useParams();

	//const para usar la funcion para obtener los parametros del heroe
	const hero = getHeroById(id);
	console.log(hero);

	if (!hero) {
		return <Navigate to='/marvel' />;
	}

	return (
		<>
			<h1>{hero.superhero}</h1>
		</>
	);
};
