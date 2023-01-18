import { getHeroesByPublisher } from '../helpers';

export const HeroList = ({ publisher }) => {
	// constante para extraer los heroes
	const heroes = getHeroesByPublisher(publisher);

	return (
		<ul className='list-group'>
			{heroes.map((hero) => (
				<li key={hero.id}>{hero.superhero}</li>
			))}
		</ul>
	);
};
