import axios from "axios";
import { BACKENDURL } from "../constants";
import { useState } from "react";

export const getHeroSlidesHook = () => {
  const [slidesData, setSlidesData] = useState([]);
  const getHeroSlides = async () => {
    const result = await axios.get(`${BACKENDURL}/heroSlides`);

    if (result.status === 200) {
      setSlidesData(result.data);
    }
  };

  return { slidesData, getHeroSlides };
};
