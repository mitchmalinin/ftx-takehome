import { RootState } from "../../store"

const getNFTCollections = (state: RootState) => state.nft.nftCollections

export { getNFTCollections }
