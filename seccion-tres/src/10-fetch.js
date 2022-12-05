const apiKey = "Swe55HdLsAIYqsZoMoKsFKMAIqh6TZ4d";

const petecion = fetch(
  `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`
);

petecion
  .then((resp) => resp.json())
  .then(({ data }) => {
    // preguntar sobre la desestructuracion de la api (seccion 3)
    const [data2] = data;
    const { url } = data2.images.original;

    const img = document.createElement("img");
    img.src = url;

    document.body.append(img);
  })
  .catch(console.warn);
