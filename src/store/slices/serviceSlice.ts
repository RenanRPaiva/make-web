import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Service } from "../../entities/Service"
import { RootState } from "../store"

type ServiceState ={
    loadingService: boolean
    service: Service | null
}

const slice = createSlice({
    initialState: {
        loadingService: true,
        service: null
    } as ServiceState,
    name: 'servicePrefix',
    reducers: {
        updateService: (state, action: PayloadAction<Service>) => {
            state.service = action.payload
            state.loadingService = false
        },
        deleteService: (state) => {
            state.service = null
            state.loadingService = false
        }
    }
})

export const { updateService, deleteService } = slice.actions

export default slice.reducer
export const selectIsServiceLoggedIn = (state: RootState) => !!state.service.service
export const selectIsLoadingService = (state: RootState) => state.service.loadingService