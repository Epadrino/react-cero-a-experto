import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GiftExpertApp = () => {
	const [categories, setCategories] = useState(['One Punch', 'dragon Ball']);

	const onAddCategory = (newCategory) => {
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
				onNewCategory={onAddCategory}
			/>

			{/* listado de Gif */}

			<ol>
				{categories.map((category) => {
					return <li key={category}>{category}</li>;
				})}
			</ol>
			{/* Gif Item */}
		</>
	);
};
