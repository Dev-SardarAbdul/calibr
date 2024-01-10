import React from "react";
import { motion } from "framer-motion";
import { IoCloseCircleOutline } from "react-icons/io5";
import { editSlideHook } from "../../../../hooks/adminHooks/editSlide";
import Loader from "../../../loader";
import { useState } from "react";
import { getStorage } from "firebase/storage";
import { app } from "../../../../../firebase";

function EditSlideModal({ setShowEditModal, clickedItem }) {
  const [image, setImage] = useState(null);
  const [topText, setToptext] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [fetchedImg, setFetchedImg] = useState(null);
  const [isImageUploading, setIsImageUploading] = useState(false);
  const { loading, editSlide } = editSlideHook();

  useEffect(() => {
    if (image) {
      handleFileUpload(image);
    }
  }, [image]);

  const handleFileUpload = async (image) => {
    try {
      setIsImageUploading(true);

      const storage = getStorage(app);
      const fileName = new Date().getTime() + image.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          console.error("Error uploading file:", error);
          setIsImageUploading(false);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then((downloadURL) => {
              console.log("Download URL:", downloadURL);
              setFetchedImg(downloadURL);
              setIsImageUploading(false);
            })
            .catch((error) => {
              console.error("Error getting download URL:", error);
              setIsImageUploading(false);
            });
        }
      );
    } catch (error) {
      console.error("Error uploading file:", error);
      setIsImageUploading(false);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    editSlide({
      topText,
      name,
      price,
      fetchedImage: fetchedImg,
      setShowEditModal,
    });
  };
  return (
    <>
      {loading && <Loader />}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, delay: 0.1 }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center w-full h-full p-2 bg-black bg-opacity-80"
        onClick={() => setShowEditModal(false)}
      >
        <div
          className="relative w-full p-4 bg-white rounded-lg lg:p-8 sm:w-1/2 lg:gap-8 shadow-modalBoxShadow"
          onClick={(e) => e.stopPropagation()}
        >
          <IoCloseCircleOutline
            className="absolute text-[32px] text-secondary cursor-pointer top-2 right-2"
            onClick={() => setShowEditModal(false)}
          />
          <h2 className="text-center text-[24px] lg:text-[32px] font-[600] secondary-font text-secondary ">
            Edit Slide
          </h2>
          <div className="grid grid-cols-1 gap-2 mt-4 lg:gap-4 lg:grid-cols-2 ">
            <div className="flex flex-col items-start gap-2">
              <label className="text-center text-[20px]  font-[600] secondary-font text-secondary">
                Slide Detailed Top Text:
              </label>
              <input
                className="w-full px-4 py-2 transition-all duration-500 bg-white border rounded-sm outline-none border-slate-200 focus:border-secondary text-slate-500"
                type="text"
                value={topText}
                onChange={(e) => setToptext(e.target.value)}
                placeholder="Enter Slide Detailed Text"
              />
            </div>

            <div className="flex flex-col items-start gap-2">
              <label className="text-center text-[20px]  font-[600] secondary-font text-secondary">
                Slide Name:
              </label>
              <input
                className="w-full px-4 py-2 transition-all duration-500 bg-white border rounded-sm outline-none border-slate-200 focus:border-secondary text-slate-500"
                type="text"
                placeholder="Enter Slide Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="flex flex-col items-start gap-2">
              <label className="text-center text-[20px]  font-[600] secondary-font text-secondary">
                Slide Price:
              </label>
              <input
                className="w-full px-4 py-2 transition-all duration-500 bg-white border rounded-sm outline-none border-slate-200 focus:border-secondary text-slate-500"
                type="number"
                placeholder="Enter Slide  Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div className="flex flex-col items-start gap-2">
              <label className="text-center text-[20px]  font-[600] secondary-font text-secondary">
                Slide Image:
              </label>
              <input
                className="py-2 transition-all duration-500 rounded-sm outline-none cursor-pointer text-slate-500"
                type="file"
                placeholder="Enter Slide Name"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
          </div>
          <button className="bg-white block mx-auto mt-8 text-secondary px-4 sm:px-8 py-2 text-[14px] sm:text-[16px] font-[600] tracking-wider hover:bg-secondary hover:text-white border border-secondary hover:border-white duration-500">
            Edit
          </button>
        </div>
      </motion.div>
    </>
  );
}

export default EditSlideModal;
