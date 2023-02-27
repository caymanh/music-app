//import utility functions
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "9a986db254msh3e9a18414377128p1dd856jsn58271c025ce6",
    "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
  },
};

fetch("https://shazam-core.p.rapidapi.com/v1/charts/world", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

//call createApi function
export const shazamCoreApi = createApi({
  //name of Api
  reducerPath: "shazamCoreApi",
});
