import { createAsyncThunk } from "@reduxjs/toolkit"
import { NFT_COLLECTIONS_BASE_URL } from "../../constants"
import { NFTCollection } from "../../types"
import { NFTCollectionParams } from "../../types/api"

type APIResponse = {
  result: { count: number; collections: NFTCollection[] }
}

export const fetchNFTCollections = createAsyncThunk(
  "nft/fetchNFTCollections",
  async (params: NFTCollectionParams, thunkAPI) => {
    try {
      const response = await fetch(
        `${NFT_COLLECTIONS_BASE_URL}?startInclusive=${params.startInclusive}&endExclusive=${params.endExclusive}&collectionType=${params.collectionType}`
      )
      const data: APIResponse = await response.json()
      return data.result
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.message)
    }
  }
)
