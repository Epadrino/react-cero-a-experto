import { heroes } from '../data/heroes';

//funcion para tomar el id de referencia del url para obtener los parametros del heroe
export const getHeroById = (id) => {
	return heroes.find((hero) => hero.id === id);
};
