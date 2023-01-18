import { Navigate, Route, Routes } from 'react-router-dom';

import { Navbar } from '../../ui/components';
import { DcPage, HeroePage, MarvelPage, SearchPage } from '../pages';

export const Heroesroutes = () => {
	return (
		<>
			<Navbar />
			<div className='container'>
				<Routes>
					<Route path='marvel' element={<MarvelPage />} />
					<Route path='dc' element={<DcPage />} />

					<Route path='search' element={<SearchPage />} />
					<Route path='heroe/:id' element={<HeroePage />} />

					<Route path='/' element={<Navigate to='/marvel' />} />
				</Routes>
			</div>
		</>
	);
};
