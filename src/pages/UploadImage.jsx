import { useImage } from "../context/ImageContext";

const UploadPage = () => {
  const { selectedFile } = useImage();

  return (
    <div className="min-h-screen p-8 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Left Side */}
        <div className="md:w-1/2">
          {selectedFile && (
            <img
              src={selectedFile}
              alt="Preview"
              className="w-full h-full rounded shadow"
            />
          )}
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex flex-col items-start gap-4">
          <div className="w-full h-[300px] flex items-center justify-center bg-gray-100 text-gray-500 rounded">
            No background-removed image
          </div>

          <button
            disabled={!selectedFile}
            className={`px-6 py-2 rounded-full mt-4 font-semibold transition ${
              selectedFile
                ? "bg-purple-600 text-white hover:bg-purple-700"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Remove Background
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadPage;
