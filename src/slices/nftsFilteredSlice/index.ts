import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { NFT } from "../../types"
import { ItemIndexes } from "../../types/nft"
import { fetchNFTSFiltered } from "./thunks"

type State = {
  isLoading: boolean
  nftsFiltered: NFT[]
  totalNFTSFiltered: number
  error: string | null
  nftsFilteredItemIndex: ItemIndexes
}

export const initialState: State = {
  isLoading: false,
  nftsFiltered: [],
  error: null,
  totalNFTSFiltered: 0,

  nftsFilteredItemIndex: {
    startInclusive: 0,
    endExclusive: 25,
  },
}

const nftsFilteredSlice = createSlice({
  name: "nftsFiltered",
  initialState,
  reducers: {
    updateNFTSFilteredItemIndexes: (
      state,
      action: PayloadAction<ItemIndexes>
    ) => {
      state.nftsFilteredItemIndex = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNFTSFiltered.pending, (state) => {
        state.isLoading = true
      })
      .addCase(
        fetchNFTSFiltered.fulfilled,
        (
          state,
          action: PayloadAction<{
            nfts: NFT[]
            count: number
          }>
        ) => {
          const { count, nfts } = action.payload
          state.isLoading = false
          state.nftsFiltered = nfts
          state.totalNFTSFiltered = count
        }
      )
      .addCase(
        fetchNFTSFiltered.rejected,
        (state, action: PayloadAction<any>) => {
          console.log("error", action)

          state.isLoading = false
          state.error = action.payload
        }
      )
  },
})

export const { updateNFTSFilteredItemIndexes } = nftsFilteredSlice.actions

export default nftsFilteredSlice.reducer
