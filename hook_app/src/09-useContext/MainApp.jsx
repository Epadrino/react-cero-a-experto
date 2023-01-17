import { Route, Routes } from 'react-router-dom';
import { HomePage } from './HomePage';
import { AboutPage } from './AboutPage';
import { LoginPage } from './LoginPage';
import { Navbar } from './Navbar';
import { UserProvider } from './context/UserProvider';
export const MainApp = () => {
	return (
		<UserProvider>
			<Navbar />
			<hr />

			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='about' element={<AboutPage />} />
				<Route path='login' element={<LoginPage />} />
				{/* componente que redireccione si escriben una pagina que no existe */}
				<Route path='/*' element={<Navigator to='/about' />} />
			</Routes>
		</UserProvider>
	);
};
