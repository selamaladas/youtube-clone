import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const cache = {};

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const options = {
  params: { maxResults: 50 },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  if (cache[url]) {
    console.log(`Returning cached response for ${url}`);
    return cache[url];
  }

  try {
    console.log(`Fetching new data for ${url}`);
    await delay(1000); // الانتظار لمدة ثانية واحدة بين الطلبات
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    cache[url] = data;
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
