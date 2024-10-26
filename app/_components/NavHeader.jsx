import Link from "next/link";
import React from "react";

const NavHeader = () => {
  return (
    <div className="relative bg-gradient-to-b from-blue-500 via-blue-600 to-blue-700 shadow-[0_0_15px_0px_rgba(10,10,10,0.5)] ">
      <div className="container mx-auto text-white">
        <div className="flex justify-between items-center py-4">
          <span className="font-semibold text-2xl">DEMO Streaming</span>
          <div className="flex gap-4 items-center">
            <Link href="/" className="px-4">
              Log in
            </Link>
            <Link href="/" className="bg-gray-700 py-2 px-4">
              Start your free trial
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavHeader;
