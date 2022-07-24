import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../entities/User";
import { RootState } from "../store";

type UserState = {
    loadingUser: boolean
    user: User | null
} 

const slice = createSlice({
    initialState: {
        loadingUser: true, 
        user: null 
    } as UserState,
    name:'userPrefix',
    reducers: {
        updateUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload
            state.loadingUser = false
        },
        deleteUser: (state) => {
            state.user = null
            state.loadingUser = false
        }
    }
})

export const { updateUser, deleteUser } = slice.actions

export default slice.reducer

export const selectIsUserLoggedIn = (state: RootState) => !!state.user.user
export const selectIsLoadingUser = (state: RootState) => state.user.loadingUser
export const selectUser = ( state: RootState ) => state.user.user