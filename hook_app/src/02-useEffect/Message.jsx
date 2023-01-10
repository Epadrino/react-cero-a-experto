import { useEffect } from 'react';

export const Message = () => {
	useEffect(() => {
		console.log('se monto');

		return () => {
			console.log('se desmonto');
		};
	}, []);

	return (
		<>
			<h3>Usuario ya existe</h3>
		</>
	);
};
