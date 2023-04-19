import http from "../utils/http.utils";

const postLoginApi = async ({ data }) => {
  const response = await http.post("/api/user/login", data);
  return response?.data;
};

export default postLoginApi;
