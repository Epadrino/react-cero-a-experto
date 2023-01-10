import { useFetch } from '../hooks/useFetch';

export const MultiplesCustomHooks = () => {
	const id = 1;

	const { data, isLoading, hasError } = useFetch(
		`https://pokeapi.co/api/v2/pokemon/${id}`
	);

	console.log(data, isLoading, hasError);
	return (
		<>
			<h1>cosas</h1>
			<br />
		</>
	);
};
