import { Box } from '@mui/system';
import React from 'react';

export const JournalLayout = ({ children }) => {
	return (
		<Box sx={{ display: 'flex' }}>
			{/* navbar */}
			{/* siderbar */}

			<Box component='main' sx={{ flecGrow: 1, p: 3 }}>
				{/*toobal*/}
				{children}
			</Box>
		</Box>
	);
};
