import { setPokemons, startLoadingPkemons } from './pokemonSlice';

export const getPokemons = (page = 0) => {
	return async (dispatch, getState) => {
		dispatch(startLoadingPkemons());

		const resp = await fetch(
			`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`
		);
		const data = await resp.json();
		// console.log(data);

		dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));
	};
};
