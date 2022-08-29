import { combineReducers } from "redux"
import nftCollectionsSlice from "./nftCollectionsSlice"
import nftsFilteredSlice from "./nftsFilteredSlice"

const rootReducer = combineReducers({
  nftCollections: nftCollectionsSlice,
  nftsFiltered: nftsFilteredSlice,
})

export default rootReducer
