import { configureStore } from '@reduxjs/toolkit'
import doctoresReducer from '../redux/slices/DoctoresSlices'

export const store = configureStore({
  reducer: {
    doctores: doctoresReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

