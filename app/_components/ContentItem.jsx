import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ContentItem = ({ title, images, description, releaseYear }) => {
  const [showPopover, setShowPopover] = useState(false);
  return (
    <div className=" w-32 relative flex flex-col gap-2 ">
      <div className="bg-primary h-48 flex justify-center items-center">
        <div className="absolute hover:scale-110 hover:opacity-80 transition-transform duration-300 ">
          <Image
            src={images.PosterArt.url}
            alt={title}
            width={1000}
            height={1500}
            className="object-coverx h-28x shadow-sm shadow-black"
          />
        </div>
        <div className="">
          <h1 className="text-white text-base uppercase font-semibold "> </h1>
        </div>
        {showPopover && (
          <div
            data-popover
            id="popover-default"
            role="tooltip"
            className="absolute  z-10 bottom-[8rem]  inline-block  text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0x dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
          >
            <div className="px-3 py-2">
              <div className="flex gap-4 items-center">
                <div className="w-32">
                  <Image
                    src={images.PosterArt.url}
                    alt={title}
                    width={1000}
                    height={1500}
                    className="object-coverx h-28x shadow-sm shadow-black"
                  />
                </div>
                <div className="w-[20rem] flex flex-col gap-2">
                  <p className="font-semibold">{title}</p>
                  <p>{description}</p>
                  <p className="mt-2 font-bold">{releaseYear}</p>
                </div>
              </div>
            </div>
            <div data-popper-arrow></div>
          </div>
        )}
      </div>
      <div>
        <p
          className=" text-sm cursor-pointer mt-2"
          onClick={() => {
            setShowPopover(!showPopover);
          }}
        >
          {title}
        </p>
      </div>
    </div>
  );
};

export default ContentItem;
