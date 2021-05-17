import { useEffect, useState } from "react";
import { getGif } from "../helpers/fetchGit";

export const useGif = (category) => {
  const [info, setInfo] = useState({ images: [], loading: true });

  useEffect(() => {
    setTimeout(() => {
      getGif(category).then((images) => {
        setInfo({ images, loading: false });
      });
    }, 3000);
  }, [category]);

  return info;
};
