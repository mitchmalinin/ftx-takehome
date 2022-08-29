import styled from "styled-components"
import { theme } from "../../constants"
import { NFTCollection } from "../../types"

type NFTCardProps = {
  collection: NFTCollection
}

const Wrapper = styled.div`
  background-color: ${theme.bgDark};
  border-radius: 8px;
  color: ${theme.textColorLight};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
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

const NFTCard = ({ collection }: NFTCardProps) => {
  return (
    <Wrapper>
      <ImgWrapper img={collection.collectionDict.avatarImageUrl || ""} />
      <CollectionContent>
        <p>
          <TextHightlight>Name:</TextHightlight>{" "}
          {collection.collectionDict.name}
        </p>
        <p>
          <TextHightlight>Volume:</TextHightlight>{" "}
          {collection.volume.toFixed(0)}
        </p>
      </CollectionContent>
    </Wrapper>
  )
}

export default NFTCard
