import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GiftExpertApp = () => {
	const [categories, setCategories] = useState(['One Punch']);

	const onAddCategory = (newCategory) => {
		if (categories.includes(newCategory)) return;
		setCategories([newCategory, ...categories]);
		// setCategories = [...categories, "Valoran"];
	};
	return (
		<>
			{/* titulo */}
			<h1>GiftExpertApp</h1>

			{/* imput */}
			<AddCategory
				// setCategories={setCategories}
				onNewCategory={(value) => onAddCategory(value)}
			/>

			{/* listado de Gif */}

			{categories.map((category) => (
				<GifGrid key={category} category={category} />
			))}

			{/* Gif Item */}
		</>
	);
};
