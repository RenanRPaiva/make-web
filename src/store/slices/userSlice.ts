import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../entities/User";

type UserState = User | null

const slice = createSlice({
    initialState: null as UserState,
    name:'userPrefix',
    reducers: {
        updateUser: (state, action: PayloadAction<User>) => {
            return action.payload
        }
    }
})

export const { updateUser } = slice.actions

export default slice.reducer