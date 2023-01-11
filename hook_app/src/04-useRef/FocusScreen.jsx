import { useRef } from 'react';

export const FocusScreen = () => {
	// hook para hacer referencia a un coponente en especifico
	const inputRef = useRef();

	// funcion para seleccionar el contendo del input
	const onClick = () => {
		inputRef.current.select();
	};

	// Componente
	return (
		<>
			<h1>Focus Screen</h1>
			<hr />

			<input
				ref={inputRef}
				type='text'
				placeholder='Ingrese su nombre'
				className='form-control mt-2'
			/>

			<botton className='btn btn-primary mt-2' onClick={onClick}>
				Set focus
			</botton>
		</>
	);
};
