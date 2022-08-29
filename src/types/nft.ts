type NFTIssuer = {
  id: number
  time: string
  status: string
  issuer: string
  isVerified: boolean
  mintSource: string
  createdAt: number
}

type NFTCollectionDict = {
  name: string
  twitterUrl: string | null
  discordUrl: string | null
  homepageUrl: string | null
  description: string | null
  createdAt: number
  bannerImageUrl: string | null
  bannerImageId: number | null
  avatarImageUrl: string | null
  avatarImageId: number | null
  cardImageUrl: string | null
  cardImageId: number | null
}

type NFTAuction = {
  bestBid: number | null
  minNextBid: number
  endTime: string
  bids: number
  quoteCurrency: string
}

type NFT = {
  id: string
  name: string
  description: string | null
  issuer: string
  collection: string
  series: string
  solMintAddress: string | null
  ethContractAddress: string | null
  imageUrl: string | null
  videoUrl: string | null
  animationUrl: string | null
  thumbnailUrl: string | null
  attributes: Record<string, string> | null
  redeemable: boolean
  redeemed: boolean
  offerPrice: number | null
  auction: NFTAuction | null
  depositMethods?: string[]
  withdrawalMethods?: string[]
  auctionReservationPrice?: number
  owned?: boolean
  bid?: number | null
  buyFee?: number | null
  isBestBid?: boolean
  quoteCurrency: string
  featured?: boolean
  created_at?: string
  hidden?: boolean | undefined
}

type NFTCollection = {
  group_id: string
  total: number
  volume: number
  issuer: NFTIssuer
  collectionDict: NFTCollectionDict
}

export type { NFTIssuer, NFTCollectionDict, NFT, NFTCollection }
