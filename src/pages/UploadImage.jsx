import { useImage } from "../context/ImageContext";

const UploadPage = () => {
  const { previewImage, bgRemovedImage, isLoading, handleRemoveBackground } =
    useImage();

  return (
    <div className="min-h-screen p-8 pb-20 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Left Side */}
        <div className="md:w-1/2">
          {previewImage && (
            <>
              <img
                src={previewImage}
                alt="Preview"
                className="w-full h-full rounded shadow"
              />

              <button
                onClick={handleRemoveBackground}
                disabled={bgRemovedImage || isLoading}
                className={`px-6 py-2 disabled:opacity-50 rounded-full mt-4 font-semibold transition bg-purple-600 text-white hover:bg-purple-700`}
              >
                Remove Background
              </button>
            </>
          )}
        </div>

        {/* Right Side */}
        <div className="md:w-1/2">
          {bgRemovedImage ? (
            <>
              <img
                src={`data:image/png;base64,${bgRemovedImage}`}
                alt="image"
                className="h-full w-full object-cover"
              />
              <a
                href={`data:image/png;base64,${bgRemovedImage}`}
                download="bgremoded-image.png"
              >
                <button className="px-6 py-2 rounded-full mt-4 font-semibold transition bg-purple-600 text-white hover:bg-purple-700">
                  Download
                </button>
              </a>
            </>
          ) : (
            <div className="w-full h-[300px] flex items-center justify-center bg-gray-100 text-gray-500 rounded">
              No background-removed image
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadPage;
