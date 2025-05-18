import { useState } from "react";
import { BiMenu } from "react-icons/bi";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="flex items-center justify-between px-8 py-4 shadow">
      <div className="text-3xl font-bold">
        remove<span className="text-gray-400">bg</span>
      </div>
      <nav className={`${showMenu ? "nav-mobile" : "nav-desk"} `}>
        <button className="nav">Remove Background</button>
        <button className="nav">Features</button>
        <button className="nav">For Business</button>
        <button className="nav">Tools & API</button>
        <button className="nav">Pricing</button>
        <div className="gap-4 flex flex-col lg:flex-row lg:ml-8">
          <button className="text-sm font-medium">Log in</button>
          <button className="bg-gray-200 px-4 py-1 rounded-full">
            Sign up
          </button>
        </div>
      </nav>

      <button
        className="lg:hidden"
        onClick={() => setShowMenu((prev) => !prev)}
      >
        <BiMenu />
      </button>
    </header>
  );
}

export default Navbar;
