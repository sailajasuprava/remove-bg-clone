function Hero() {
  return (
    <main className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-10 py-20">
      {/* Left */}
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <div className="">
          <img
            src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=400&q=80"
            alt="person"
            className="w-64 h-auto rounded-xl z-10 relative"
          />
        </div>
        <div>
          <h1 className="text-6xl font-bold">Remove Image Background</h1>
          <p className="text-lg">
            100% Automatically and{" "}
            <span className="bg-yellow-300 px-2 rounded">Free</span>
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg mb-4">
            Upload Image
          </button>
          <p>or drop a file,</p>
          <a href="#" className="text-blue-500 underline">
            paste image
          </a>{" "}
          or{" "}
          <a href="#" className="text-blue-500 underline">
            URL
          </a>
        </div>
      </div>
    </main>
  );
}

export default Hero;
