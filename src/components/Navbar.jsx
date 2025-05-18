function Navbar() {
  return (
    <header className="flex items-center justify-between px-8 py-4 shadow">
      <div className="text-2xl font-bold flex items-center gap-2">
        <div className="w-6 h-6 bg-gray-400 rounded-sm" />
        <span>
          remove<span className="font-light">bg</span>
        </span>
      </div>
      <nav className="hidden lg:flex">
        <button className="nav">Remove Background</button>
        <button className="nav">Features</button>
        <button className="nav">For Business</button>
        <button className="nav">Tools & API</button>
        <button className="nav">Pricing</button>
      </nav>
      <div className="space-x-4">
        <button className="text-sm font-medium">Log in</button>
        <button className="bg-gray-200 px-4 py-1 rounded-full">Sign up</button>
      </div>
    </header>
  );
}

export default Navbar;
