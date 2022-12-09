import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GiftExpertApp = () => {
	const [categories, setCategories] = useState(['One Punch', 'dragon Ball']);

	const onAddCategory = () => {
		setCategories([...categories, 'Valoran']);
		// setCategories = [...categories, "Valoran"];
	};
	return (
		<>
			{/* titulo */}
			<h1>GiftExpertApp</h1>

			{/* imput */}
			<AddCategory />
			{/* listado de Gif */}
			<button onClick={onAddCategory}>Agregar</button>
			<ol>
				{categories.map((category) => {
					return <li key={category}>{category}</li>;
				})}
			</ol>
			{/* Gif Item */}
		</>
	);
};
