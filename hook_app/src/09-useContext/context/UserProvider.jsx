import React from 'react';
import { UserContex } from './userContex';

const user = {
	id: 123,
	name: 'Eduardo Padrino',
	email: 'epadrinoa@gmail.com',
};
export const UserProvider = ({ children }) => {
	return (
		<UserContex.Provider value={{ hola: 'Mundo' }}>
			{children}
		</UserContex.Provider>
	);
};
