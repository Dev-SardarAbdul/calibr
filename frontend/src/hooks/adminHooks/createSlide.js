import axios from "axios";
import { BACKENDURL } from "../../constants";
import { toast } from "react-toastify";
import { useState } from "react";

export const createSlideHook = () => {
  const [isLoading, setIsLoading] = useState(false);

  const createSlide = async ({
    topText,
    name,
    price,
    fetchedImage,
    setShowAddModal,
  }) => {
    setIsLoading(true);
    const result = await axios.post(`${BACKENDURL}/heroSlides`, {
      topText,
      name,
      price,
      fetchedImage,
    });

    try {
      if (result.status === 200) {
        toast.success("Slide added");
        setIsLoading(false);
        setShowAddModal(false);
      }
    } catch (error) {
      toast.error(`${error.message}`);
      setIsLoading(false);
    }
  };

  return { createSlide, isLoading };
};
