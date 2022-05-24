import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../entities/User";
import { RootState } from "../store";

type UserState = User | null

const slice = createSlice({
    initialState: null as UserState,
    name:'userPrefix',
    reducers: {
        updateUser: (state, action: PayloadAction<User>) => {
            return action.payload
        },
        deleteUser: () => {
            return null
        }
    }
})

export const { updateUser, deleteUser } = slice.actions

export default slice.reducer

export const selectIsUserLoggedIn = (state: RootState) => !!state.user