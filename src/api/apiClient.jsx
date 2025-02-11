import axios from "axios";

export const apiClient = async ({ url, method = "GET", data = null }) => {
    
  const response = await axios({ url, method, data });
  return response.data;
};
