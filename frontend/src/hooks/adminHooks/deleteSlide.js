import { useState } from "react";
import { BACKENDURL } from "../../constants";
import { toast } from "react-toastify";
import { deleteSlideSlice } from "../../redux/slices/adminSlices/heroSlidesSlice";
import { useDispatch } from "react-redux";
import axios from "axios";

export const deleteSlideHook = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const deleteSlide = async (clickedItem, setShowDeleteModal) => {
    setLoading(true);
    const result = await axios.delete(
      `${BACKENDURL}/heroSlides/${clickedItem}`
    );

    try {
      setLoading(false);
      if (result.status === 200) {
        toast.success("Slide Deleted");
        dispatch(deleteSlideSlice(result.data._id));
        setShowDeleteModal(false);
      }
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  return { loading, deleteSlide };
};
