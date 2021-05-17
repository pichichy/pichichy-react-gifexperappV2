import axios from "axios";

const KEY_GIF = "gLNzpTu3d45F1bwpWzoVd2tjNm7Zdp5x";

export const getGif = async (category) => {
  const {
    data: { data },
  } = await axios.get(
    `https://api.giphy.com/v1/gifs/search?api_key=${KEY_GIF}&&q=${encodeURI(
      category
    )}&&limit=5`
  );

  const imgArr = data.map((info) => {
    return {
      title: info.title,
      id: info.id,
      url: info.images?.downsized_medium.url,
    };
  });

  return imgArr;
};
