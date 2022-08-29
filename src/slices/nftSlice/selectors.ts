import { RootState } from "../../store"

const getNFTCollections = (state: RootState) => state.nft.nftCollections

const getIsLoading = (state: RootState) => state.nft.isLoading

const getTotalNFTCollectionCount = (state: RootState) =>
  state.nft.totalNFTCollections

export { getNFTCollections, getIsLoading, getTotalNFTCollectionCount }
