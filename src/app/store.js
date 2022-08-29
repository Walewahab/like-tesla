import { configureStore } from "@reduxjs/tookit";
import carReducer from "../features/car/carSlice";


export const store = configureStore({
   reducer: {
      car: carReducer
   },
});