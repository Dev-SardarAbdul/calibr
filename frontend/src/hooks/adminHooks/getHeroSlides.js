import axios from "axios";
import { BACKENDURL } from "../../constants";
import { useState } from "react";

export const getHeroSlidesHook = () => {
  const [slidesData, setSlidesData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getHeroSlides = async () => {
    setLoading(true);
    const result = await axios.get(`${BACKENDURL}/heroSlides`);

    try {
      if (result.status === 200) {
        setSlidesData(result.data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };

  return { slidesData, loading, getHeroSlides };
};
