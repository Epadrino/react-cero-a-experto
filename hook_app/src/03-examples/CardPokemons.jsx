import { useLayoutEffect, useRef, useState } from 'react';

export const CardPokemons = ({ name, nameType, urlImg }) => {
	// hook para hacer referencia al componente del cual queremos adquirir los datos
	const pRef = useRef();

	// hook para cambiar y mostrar los datos
	const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

	// hook para actualizar y mostrar los datos
	useLayoutEffect(() => {
		const { width, height } = pRef.current.getBoundingClientRect();
		setBoxSize({ width, height });
	}, [urlImg]);

	return (
		<>
			<blockquote
				className='blockquote text-center'
				style={{ display: 'flex' }}
			>
				<img src={urlImg} alt='IMG' />

				<p ref={pRef} className='mb-1'>
					{name}
				</p>
				<footer className='blockquote-footer'>{nameType}</footer>
			</blockquote>

			<code>{JSON.stringify(boxSize)}</code>
		</>
	);
};
