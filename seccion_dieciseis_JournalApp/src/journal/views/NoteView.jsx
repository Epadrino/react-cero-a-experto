import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { ImageGallery } from '../components';

export const NoteView = () => {
	return (
		<Grid
			container
			direcction='row'
			justifyContent='space-between'
			alignItems='center'
			sx={{ mb: 1 }}
		>
			<Grid item>
				<Typography fontSize={39} fontWeight='ligth'>
					28 de agosto, 2023
				</Typography>
			</Grid>
			<Grid item>
				<Button color='primary' sx={{ padding: 2 }}>
					<SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
					Guardar
				</Button>
			</Grid>
			<Grid container>
				<TextField
					type='text'
					vaiante='filled'
					fullWidth
					placeholder='Ingrese un Titulo'
					label='Título'
					sx={{ border: 'none', mb: 1 }}
				/>
				<TextField
					type='text'
					vaiante='filled'
					fullWidth
					multiline
					placeholder='Descripción'
					label='¿Qué sucedió en el dia de hoy?'
					minRows={5}
				/>
			</Grid>
			<ImageGallery />
		</Grid>
	);
};
