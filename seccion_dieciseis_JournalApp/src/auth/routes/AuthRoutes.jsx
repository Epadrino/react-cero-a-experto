import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage, RegisterPage } from '../pages';

export const AuthRoutes = () => {
	return (
		<Routes>
			<Route path='login' element={<LoginPage />} />
			<Route path='register' element={<RegisterPage />} />
			// ruta para llevar al usuario cuando no entre a las dos primeras
			<Route path='/*' element={<Navigate to='/auth/login' />} />
		</Routes>
	);
};
