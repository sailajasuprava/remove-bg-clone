import { useNavigate } from "react-router-dom";
import { useImage } from "../context/ImageContext";

function Home() {
  const { setSelectedFile } = useImage();
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setSelectedFile(reader.result);
      };

      reader.readAsDataURL(file);
    }
    navigate("/upload");
  };

  return (
    <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-4 items-center justify-between px-10 py-12">
      {/* Left */}
      <div className="md:w-1/2 flex flex-col items-center space-y-6">
        <div className="flex justify-center items-center">
          <img
            src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=400&q=80"
            alt="person"
            className="w-[75%] h-full rounded-xl"
          />
        </div>
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="text-3xl lg:text-6xl font-bold">
            Remove Image Background
          </h1>
          <p className="text-lg">
            100% Automatically and{" "}
            <span className="bg-yellow-300 px-2 rounded">Free</span>
          </p>
        </div>
      </div>

      {/* Right */}

      <div className="md:w-1/2 bg-white shadow-2xl rounded-2xl p-10 w-full text-center">
        <label
          htmlFor="image"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full mb-4"
        >
          Upload Image
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
        <p className="mt-6 font-semibold">or drop a file,</p>
        <p className="text-xs">
          paste image or{" "}
          <span
            className="text-blue-500 underline"
            onClick={() => prompt("Image URL:")}
          >
            URL
          </span>
        </p>
      </div>
    </div>
  );
}

export default Home;
