import { useState } from "react";
import axios from "axios";
import { BACKENDURL } from "../../constants";
import { toast } from "react-toastify";

export const getSingleSlideHook = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();

  const getSingleSlide = async (clickedItem) => {
    const response = await axios.get(`${BACKENDURL}/heroSlides/${clickedItem}`);

    try {
      setLoading(false);
      if (response.status === 200) {
        console.log(response, "res");
        setData(response.data);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return { loading, data, getSingleSlide };
};
