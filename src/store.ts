import { configureStore } from "@reduxjs/toolkit"
import { AnyAction } from "redux"
import { ThunkDispatch } from "redux-thunk"
import rootReducer from "./slices"

const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type TypedDispatch = ThunkDispatch<RootState, any, AnyAction>

export default store
