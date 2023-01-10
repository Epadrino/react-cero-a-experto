import { useEffect } from 'react';
import { useForm } from '../hooks/useForm';
import { Message } from './Message';

export const FormWithCustomHook = () => {
	// CustomHook useForm
	const { formState, onInputCange } = useForm({
		username: '',
		email: '',
		password: '',
	});

	// desestructuracion del formState del CustomHook
	const { username, email, password } = formState;

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
	//useEffect para refrescar cuando se cambie el input password
	useEffect(() => {
		console.log('email cambiado');
	}, [password]);

	return (
		<>
			<h1>Formulario con custon Hook</h1>
			<hr />

			<input
				type='text'
				className='form-control'
				placeholder='Username'
				name='username'
				value={username}
				onChange={onInputCange}
			/>
			<input
				type='email'
				className='form-control mt-2'
				placeholder='example@email.com'
				name='email'
				value={email}
				onChange={onInputCange}
			/>
			<input
				type='password'
				className='form-control mt-2'
				placeholder='Constraseña'
				name='password'
				value={password}
				onChange={onInputCange}
			/>
			{username === `Padrino` && <Message />}
		</>
	);
};
