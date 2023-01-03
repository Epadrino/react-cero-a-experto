import { useContext } from 'react';
import { UserContex } from './context/userContex';

export const HomePage = () => {
	const { user } = useContext(UserContex);

	return (
		<>
			<div>HomePage {user?.name}</div>
			<hr />

			<pre>{JSON.stringify(user, null, 3)}</pre>
		</>
	);
};
