import { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
	// useState para cambiar el contenido de los inputs
	const [formState, setFormState] = useState({
		username: 'Padrino',
		email: 'epadrinoa@gmail.com',
	});

	// desestructuracion del formState del CustomHook
	const { username, email } = formState;

	//funcion para borrar el contenido de los inputs
	const onInputChange = ({ target }) => {
		const { name, value } = target;
		setFormState({ ...formState, [name]: value });
	};

	//useEffect para refrescar el inicio de la aplicacion
	useEffect(() => {
		console.log('useEffect llamado');
	}, []);

	//useEffect para refrescar cuando se cambie el input username
	useEffect(() => {
		console.log('username cambiado');
	}, [username]);

	//useEffect para refrescar cuando se cambie el input email
	useEffect(() => {
		console.log('email cambiado');
	}, [email]);

	return (
		<>
			<h1>Formulario Simple</h1>
			<hr />

			<input
				type='text'
				className='form-control'
				placeholder='Username'
				name='username'
				value={username}
				onChange={onInputChange}
			/>
			<input
				type='email'
				className='form-control mt-2'
				placeholder='example@email.com'
				name='email'
				value={email}
				onChange={onInputChange}
			/>
			{username === `Padrino` && <Message />}
		</>
	);
};
