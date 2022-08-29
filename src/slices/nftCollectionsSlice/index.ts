import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ItemIndexes, NFTCollection } from "../../types/nft"
import { fetchNFTCollections } from "./thunks"

type State = {
  isLoading: boolean
  nftCollections: NFTCollection[]
  totalNFTCollections: number
  error: string | null
  collectionItemIndex: ItemIndexes
}

export const initialState: State = {
  isLoading: false,
  nftCollections: [],
  error: null,
  totalNFTCollections: 0,
  collectionItemIndex: {
    startInclusive: 0,
    endExclusive: 25,
  },
}

const nftCollectionsSlice = createSlice({
  name: "nftCollections",
  initialState,
  reducers: {
    updateCollectionItemIndexes: (
      state,
      action: PayloadAction<ItemIndexes>
    ) => {
      state.collectionItemIndex = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNFTCollections.pending, (state) => {
        state.isLoading = true
      })
      .addCase(
        fetchNFTCollections.fulfilled,
        (
          state,
          action: PayloadAction<{
            collections: NFTCollection[]
            count: number
          }>
        ) => {
          const { count, collections } = action.payload
          state.isLoading = false
          state.nftCollections = collections
          state.totalNFTCollections = count
        }
      )
      .addCase(
        fetchNFTCollections.rejected,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false
          state.error = action.payload
        }
      )
  },
})

export const { updateCollectionItemIndexes } = nftCollectionsSlice.actions

export default nftCollectionsSlice.reducer
