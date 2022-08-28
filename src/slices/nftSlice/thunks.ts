import { createAsyncThunk } from "@reduxjs/toolkit"
import { NFT_COLLECTIONS_BASE_URL } from "../../constants"
import { NFTCollectionParams } from "../../types/api"

export const fetchNFTCollections = createAsyncThunk(
  "nft/fetchNFTCollections",
  async (params: NFTCollectionParams, thunkAPI) => {
    try {
      const response = await fetch(
        `${NFT_COLLECTIONS_BASE_URL}?startInclusive=${params.startInclusive}&endExclusive=${params.endExclusive}&collectionType=${params.collectionType}`
      )
      const data = await response.json()
      return data
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.message)
    }
  }
)
