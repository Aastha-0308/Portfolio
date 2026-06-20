function Navbar() {
  return (
    <div className="navbar fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl sm:px-1 md:px-2 py-2 flex justify-between items-center">
      
      <div className="h-14 p-2 flex items-center gap-4 w-fit bg-white/30 backdrop-blur-md rounded-full">
        
        <div className="size-11 rounded-full bg-pink-50 flex items-center justify-center shadow-md">
          🌸
        </div>

        <div className="btn flex items-center gap-1 bg-pink-50 rounded-full px-2 py-1 shadow-sm">
          
          <button className="bg-pink-400 text-white px-5 py-1 rounded-full">
            Profile
          </button>

          <button className="text-pink-300 px-5 py-1 rounded-full">
            Projects
          </button>

          <button className="text-pink-300 px-5 py-1 rounded-full">
            More
          </button>

        </div>
      </div>

      <div className="hidden md:flex w-48 h-11 items-center justify-center bg-pink-400 text-white border-2 border-pink-200 shadow-sm rounded-bl-2xl rounded-tr-2xl ">
        Contact
      </div>

    </div>
  );
}

export default Navbar;