import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth/context/AuthContext';

export const PrivateRoute = ({ children }) => {
	// hook para obetener el esatado del usuario
	const { logged } = useContext(AuthContext);

	// custom hook de React Route para obtener las rutas de navegacion
	const { pathname, search } = useLocation();

	// constante para guardar la ruta de navegacion
	const lastPath = pathname + search;
	localStorage.setItem('lastPath', lastPath);

	return logged ? children : <Navigate to='/login' />;
};
