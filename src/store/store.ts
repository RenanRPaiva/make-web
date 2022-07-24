import { configureStore } from "@reduxjs/toolkit";
import estimateSlice from "./slices/estimateSlice";
import userSlice from "./slices/userSlice";

const store = configureStore({
    reducer: {
        user: userSlice,
        estimate: estimateSlice
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>