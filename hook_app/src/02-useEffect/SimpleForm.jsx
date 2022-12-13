import { useState } from 'react';

export const SimpleForm = () => {
	const [formState, setFormState] = useState({
		username: 'Padrino',
		email: 'epadrinoa@gmail.com',
	});

	const { username, email } = formState;

	const onInputCange = ({ target }) => {
		const { name, value } = target;
		setFormState({ ...formState, [name]: value });
	};
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
		</>
	);
};
