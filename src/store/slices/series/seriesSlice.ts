import { createSlice } from "@reduxjs/toolkit"

export const seriesSlice = createSlice({
    name: "series",
    initialState: {
        list: []
    },
    reducers: {
        setSeriesList: (state, action) => {
            state.list = action.payload
        }
    }
})

export const { setSeriesList } = seriesSlice.actions

export default seriesSlice.reducer;