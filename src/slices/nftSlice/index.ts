import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { NFT, NFTCollectionDict } from "../../types"
import { fetchNFTCollections } from "./thunks"

type State = {
  isLoading: boolean
  nftCollections: NFTCollectionDict[]
  nftFiltered: NFT[]
  error: string | null
}

export const initialState: State = {
  isLoading: false,
  nftCollections: [],
  nftFiltered: [],
  error: null,
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
        (state, action: PayloadAction<NFTCollectionDict[]>) => {
          state.isLoading = false
          state.nftCollections = action.payload
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
