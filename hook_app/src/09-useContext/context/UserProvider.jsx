import React, { useState } from 'react';
import { UserContex } from './userContex';

const usuario = {
	id: 123,
	name: 'Eduardo Padrino',
	email: 'epadrinoa@gmail.com',
};
export const UserProvider = ({ children }) => {
	const [user, setUser] = useState();
	return (
		<UserContex.Provider value={{ user, setUser, usuario }}>
			{children}
		</UserContex.Provider>
	);
};
