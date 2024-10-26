"use client";
import { useEffect, useState } from "react";
import { getStreamingByType, getTypes } from "@/src/api/streaming.api";
import ContentItem from "../_components/ContentItem";
import PageLoading from "../_components/PageLoading";

export default function MoviesPage() {
  const [content, setContent] = useState([]);
  useEffect(() => {
    const req = getStreamingByType("movie");
    req.action.then((res) => {
      setContent(res.data);
    });
    return () => {
      req.cancel();
    };
  }, []);
  return (
    <div className="flex flex-wrap gap-4 ">
      {content.length == 0 && <PageLoading />}
      {content.map((item, index) => (
        <ContentItem key={index} {...item} />
      ))}
    </div>
  );
}
