import React from "react";
import { useGif } from "../hooks/useGif";
import { GiftGridItem } from "./GiftGridItem";

export const GiftGrid = ({ category }) => {
  const { images, loading } = useGif(category);

  return (
    <>
      <h3>{category}</h3>

      {loading && <p>loading....</p>}

      <div className="car-grid">
        {images.map((img) => (
          <GiftGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
