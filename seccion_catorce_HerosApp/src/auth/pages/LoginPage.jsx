import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {
	//hook para poder llamar la funcion de login
	const { login } = useContext(AuthContext);

	//custom hook de Reac Router para navegar en la app
	const navigate = useNavigate();

	//funsion para logearse
	const onLogin = () => {
		login('Eduardo Padrino');
		navigate('/', { replace: true });
	};
	return (
		<div className='container mt-5'>
			<h1>LoginPage</h1>
			<hr />
			<button className='btn btn-primary' onClick={onLogin}>
				Login
			</button>
		</div>
	);
};
