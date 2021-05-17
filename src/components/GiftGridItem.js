import React from "react";

export const GiftGridItem = ({ url, title }) => {
  return (
    <div className="card">
      <img src={url} alt={title} />
    </div>
  );
};
