import { Box } from '@mui/system';
import React from 'react';
import { Navbar } from '../components/Navbar';

export const JournalLayout = ({ children }) => {
	const drawerWidth = 240;
	return (
		<Box sx={{ display: 'flex' }}>
			<Navbar drawerWidth={drawerWidth} />
			{/* siderbar */}

			<Box component='main' sx={{ flecGrow: 1, p: 3 }}>
				{/*toobal*/}
				{children}
			</Box>
		</Box>
	);
};
