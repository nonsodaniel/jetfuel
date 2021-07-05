import axios from "axios";

export const Get = async (url) => {
  try {
    return await axios.get(url);
  } catch (error) {
    throw error;
  }
};
