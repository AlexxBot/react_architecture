import { configureStore } from "@reduxjs/toolkit"

import series from './slices/series/seriesSlice'

export default configureStore({
    reducer: {
        series,
    }
});