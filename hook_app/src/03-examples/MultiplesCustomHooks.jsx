import { useFetch } from '../hooks/useFetch';

export const MultiplesCustomHooks = () => {
	// id necesario para encontrar el pokemon
	const id = 1;

	//hooks useFetch para utilizar la api
	const { data, isLoading, hasError } = useFetch(
		`https://pokeapi.co/api/v2/pokemon/${id}`
	);

	//funsion para obtener nombre
	const nombre = () => {
		const { name, types } = !!data && data;
		const Name = name;
		const Types = types;
		return {
			Name,
			Types,
		};
	};
	const { Name, Types } = nombre();
	//funsion para obtener tipo
	const { type } = !!Types && Types[0];
	const { name } = !!type && type;
	const nameType = name;

	//condicion para ejecutar el isLoading mientras se obtiene la respuesta de la data
	/* nota: de esta forma se utiliza si se desea establecer 
		una pantalla de cargaantes de cargar el componente */
	// if (isLoading) {
	// 	return <h1>Cargando...</h1>;
	// }

	console.log(data, isLoading, hasError);
	return (
		<>
			<h1>cosas</h1>
			<br />

			{isLoading ? (
				<div className='alert alert-info text-center'>Loading...</div>
			) : (
				<blockquote className='blockquote text-end'>
					<p className='mb-1'>{Name}</p>
					<footer className='blockquote-footer'>{nameType}</footer>
				</blockquote>
			)}

			<button className='btn btn-primary'>Next Pokemon</button>
		</>
	);
};
