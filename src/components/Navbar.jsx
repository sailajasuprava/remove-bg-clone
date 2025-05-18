function Navbar() {
  return (
    <header className="flex items-center justify-between px-8 py-4 shadow">
      <div className="text-2xl font-bold flex items-center gap-2">
        <div className="w-6 h-6 bg-gray-400 rounded-sm" />
        <span>
          remove<span className="font-light">bg</span>
        </span>
      </div>
      <nav className="space-x-6 hidden md:flex">
        <a href="#" className="hover:underline">
          Remove Background
        </a>
        <a href="#" className="hover:underline">
          Features
        </a>
        <a href="#" className="hover:underline">
          For Business
        </a>
        <a href="#" className="hover:underline">
          Tools & API
        </a>
        <a href="#" className="hover:underline">
          Pricing
        </a>
      </nav>
      <div className="space-x-4">
        <button className="text-sm font-medium">Log in</button>
        <button className="bg-gray-200 px-4 py-1 rounded-full">Sign up</button>
      </div>
    </header>
  );
}

export default Navbar;
