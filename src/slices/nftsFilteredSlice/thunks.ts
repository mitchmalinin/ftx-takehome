import { createAsyncThunk } from "@reduxjs/toolkit"
import { NFT_FILTERED_BASE_URL } from "../../constants"
import { NFT } from "../../types"
import { NFTSFilteredParams } from "../../types/api"

type APIResponse = {
  result: { count: number; nfts: NFT[] }
}

export const fetchNFTSFiltered = createAsyncThunk(
  "nftsFiltered/fetchNFTSFiltered",
  async (params: NFTSFilteredParams, thunkAPI) => {
    try {
      const response = await fetch(
        `${NFT_FILTERED_BASE_URL}?startInclusive=${
          params.startInclusive
        }&endExclusive=${
          params.endExclusive
        }&nft_filter_string=${JSON.stringify(params.nftFilter)}`
      )
      const data: APIResponse = await response.json()
      return data.result
    } catch (err: any) {
      console.log(err.message)
      return thunkAPI.rejectWithValue(err.message)
    }
  }
)
