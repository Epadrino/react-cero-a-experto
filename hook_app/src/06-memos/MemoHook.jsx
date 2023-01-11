import React, { useMemo, useState } from 'react';
import { useCounter } from '../hooks';

// funcion creda para simular un proceso pesado
const heavyStuff = (iterationNumber = 100) => {
	for (let i = 0; i < iterationNumber; i++) {
		console.log('Ahí vamos...');
	}
	return `${iterationNumber} iteracioes realizadas`;
};

export const MemoHook = () => {
	// custonHook para incrementar la numeracion
	const { counter, increment } = useCounter(4000);

	// hook para cambiar el estado bolean
	const [show, setShow] = useState(true);

	// hook para guardar la operacion y evitar cargarla sin necesidad
	const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

	// Componente
	return (
		<>
			<h1>
				Counter: <small>{counter} </small>
			</h1>
			<hr />
			<h4>{memorizedValue}</h4>

			<button className=' btn btn-primary' onClick={increment}>
				+1
			</button>

			<button className=' btn btn-primary' onClick={() => setShow(!show)}>
				Show/Hide {JSON.stringify(show)}
			</button>
		</>
	);
};
