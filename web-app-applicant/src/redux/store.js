import { configureStore } from "@reduxjs/toolkit";
import countryReducer from "./features/country/countrySlice";
import travelReducer from "./features/country/travelSlice";

export const store = configureStore({
  reducer: {
    countries: countryReducer,
    travel: travelReducer,
  },
});
