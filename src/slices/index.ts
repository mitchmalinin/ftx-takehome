import { combineReducers } from "redux"
import nftSlice from "./nftSlice"

const rootReducer = combineReducers({
  nft: nftSlice,
})

export default rootReducer
