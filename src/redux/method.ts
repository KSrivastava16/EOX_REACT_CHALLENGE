import { newsAPIURL } from "../constants/newsAPI";

export const fetchNewsMethod = async () => {
  try {
    const response = await fetch(newsAPIURL);
    const finalResponse = await response.json();
    return finalResponse;
  } catch (error) {
    return error;
  }
};
