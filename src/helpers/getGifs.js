const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=uNZYN4WU6iFBXUt63r4QRs0EVtWegMRy&q=${category}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  
  return gifs;
};

export default getGifs;
