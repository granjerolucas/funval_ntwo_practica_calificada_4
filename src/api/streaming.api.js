import { addRequest } from ".";

export const getTypes = () => {
  return addRequest("/api/streaming_type/", "GET");
};
export const getStreamingByType = (type) => {
  return addRequest(`/api/streaming/${type}`, "GET");
};
