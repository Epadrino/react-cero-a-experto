import React, { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallBackHook = () => {
	// hook para cambiar el estado del contador
	const [counter, setCounter] = useState(10);

	/* hook sirve para memorizar una funsion y evitar refrescar 
    todo el componente cuando se ejecute*/
	const incrementFather = useCallback((value) => {
		setCounter((number) => number + value);
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
