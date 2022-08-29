import { RootState } from "../../store"

const getNFTSFiltered = (state: RootState) => state.nftsFiltered.nftsFiltered

const getIsLoading = (state: RootState) => state.nftsFiltered.isLoading

const getTotalNFTSFilteredCount = (state: RootState) =>
  state.nftsFiltered.totalNFTSFiltered

const getNFTSFilteredItemIndexes = (state: RootState) =>
  state.nftsFiltered.nftsFilteredItemIndex

export {
  getNFTSFiltered,
  getIsLoading,
  getTotalNFTSFilteredCount,
  getNFTSFilteredItemIndexes,
}
