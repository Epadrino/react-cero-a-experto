import { TurnedInNot } from '@mui/icons-material';
import {
	Box,
	Divider,
	Drawer,
	Grid,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Toolbar,
	Typography,
} from '@mui/material';

export const SideBar = ({ drawerWidth = 240 }) => {
	return (
		<Box
			component='nav'
			sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
		>
			<Drawer
				variant='permanent'
				open
				sx={{
					display: { xs: 'block' },
					'& .MuiDrawer-paper': {
						boxSizing: 'border-box',
						width: drawerWidth,
					},
				}}
			>
				<Toolbar>
					<Typography variant='h6' noWrap component='div'>
						Eduardo Padrino
					</Typography>
				</Toolbar>
				<Divider />

				<list>
					{['Enero', 'Febrero', 'Marzo', 'Abril'].map((text) => (
						<ListItem key={text} disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<TurnedInNot />
								</ListItemIcon>
								<Grid container>
									<ListItemText primary={text} />
									<ListItemText
										secondary={
											'Ea occaecat mollit amet minim ut ipsum eu'
										}
									/>
								</Grid>
							</ListItemButton>
						</ListItem>
					))}
				</list>
			</Drawer>
		</Box>
	);
};
