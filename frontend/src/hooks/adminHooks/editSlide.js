import axios from "axios";
import { useState } from "react";
import { BACKENDURL } from "../../constants";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { editSlideSlice } from "../../redux/slices/adminSlices/heroSlidesSlice";

export const editSlideHook = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const editSlide = async (
    topText,
    name,
    price,
    fetchedImg,
    clickedItem,
    setShowEditModal
  ) => {
    setLoading(true);
    const response = await axios.put(
      `${BACKENDURL}/heroSlides/${clickedItem}`,
      {
        topText,
        name,
        price,
        fetchedImage: fetchedImg,
      }
    );

    try {
      if (response.status === 200) {
        setLoading(false);
        console.log(response);
        dispatch(editSlideSlice(response.data));
        toast.success("Slide edited successfully!");
        setShowEditModal(false);
      }
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };
  return { loading, editSlide };
};
