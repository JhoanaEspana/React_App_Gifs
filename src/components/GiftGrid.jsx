import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifItem from './GifItem';

const GiftGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {isLoading && (<h2>Cargando ...</h2>)}

      {/*{images.map(img => {
          return <li key={img.id}>{img.title}</li>
        })} */}

      <div className="card-grid">
        {images.map((img) => (
          <GifItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

export default GiftGrid;
