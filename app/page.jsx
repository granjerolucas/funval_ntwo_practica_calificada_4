"use client";
import Image from "next/image";
import Wrapper from "./_components/Wrapper";
import { useEffect, useState } from "react";
import PageLoading from "./_components/PageLoading";
import { getTypes } from "@/src/api/streaming.api";
import LinkTypeStreaming from "./_components/LinkTypeStreaming";

export default function Home() {
  const [links, setLinks] = useState([]);
  useEffect(() => {
    const req = getTypes();
    req.action.then((res) => {
      setLinks(res.data);
    });
    return () => {
      req.cancel();
    };
  }, []);
  return (
    <Wrapper title="Popular Titles">
      {links.length == 0 && <PageLoading />}
      <div className="flex flex-wrap gap-4 ">
        {links.map((link, index) => (
          <LinkTypeStreaming key={index} {...link} />
        ))}
      </div>
    </Wrapper>
  );
}
