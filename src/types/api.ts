type UrlParams = {
  startInclusive: number
  endExclusive: number
}

export type CollectionTypes = "all" | "ftx" | "sol" | "eth"

type NFTCollectionParams = UrlParams & {
  collectionType: CollectionTypes
}

type NFTSFilteredParams = UrlParams & {
  nftFilter: {
    collection: string
  }
}

export type { UrlParams, NFTCollectionParams, NFTSFilteredParams }
