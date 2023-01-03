import { useContext } from 'react';
import { UserContex } from './context/userContex';

export const LoginPage = () => {
	const { user, setUser, usuario } = useContext(UserContex);

	return (
		<>
			<div>LoginPage</div>
			<hr />

			<pre>{JSON.stringify(user, null, 3)}</pre>

			<button
				className='btn btn-primary'
				onClick={() => setUser(usuario)}
			>
				Establecer usuario
			</button>
		</>
	);
};
