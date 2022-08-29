import { useCallback, useEffect, useState } from "react"
import styled from "styled-components/macro"
import { collectionTypeOptions, theme } from "../../../constants"
import {
  useTypedDispatch,
  useTypedSelector,
} from "../../../hooks/typedReduxHooks"
import {
  getIsLoading,
  getNFTCollections,
  getTotalNFTCollectionCount,
} from "../../../slices/nftSlice/selectors"
import { fetchNFTCollections } from "../../../slices/nftSlice/thunks"
import { CollectionTypes } from "../../../types/api"
import DropDown from "../../Dropdown"
import NFTCard from "../../NFT/NFTCard"
import Pagination from "../../Pagination"

type ItemIndexes = {
  startInclusive: number
  endExclusive: number
}

const Wrapper = styled.div`
  display: grid;
  color: ${theme.textColorLight};
`

const Header = styled.div`
  padding: 1rem;
  font-size: 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${theme.bgDark};
  color: ${theme.bgDark};
`

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const TextHighlight = styled.div`
  color: ${theme.textColorLight};
  font-weight: 700;
`

const CollectionsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  padding: 1rem;
  height: 100%;
`

const AllCollections = () => {
  const typedDispatch = useTypedDispatch()
  const isLoading = useTypedSelector(getIsLoading)
  const nftCollections = useTypedSelector(getNFTCollections)
  const totalNFTCollectionsCount = useTypedSelector(getTotalNFTCollectionCount)
  const [itemIndexNumbers, setItemIndexNumbers] = useState<ItemIndexes>({
    startInclusive: 0,
    endExclusive: 25,
  })
  const [collectionType, setCollectionType] = useState<CollectionTypes>("all")
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    typedDispatch(
      fetchNFTCollections({
        startInclusive: itemIndexNumbers.startInclusive,
        endExclusive: itemIndexNumbers.endExclusive,
        collectionType,
      })
    )
  }, [itemIndexNumbers])

  const selectCollectionOption = (option: CollectionTypes) => {
    setCollectionType(option)
  }

  const setFirstAndLastItemIndex = (itemIndexes: ItemIndexes) => {
    // setItemIndexNumbers(itemIndexes)
  }

  return (
    <Wrapper>
      <Header>
        <TitleWrapper>
          <TextHighlight>{collectionType.toUpperCase()}</TextHighlight>
          <span>NFT Collections</span>
        </TitleWrapper>
        <DropDown
          dropDownTitle={collectionType}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          selectOption={selectCollectionOption}
          options={collectionTypeOptions}
        />
      </Header>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <CollectionsWrapper>
            {nftCollections.length > 0 &&
              nftCollections.map((collection, i) => (
                <NFTCard key={i} collection={collection} />
              ))}
          </CollectionsWrapper>
          <Pagination
            itemTotal={totalNFTCollectionsCount}
            setFirstAndLastItemIndex={setFirstAndLastItemIndex}
          />
        </>
      )}
    </Wrapper>
  )
}

export default AllCollections
