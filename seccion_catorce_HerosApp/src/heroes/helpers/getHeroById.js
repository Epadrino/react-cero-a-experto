import { heroes } from '../data/heroes';

//funcion para para obtener los parametros del heroe por id
export const getHeroById = (id) => {
	return heroes.find((hero) => hero.id === id);
};
