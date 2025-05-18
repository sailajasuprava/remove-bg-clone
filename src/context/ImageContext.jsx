import { createContext, useContext, useState } from "react";

const ImageContext = createContext();

function ImageProvider({ children }) {
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <ImageContext.Provider
      value={{
        selectedFile,
        setSelectedFile,
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
