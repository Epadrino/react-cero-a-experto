import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	page: 0,
	pokemons: [],
	isLoading: false,
};

export const pokemonSlice = createSlice({
	name: 'pokemon',
	initialState,
	reducers: {
		startLoadingPkemons: (state) => {
			state.isLoading = true;
		},
		setPokemons: (state, action) => {
			console.log(action);
		},
	},
});

export const { increment } = pokemonSlice.actions;
