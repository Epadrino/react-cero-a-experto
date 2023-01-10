import { useState } from 'react';

export const useForm = (initialForm = {}) => {
	// useState para cambiar el contenido de los inputs
	const [formState, setFormState] = useState(initialForm);

	//funcion para cambiar el contenido de los inputs
	const onInputCange = ({ target }) => {
		const { name, value } = target;
		setFormState({ ...formState, [name]: value });
	};
	//parametros necesarios para el funcionamiento del hook
	return {
		formState,
		onInputCange,
	};
};
