import { div } from "framer-motion/client";
function Navbar() {
    return (
        <div><nav className="w-full p-4 fixed top-0 left-0 bg-white/10 backdrop-blur-md z-50 shadow-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-bold tracking-wide text-white drop-shadow-lg">Weather Dashboard</h1>
          <img src="/logo.svg" alt="Logo" className="w-10 h-10" />
        </div>
      </nav></div>
      
    );
  }
  
  export default Navbar;
  