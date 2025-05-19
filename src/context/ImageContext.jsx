import { createContext, useContext, useState } from "react";
import axios from "axios";
const ImageContext = createContext();

function ImageProvider({ children }) {
  const [image, setImage] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  const [bgRemovedImage, setBgRemovedImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleRemoveBackground() {
    setIsLoading(true);
    try {
      if (!image) return;
      console.log(import.meta.env.VITE_WITHOUT_BG);
      const response = await axios.post(
        "https://api.withoutbg.com/v1.0/image-without-background-base64",
        {
          image_base64: image,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "X-API-Key": import.meta.env.VITE_WITHOUT_BG,
          },
        }
      );

      const bgRemovedImage =
        response?.data?.img_without_background_base64 || "";

      setBgRemovedImage(bgRemovedImage);
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <ImageContext.Provider
      value={{
        image,
        setImage,
        previewImage,
        setPreviewImage,
        bgRemovedImage,
        setBgRemovedImage,
        handleRemoveBackground,
        isLoading,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
}

export function useImage() {
  const context = useContext(ImageContext);
  if (!context) throw new Error("ImageContext used outside of provider.");
  return context;
}

export default ImageProvider;
