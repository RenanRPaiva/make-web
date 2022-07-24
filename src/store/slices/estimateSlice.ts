import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Estimate } from "../../entities/Estimate"
import { RootState } from "../store"

type EstimateSatate = {
    currentEstimate: Estimate | null    
}

const initialState: EstimateSatate = {
    currentEstimate: null
}

const slice = createSlice({
    name: 'estimate',
    initialState,
    reducers: {
        setCurrentEstimate: (state, action: PayloadAction<Estimate>) => {
            state.currentEstimate = action.payload
        },
        clearCurrentEstimate: () => initialState
    },
})

export const { setCurrentEstimate, clearCurrentEstimate } = slice.actions

export default slice.reducer

export const selectCurrentEstimate = (state: RootState) => state.estimate.currentEstimate
export const selectHasCurrentEstimate = (state: RootState)=> !!state.estimate.currentEstimate