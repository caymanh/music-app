//import utility functions
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//call createApi function
export const shazamCoreApi = createApi({
  //name of Api
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1/',
    prepareHeaders: (headers) => {
        headers.set('X-RapidAPI-Key', '');

        return headers;
    },
  }),
  //add endpoints property
  endpoints: (builder) => ({
  //build all endpoints of api that will be called
    getTopCharts: builder.query({ query: './charts/world' }),
  }),
});

export const {
  useGetTopChartsQuery,  
} = shazamCoreApi;
