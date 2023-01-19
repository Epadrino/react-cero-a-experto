import { AuthProvaider } from './auth/context/AuthProvaider';
import { AppRauter } from './router/AppRauter';

export const HeroesApp = () => {
	return (
		<AuthProvaider>
			<AppRauter />;
		</AuthProvaider>
	);
};
