import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
	//custom hook de Reac Router para navegar en la app
	const navigate = useNavigate();

	//funsion para logearse
	const onLogin = () => {
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
