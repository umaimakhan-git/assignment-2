import React from "react";

function Navbar(){
  return (
    <nav className="flex justify-between items-center bg-[#252842] px-10 py-5">
      <div className="text-white text-2xl font-bold">BrandName</div>
      <nav className="flex gap-6">
        <a href="#" className="text-white hover:text-blue-300 transition-colors">Home</a>
        <a href="#" className="text-white hover:text-blue-300 transition-colors">Product</a>
        <a href="#" className="text-white hover:text-blue-300 transition-colors">Pricing</a>
        <a href="#" className="text-white hover:text-blue-300 transition-colors">Contact</a>
      </nav>
      <div className="flex gap-4">
        <a href="#" className="text-white  hover:text-blue-300 transition-colors border border-white py-1 px-4 rounded">Login</a>
        <a href="#" className="bg-blue-500 hover:text-black transition-colors text-white py-1 px-4 rounded">Join Us</a>
      </div> 
    </nav>
  );
};

export default Navbar;
