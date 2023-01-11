import React, { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallBackHook = () => {
	// hook para cambiar el estado del contador
	const [counter, setCounter] = useState(10);

	// hook sirve para memorizar una funsion para evitar refrescar todo el componente cuando algo cambie
	const incrementFather = useCallback(() => {
		setCounter((value) => value + 1);
	}, []);

	// //funsion para incrementar el contador
	// const incrementFather = () => {
	// 	setCounter(counter + 1);
	// };

	// Componente
	return (
		<>
			<h1> useCallback Hook: {counter}</h1>
			<hr />

			<ShowIncrement increment={incrementFather} />
		</>
	);
};
