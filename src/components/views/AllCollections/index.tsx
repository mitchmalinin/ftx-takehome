import { useCallback, useEffect, useState } from "react"
import { collectionTypeOptions } from "../../../constants"
import {
  useTypedDispatch,
  useTypedSelector,
} from "../../../hooks/typedReduxHooks"
import { updateCollectionItemIndexes } from "../../../slices/nftCollectionsSlice"
import {
  getCollectionItemIndexes,
  getIsLoading,
  getNFTCollections,
  getTotalNFTCollectionCount,
} from "../../../slices/nftCollectionsSlice/selectors"
import { fetchNFTCollections } from "../../../slices/nftCollectionsSlice/thunks"
import { ItemIndexes } from "../../../types"
import { CollectionTypes } from "../../../types/api"
import DropDown from "../../Dropdown"
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

const AllCollections = () => {
  const typedDispatch = useTypedDispatch()
  const isLoading = useTypedSelector(getIsLoading)
  const nftCollections = useTypedSelector(getNFTCollections)
  const collectionItemIndexes = useTypedSelector(getCollectionItemIndexes)
  const totalNFTCollectionsCount = useTypedSelector(getTotalNFTCollectionCount)
  const [collectionType, setCollectionType] = useState<CollectionTypes>("all")
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    typedDispatch(
      fetchNFTCollections({
        ...collectionItemIndexes,
        collectionType,
      })
    )
  }, [collectionItemIndexes, collectionType, typedDispatch])

  const selectCollectionOption = useCallback((option: CollectionTypes) => {
    setCollectionType(option)
  }, [])

  const setFirstAndLastItemIndex = useCallback(
    (ItemIndexes: ItemIndexes) => {
      typedDispatch(updateCollectionItemIndexes(ItemIndexes))
    },
    [typedDispatch]
  )

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
      <ContentSeparator>
        {isLoading ? (
          <ErrorOrLoadingWrapper>Loading...</ErrorOrLoadingWrapper>
        ) : (
          <ContentWrapper>
            {nftCollections.length > 0 ? (
              nftCollections.map((collection, i) => (
                // There are repeating nft collections so I think the use of Index for the key is okay for now
                // The collections are also never added or deleted, so the order will never change
                // In a prod app I would use a unique identifier
                <NFTCard key={i} collection={collection} />
              ))
            ) : (
              <ErrorOrLoadingWrapper>
                Sorry you are NGMI - There are no collections available
              </ErrorOrLoadingWrapper>
            )}
          </ContentWrapper>
        )}

        <Pagination
          itemTotal={totalNFTCollectionsCount}
          setFirstAndLastItemIndex={setFirstAndLastItemIndex}
        />
      </ContentSeparator>
    </Wrapper>
  )
}

export default AllCollections
