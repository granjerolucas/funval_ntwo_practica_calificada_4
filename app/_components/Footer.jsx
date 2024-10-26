import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <div className="bg-slate-900 text-white">
      <div className="container mx-auto">
        <ul className="flex justify-start items-center gap-4 py-4">
          <li>Home</li>
          <li>Terms and Conditions</li>
          <li>Privacy Policy</li>
          <li>Collection Statement</li>
          <li>Help</li>
          <li>Manage Account</li>
        </ul>
        <p>Copyriht © 2024 Funval. Práctica 4 - All rights reserved</p>
        <div className="flex justify-between items-center gap-4 py-4">
          <div className="flex gap-4 [&>span>img]:w-10 [&>span>img]:h-8">
            <span>
              <Image
                src={"/assets/social/facebook-white.svg"}
                alt="Facebook"
                width={16}
                height={16}
              />
            </span>
            <span>
              <Image
                src={"/assets/social/twitter-white.svg"}
                alt="Facebook"
                width={16}
                height={16}
              />
            </span>
            <span>
              <Image
                src={"/assets/social/instagram-white.svg"}
                alt="Facebook"
                width={16}
                height={16}
              />
            </span>
          </div>
          <div className="self-end text-right flex gap-4   [&>span>img]:h-10 [&>span>img]:w-full">
            <span>
              <Image
                src={"/assets/store/app-store.svg"}
                alt="Facebook"
                width={200}
                height={16}
              />
            </span>
            <span>
              <Image
                src={"/assets/store/play-store.svg"}
                alt="Facebook"
                width={200}
                height={16}
              />
            </span>
            <span>
              <Image
                className="h-10"
                src={"/assets/store/windows-store.svg"}
                alt="Windows"
                width={200}
                height={16}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
