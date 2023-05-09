import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  return (
    <div className="text-white flex justify-between px-4 h-24 items-center max-w-[1240px] mx-auto">
      <ul className="flex hidden">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>

      <div>
        <AiOutlineMenu size={20} />
      </div>

      <div className="fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-gray-700">
        <h1 className="flex text-2xl text-green-400 font-bold ">REACT.</h1>
        <ul className="pt-24 uppercase">
          <li className="p-4">Home</li>
          <li className="p-4">Account</li>
          <li className="p-4">Sign In</li>
          <li className="p-4">Get Started</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
