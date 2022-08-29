import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { NFT, NFTCollectionDict } from "../../types"
import { NFTCollection } from "../../types/nft"
import { fetchNFTCollections } from "./thunks"

type State = {
  isLoading: boolean
  nftCollections: NFTCollection[]
  totalNFTCollections: number
  totalNFTFiltered: number
  nftFiltered: NFT[]
  error: string | null
}

export const initialState: State = {
  isLoading: false,
  nftCollections: [],
  nftFiltered: [],
  error: null,
  totalNFTFiltered: 0,
  totalNFTCollections: 0,
}

const nftSlice = createSlice({
  name: "nft",
  initialState,
  reducers: {},
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

export default nftSlice.reducer
