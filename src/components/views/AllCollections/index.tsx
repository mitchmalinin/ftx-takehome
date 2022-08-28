import { useEffect, useState } from "react"
import styled from "styled-components/macro"
import { collectionTypeOptions } from "../../../constants"
import { CollectionTypes } from "../../../types/api"
import DropDown from "../../Dropdown"

const Wrapper = styled.div`
  display: grid;
  color: white;
`

const Header = styled.div`
  padding: 1rem;
  font-size: 1.5rem;
  font-weight: 700;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

const AllCollections = () => {
  const [collectionType, setCollectionType] = useState<CollectionTypes>("all")
  const [isOpen, setIsOpen] = useState(false)

  const selectCollectionOption = (option: CollectionTypes) => {
    setCollectionType(option)
  }

  return (
    <Wrapper>
      <Header>
        <span>{collectionType.toUpperCase()} NFT Collections</span>
        <DropDown
          dropDownTitle={collectionType}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          selectOption={selectCollectionOption}
          options={collectionTypeOptions}
        />
      </Header>
    </Wrapper>
  )
}

export default AllCollections
