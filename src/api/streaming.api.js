import { addRequest } from ".";

export const getTypes = () => {
  return addRequest("/api/streaming_type/", "GET");
};
