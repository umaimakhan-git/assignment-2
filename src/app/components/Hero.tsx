import React from "react";

function Hero(){
  return (
    <div className="text-center py-20 bg-[#252842] text-white">
      <p className="text-blue-400 text-lg">Welcome</p>
      <h1 className="text-4xl font-bold my-4">Selling on the internet like a pro</h1>
      <p className="text-gray-300 mb-6">
        We know how large objects will act, but things on a small scale just do not act that way.
      </p>
      <div className="flex justify-center gap-4">
        <a href="#" className="bg-blue-500 text-white py-2 px-6 rounded hover:text-black transition-colors">Get Quote Now</a>
        <a href="#" className="border border-blue-500 text-blue-500 py-2 px-6 rounded hover:text-white transition-colors">Learn More</a>
      </div>
    </div>
  );
};

export default Hero;
