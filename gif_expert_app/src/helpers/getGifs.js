export const getGifs = async (category) => {
	const url = `https://api.giphy.com/v1/gifs/trending?api_key=dJZnWSm0oGKvjqM1ORfw7Gw9owKdBHlz&q=${category}&limit=20`;
	const resp = await fetch(url);

	const { data } = await resp.json();
	const gifs = data.map((img) => ({
		id: img.id,
		tittle: img.tittle,
		url: img.images.downsized_medium.url,
	}));
	console.log(gifs);
	return gifs;
};
