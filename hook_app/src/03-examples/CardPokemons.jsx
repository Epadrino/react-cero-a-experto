export const CardPokemons = ({ name, nameType, urlImg }) => {
	return (
		<div>
			<img src={urlImg} alt='IMG' />
			<blockquote className='blockquote text-end'>
				<p className='mb-1'>{name}</p>
				<footer className='blockquote-footer'>{nameType}</footer>
			</blockquote>
		</div>
	);
};
