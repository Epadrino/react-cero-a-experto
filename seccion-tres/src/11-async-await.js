const getImagen = async () => {
  try {
    const apiKey = "Swe55HdLsAIYqsZoMoKsFKMAIqh6TZ4d";
    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`
    );
    const { data } = await resp.json();
    const [data2] = await data;
    const { url } = await data2.images.original;

    const img = document.createElement("img");
    img.src = url;

    document.body.append(img);
  } catch (error) {}
};

getImagen();
