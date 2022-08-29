# Comments

Overall, I had a super fun time building this app!

A few notes:

Tools used:

- Template: Create-React-App with TS
- State Management: Redux/Redux-Toolkit
- Routing: React-Router
- Styling: Styled-Components

I also ended up using the local-cors-proxy package which was super handy.

- Proxy url is added in the sample.env file

There are a few things I would liked to have added, but due to time constraint I chose not to include

- Better error handling
- More type safety - mostly on the redux side
- Search functionality
- Unit Tests
- Sleeker styling

Struggles

- Making Redux typesafe & proper file structuring

PS: There is an easer egg somewhere in the code ;)

Thank you for taking the time to review this code!

# Prompt:

# FTX Sample Project

Thanks for your interest in FTX!

This sample project is meant for us to get a sense of your programming style, but also give you a taste of what the FTX development process is like.

During development at FTX, for some projects you may be handed designs and others you're asked to get creative. This project will be the latter :)
Don't feel the need to obsess over the UI/UX, but try to give it a nice touch. Please use React for web and React Native for mobile. An app template generator
such as `create-react-app` or `create-reat-native-app` is a good place to start. Implementations will be accepted in either TypeScript or Javascript.

Show us what you can do by building a website or mobile app to display NFTs on the FTX US platform! Some requirements to guide you:

- User should be able to browse a paginated list of collections
- User should be able to browse individual NFTs within a collection (also paginated)
- Feel free to ignore any videos and only display images

What we're looking for:

- Comprehensive knowledge of React/React Native
- Thoughtful design
- Good state management
- Code maintainability

You may run into CORs errors when developing. Please use https://www.npmjs.com/package/local-cors-proxy or something similar so that our team may easily stand up the project. Or provide a link to running example.

For any other questions, please reach out to taylor@ftx.com.

## API Endpoints

**See `Models` below for corresponding types in `Response`**

#### Get NFT collections

GET https://ftx.us/api/nft/collections_page

| Parameters     | type                       | description                                |
| -------------- | -------------------------- | ------------------------------------------ |
| startInclusive | number                     | item offset (i.e. 0)                       |
| endExclusive   | number                     | startInclusive + amount per page (i.e. 25) |
| collectionType | 'all', 'ftx', 'sol', 'eth' | types of NFT collections to show           |

`Response`

```
{
  result: {
    group_type: string;
    group_id: string;
    total: number;
    volume: number;
    first_nft: NFT;
    issuer: NFTIssuer;
    collectionDict?: NFTCollectionDict;
  }
}
```

#### Get NFTs

GET https://ftx.us/api/nft/nfts_filtered

| Parameters        | type                                  | description                                |
| ----------------- | ------------------------------------- | ------------------------------------------ |
| startInclusive    | number                                | item offset (i.e. 0)                       |
| endExclusive      | number                                | startInclusive + amount per page (i.e. 25) |
| nft_filter_string | "{ "collection": "COLLECTION_NAME" }" | stringified JSON on how to filter NFTs     |

`Response`

```
{
  result: {
    count: number;
    nfts: NFT[];
  }
}
```

`Models`

```
type NFTIssuer = {
  id: number;
  time: string;
  status: string;
  issuer: string;
  isVerified: boolean;
  mintSource: string;
  createdAt: number;
};

type NFTCollectionDict = {
  name: string;
  twitterUrl: string | null;
  discordUrl: string | null;
  homepageUrl: string | null;
  description: string | null;
  createdAt: number;
  bannerImageUrl: string | null;
  bannerImageId: number | null;
  avatarImageUrl: string | null;
  avatarImageId: number | null;
  cardImageUrl: string | null;
  cardImageId: number | null;
};

type NFTAuction = {
  bestBid: number | null;
  minNextBid: number;
  endTime: string;
  bids: number;
  quoteCurrency: string;
};

type NFT = {
  id: string;
  name: string;
  description: string | null;
  issuer: string;
  collection: string;
  series: string;
  solMintAddress: string | null;
  ethContractAddress: string | null;
  imageUrl: string | null;
  videoUrl: string | null;
  animationUrl: string | null;
  thumbnailUrl: string | null;
  attributes: Record<string, string> | null;
  redeemable: boolean;
  redeemed: boolean;
  offerPrice: number | null;
  auction: NFTAuction | null;
  depositMethods?: string[];
  withdrawalMethods?: string[];
  auctionReservationPrice?: number;
  owned?: boolean;
  bid?: number | null;
  buyFee?: number | null;
  isBestBid?: boolean;
  quoteCurrency: string;
  featured?: boolean;
  created_at?: string;
  hidden?: boolean | undefined;
};
```
