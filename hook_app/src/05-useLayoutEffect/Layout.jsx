import { useFetch, useCounter } from '../hooks';
import { CardPokemons, Loading } from '../03-examples';

export const Layout = () => {
	// id necesario para encontrar el pokemon
	const id = 1;

	//hooks useCounter para pasar al siguiente pokemon
	const { increment, counter } = useCounter(id);

	//hooks useFetch para utilizar la api
	const { data, isLoading, hasError } = useFetch(
		`https://pokeapi.co/api/v2/pokemon/${counter}`
	);

	//desestructuracion para obtener datos de la api
	const { name } = !!data && data;
	const { name: nameType } = !!data && data.types[0].type;
	const { front_default: urlImg } = !!data && data.sprites.other.dream_world;

	//condicion para ejecutar el isLoading mientras se obtiene la respuesta de la data
	/* nota: de esta forma se utiliza si se desea establecer 
    una pantalla de cargaantes de cargar el componente */
	// if (isLoading) {
	// 	return <h1>Cargando...</h1>;
	// }

	return (
		<>
			<h1>Pokémons</h1>
			<br />

			{isLoading ? (
				<Loading />
			) : (
				<CardPokemons name={name} nameType={nameType} urlImg={urlImg} />
			)}

			<button
				className='btn btn-primary'
				onClick={increment}
				disabled={isLoading}
			>
				Next Pokemon
			</button>
		</>
	);
};
