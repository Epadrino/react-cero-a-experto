const getGifs = async (category) => {
	const url = `api.giphy.com/v1/gifs/trending?api_key=dJZnWSm0oGKvjqM1ORfw7Gw9owKdBHlz&q=${category}`;
	const resp = await fetch(url);
	const { data } = await resp.json();
	const gifs = data.map((img) => ({
		id: img.id,
		tittle: img.tittle,
		url: img.images.downsized_medium.url,
	}));
	return gifs;
};

export const GifGrid = ({ category }) => {
	return (
		<>
			<h3>{category}</h3>
			<p>Aqui van las fotos</p>
		</>
	);
};
