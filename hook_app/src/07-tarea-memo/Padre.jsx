import { Hijo } from './Hijo';
import { useCallback, useState } from 'react';

export const Padre = () => {
	// variable para generar botones
	const numeros = [2, 4, 6, 8, 10, 20];

	// hook para cambiar el estado del contador
	const [valor, setValor] = useState(0);

	/* hook sirve para memorizar una funsion y evitar refrescar 
    todo el componente cuando se ejecute*/
	const incrementar = useCallback((num) => {
		setValor((valor) => valor + num);
	}, []);

	return (
		<div>
			<h1>Padre</h1>
			<p> Total: {valor} </p>

			<hr />

			{numeros.map((n) => (
				<Hijo key={n} numero={n} incrementar={incrementar} />
			))}
			{/* <Hijo /> */}
		</div>
	);
};
