import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import styled from "styled-components/macro"
import { theme } from "../../../constants"
import {
  useTypedDispatch,
  useTypedSelector,
} from "../../../hooks/typedReduxHooks"
import { updateNFTSFilteredItemIndexes } from "../../../slices/nftsFilteredSlice"
import {
  getIsLoading,
  getNFTSFiltered,
  getNFTSFilteredItemIndexes,
  getTotalNFTSFilteredCount,
} from "../../../slices/nftsFilteredSlice/selectors"
import { fetchNFTSFiltered } from "../../../slices/nftsFilteredSlice/thunks"
import { ItemIndexes } from "../../../types"
import {
  ContentSeparator,
  ContentWrapper,
  ErrorOrLoadingWrapper,
  Header,
  TextHighlight,
  TitleWrapper,
  Wrapper,
} from "../../Layout"
import NFTCard from "../../NFT/NFTCard"
import Pagination from "../../Pagination"

const Button = styled.button`
  border: none;
  background-color: ${theme.bgDark};
  padding: 0.2rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  color: ${theme.textColorLight};

  &:hover {
    background-color: ${theme.bgHover};
  }
`

const NFTCollection = () => {
  const { nftId } = useParams()
  const typedDispatch = useTypedDispatch()
  const isLoading = useTypedSelector(getIsLoading)
  const nftsFiltered = useTypedSelector(getNFTSFiltered)
  const nftsFilteredItemIndexes = useTypedSelector(getNFTSFilteredItemIndexes)
  const totalNFTSFilteredCount = useTypedSelector(getTotalNFTSFilteredCount)

  useEffect(() => {
    typedDispatch(
      fetchNFTSFiltered({
        ...nftsFilteredItemIndexes,
        nftFilter: { collection: nftId || "" },
      })
    )
  }, [nftsFilteredItemIndexes])

  const setFirstAndLastItemIndex = (ItemIndexes: ItemIndexes) => {
    typedDispatch(updateNFTSFilteredItemIndexes(ItemIndexes))
  }

  console.log(nftsFiltered)

  return (
    <Wrapper>
      <Header>
        <TitleWrapper>
          <TextHighlight>{nftId}</TextHighlight>
        </TitleWrapper>
        <Link to="/">
          <Button>Back</Button>
        </Link>
      </Header>
      <ContentSeparator>
        {isLoading ? (
          <ErrorOrLoadingWrapper>Loading</ErrorOrLoadingWrapper>
        ) : (
          <ContentWrapper>
            {nftsFiltered.length > 0 ? (
              nftsFiltered.map((nft) => <NFTCard nft={nft} />)
            ) : (
              <ErrorOrLoadingWrapper>
                Sorry, you are NGMI - there are no {nftId} Jpegs to see
              </ErrorOrLoadingWrapper>
            )}
          </ContentWrapper>
        )}
        <Pagination
          itemTotal={totalNFTSFilteredCount}
          setFirstAndLastItemIndex={setFirstAndLastItemIndex}
        />
      </ContentSeparator>
    </Wrapper>
  )
}

export default NFTCollection
