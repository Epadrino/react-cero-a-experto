import { Route, Routes } from 'react-router-dom';

import { LoginPage } from '../auth/pages';
import { Heroesroutes } from '../heroes';

export const AppRauter = () => {
	return (
		<>
			<Routes>
				<Route path='login' element={<LoginPage />} />
				<Route path='/*' element={<Heroesroutes />} />
			</Routes>
		</>
	);
};
