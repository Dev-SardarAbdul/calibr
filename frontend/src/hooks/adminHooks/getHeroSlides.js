import axios from "axios";
import { BACKENDURL } from "../../constants";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getAllSlides } from "../../redux/slices/adminSlices/heroSlidesSlice";

export const getHeroSlidesHook = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const getHeroSlides = async () => {
    setLoading(true);
    const result = await axios.get(`${BACKENDURL}/heroSlides`);

    try {
      if (result.status === 200) {
        dispatch(getAllSlides(result.data));
        setLoading(false);
      }
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };

  return { loading, getHeroSlides };
};
