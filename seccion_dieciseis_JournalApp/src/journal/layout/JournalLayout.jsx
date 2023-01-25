import { Box } from '@mui/system';
import React from 'react';
import { Navbar, SideBar } from '../components';

export const JournalLayout = ({ children }) => {
	const drawerWidth = 240;
	return (
		<Box sx={{ display: 'flex' }}>
			<Navbar drawerWidth={drawerWidth} />
			<SideBar drawerWidth={drawerWidth} />

			<Box component='main' sx={{ flecGrow: 1, p: 3 }}>
				{/*toobal*/}
				{children}
			</Box>
		</Box>
	);
};
