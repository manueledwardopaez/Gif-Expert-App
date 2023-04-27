import useFetchGifs from "../hooks/useFetchGifs";
import GridItem from "./GridItem";

const GifGrid = ({ category }) => {

  const {images, isLoading} = useFetchGifs(category)
  

  return (
    <>
      <h3>{category}</h3>

      {
        /* Si isLoading es true, renderiza el h2. */
        isLoading && <h2>Cargando...</h2>
      }

      <div className="card-grid">
        {images.map((img) => (
          <GridItem key={img.id}
            {...img}
          />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
