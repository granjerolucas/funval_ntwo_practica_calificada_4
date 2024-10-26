import Image from "next/image";
import Link from "next/link";
import React from "react";

const LinkTypeStreaming = ({ title, url, description }) => {
  return (
    <Link href={url}>
      <div className=" w-32 relative flex flex-col gap-2 ">
        <div className="bg-primary h-48 flex justify-center items-center">
          <div className="absolute">
            <Image
              src={"/assets/placeholder.png"}
              alt={title}
              width={200}
              height={300}
              className="object-cover h-28"
            />
          </div>
          <div className="">
            <h1 className="text-white text-2xl uppercase font-semibold ">
              {title}
            </h1>
          </div>
        </div>
        <div>
          <p className=" text-sm">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default LinkTypeStreaming;
