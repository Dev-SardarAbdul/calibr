import axios from "axios";
import { BACKENDURL } from "../../constants";
import { toast } from "react-toastify";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewSlide } from "../../redux/slices/adminSlices/heroSlidesSlice";

export const createSlideHook = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

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
        dispatch(addNewSlide(result.data));
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
