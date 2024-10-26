import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <div className="bg-primary text-white py-10">
      <div className="container mx-auto ">
        <div className="mb-12">
          <ul className="text-gray-200 flex justify-start items-center gap-4 py-4">
            <li>Home</li>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
            <li>Collection Statement</li>
            <li>Help</li>
            <li>Manage Account</li>
          </ul>
          <p className="text-gray-400">
            Copyright © 2024 Funval. Práctica 4 - All rights reserved
          </p>
        </div>
        <div className="flex my-2 justify-between items-center gap-4 py-4">
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
