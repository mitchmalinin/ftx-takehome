import { RootState } from "../../store"

const getNFTCollections = (state: RootState) =>
  state.nftCollections.nftCollections

const getIsLoading = (state: RootState) => state.nftCollections.isLoading

const getTotalNFTCollectionCount = (state: RootState) =>
  state.nftCollections.totalNFTCollections

const getCollectionItemIndexes = (state: RootState) =>
  state.nftCollections.collectionItemIndex

export {
  getNFTCollections,
  getIsLoading,
  getTotalNFTCollectionCount,
  getCollectionItemIndexes,
}
