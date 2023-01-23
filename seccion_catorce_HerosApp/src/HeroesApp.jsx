import { AuthProvaider } from './auth/context/AuthProvaider';
import { AppRouter } from './router/AppRouter';

export const HeroesApp = () => {
	return (
		<AuthProvaider>
			<AppRouter />;
		</AuthProvaider>
	);
};
