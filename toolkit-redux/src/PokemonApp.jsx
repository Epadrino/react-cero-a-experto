import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './store/slices/pokemon';

export const PokemonApp = () => {
	//useSelector para obtener la informacion del store
	const { page, pokemons, isLoading } = useSelector(
		(state) => state.pokemons
	);

	//constante para usar las acciones disponibles del estado
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPokemons());
	}, []);

	return (
		<>
			<h1>PokemonApp</h1>
			<hr />
			{<spam>Loafing: {isLoading ? 'True' : 'false'} </spam>}
			<ul>
				{pokemons.map(({ name }) => (
					<li key={name}>{name}</li>
				))}
			</ul>
			<button
				disabled={isLoading}
				onClick={() => dispatch(getPokemons(page))}
			>
				Next page
			</button>
		</>
	);
};
