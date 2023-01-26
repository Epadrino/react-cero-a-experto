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
			state.isLoading = false;
			state.page = action.payload.page;
			state.pokemons = action.payload.pokemons;
		},
	},
});

export const { startLoadingPkemons, setPokemons } = pokemonSlice.actions;
