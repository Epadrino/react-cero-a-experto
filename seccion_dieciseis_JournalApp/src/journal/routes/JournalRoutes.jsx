import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { JournalPage } from '../pages/JournalPage';

export const JournalRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<JournalPage />} />
			// ruta para llevar al usuario cuando no entre a la primera ruta
			<Route path='/*' element={<Navigate to='/' />} />
		</Routes>
	);
};
