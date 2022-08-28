import styled from "styled-components"

type DropDownProps = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  dropDownTitle: string
  selectOption: (option: any) => void
  options: Array<any>
}

const DropDownWrapper = styled.div`
  font-weight: 400;
  cursor: pointer;
  position: relative;
`

const DropDownTile = styled.span`
  border-radius: 8px;
  background-color: rgb(44, 47, 54);
  padding: 0.2rem 1rem;
`

const DropDownList = styled.div`
  display: grid;

  position: absolute;
  top: 5px;
  right: 5px;
  border-radius: 8px;
  background-color: rgba(44, 47, 54);
  font-weight: 400;
  -webkit-box-shadow: 5px -4px 11px -1px rgba(77, 76, 76, 0.35);
  box-shadow: 5px -4px 11px -1px rgba(77, 76, 76, 0.35);
`

const DropDownListItem = styled.span`
  transition: all 0.2s ease-in-out;
  padding: 0.2rem 1rem;
  border-radius: 8px;

  &:hover {
    background-color: rgb(68, 68, 69);
  }
`

const DropDown = ({
  isOpen,
  setIsOpen,
  dropDownTitle,
  options,
  selectOption,
}: DropDownProps) => {
  return (
    <DropDownWrapper>
      <DropDownTile
        onClick={() => {
          setIsOpen(true)
        }}
      >
        {dropDownTitle.toUpperCase()}
      </DropDownTile>
      {isOpen && (
        <DropDownList>
          {options.map((option) => (
            <DropDownListItem
              key={option}
              onClick={() => {
                setIsOpen(false)
                selectOption(option)
              }}
            >
              {option}
            </DropDownListItem>
          ))}
        </DropDownList>
      )}
    </DropDownWrapper>
  )
}

export default DropDown
