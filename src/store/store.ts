import { configureStore } from "@reduxjs/toolkit";
import serviceSlice from "./slices/serviceSlice";
import userSlice from "./slices/userSlice";

const store = configureStore({
    reducer: {
        user: userSlice,
        service: serviceSlice
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>