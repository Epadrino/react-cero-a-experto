import { Navigate, Route, Routes } from 'react-router-dom';

import { DcPage, MarvelPage } from '../heroes/pages';
import { LoginPage } from '../auth/pages';

export const AppRauter = () => {
	return (
		<>
			<Routes>
				<Route path='marvel' element={<MarvelPage />} />
				<Route path='dc' element={<DcPage />} />

				<Route path='login' element={<LoginPage />} />

				<Route path='/' element={<Navigate to='/marvel' />} />
			</Routes>
		</>
	);
};
