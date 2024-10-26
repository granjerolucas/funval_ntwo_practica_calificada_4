import Link from "next/link";
import React from "react";

const NavHeader = () => {
  return (
    <div className="bg-slate-700">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-4 px-4">
          <span>DEMO Streaming</span>
          <div>
            <Link href="/">Log in</Link>
            <Link href="/">Start your free trial</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavHeader;
