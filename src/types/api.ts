type UrlParams = {
  startInclusive: number
  endExclusive: number
}

type CollectionTypes = "all" | "ftx" | "sol" | "eth"

type NFTCollectionParams = UrlParams & {
  collectionType: CollectionTypes
}

type NFTFilteredParams = UrlParams & {
  nft_filter_string: {
    collection: string
  }
}

export type { UrlParams, NFTCollectionParams, NFTFilteredParams }
