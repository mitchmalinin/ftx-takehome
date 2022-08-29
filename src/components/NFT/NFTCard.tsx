import { Link } from "react-router-dom"
import styled from "styled-components"
import { theme } from "../../constants"
import { NFT, NFTCollection } from "../../types"

type NFTCardProps = {
  collection?: NFTCollection
  nft?: NFT
}

const Wrapper = styled.div`
  background-color: ${theme.bgDark};
  border-radius: 8px;
  color: ${theme.textColorLight};
  max-width: 300px;

  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  a {
    text-decoration: none;
    color: ${theme.textColorLight};
  }

  &:hover {
    transform: scale(1.02);
  }

  @media only screen and (max-width: 600px) {
    max-width: 100%;
  }
`

const ImgWrapper = styled.div<{ img: string }>`
  background-image: ${({ img }) => `url(${img})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 250px;
  width: 100%;
  border-radius: 8px 8px 0 0;
`

const CollectionContent = styled.div`
  margin-top: 1rem;
  padding: 1em;
  display: grid;
  gap: 0.5rem;

  max-height: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
`

const TextHightlight = styled.span`
  color: ${theme.textHighlight};
`

const NFTCard = ({ collection, nft }: NFTCardProps) => {
  return collection ? (
    <Wrapper>
      <Link to={`/nft/${collection.group_id}`}>
        <ImgWrapper
          img={
            collection.collectionDict.avatarImageUrl ||
            collection.first_nft.imageUrl
          }
        />
        <CollectionContent>
          <p>
            <TextHightlight>Chain:</TextHightlight>{" "}
            {collection.issuer.mintSource}
          </p>
          <p>
            <TextHightlight>Name:</TextHightlight>{" "}
            {collection.collectionDict.name}
          </p>
          <p>
            <TextHightlight>Volume:</TextHightlight>{" "}
            {collection.volume.toFixed(0)} {collection.issuer.mintSource}
          </p>
        </CollectionContent>
      </Link>
    </Wrapper>
  ) : (
    <Wrapper>
      <ImgWrapper img={nft?.imageUrl || ""} />
      <CollectionContent>
        <p>
          <TextHightlight>Name:</TextHightlight> {nft?.name}
        </p>
      </CollectionContent>
    </Wrapper>
  )
}

export default NFTCard
