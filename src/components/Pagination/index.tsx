import { useEffect, useState } from "react"
import styled from "styled-components/macro"
import { itemsPerPage, pageLimitNumber, theme } from "../../constants"

type PaginationProps = {
  itemTotal: number
  setFirstAndLastItemIndex: ({
    startInclusive,
    endExclusive,
  }: {
    startInclusive: number
    endExclusive: number
  }) => void
}

const Wrapper = styled.div`
  text-align: center;
  padding-bottom: 1rem;

  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  gap: 0.5rem;
`

const PageItem = styled.span<{ active?: boolean }>`
  cursor: pointer;
  color: ${({ active }) =>
    active ? theme.textColorDark : theme.textColorLight};
  border: 2px solid ${theme.textColorLight};
  padding: 0.5rem;
  background-color: ${({ active }) =>
    active ? theme.textColorLight : "transparent"};
  border-radius: 8px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${theme.bgHover};
  }
`

const createPages = (itemTotal: number) => {
  const pages = []

  for (let i = 1; i <= Math.ceil(itemTotal / itemsPerPage); i++) {
    pages.push(i)
  }

  return pages
}

const Pagination = ({
  itemTotal,
  setFirstAndLastItemIndex,
}: PaginationProps) => {
  let pages = createPages(itemTotal)
  const [currentPage, setCurrentPage] = useState("1")
  const [maxPageLimit, setMaxPageLimit] = useState(5)
  const [minPageLimit, setMinPageLimit] = useState(0)

  const indexOfLastItem = parseInt(currentPage) * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage

  const handleClick = (e: any) => {
    setCurrentPage(e.target.id)
  }

  const handleNext = () => {
    const number = parseInt(currentPage) + 1

    console.log(number)
    setCurrentPage(number.toString())

    if (number > maxPageLimit) {
      setMaxPageLimit(maxPageLimit + pageLimitNumber)
      setMinPageLimit(minPageLimit + pageLimitNumber)
    }
  }

  const handlePrev = () => {
    const number = parseInt(currentPage) - 1

    if (number === 0) return

    setCurrentPage(number.toString())

    if (number % pageLimitNumber === 0) {
      setMaxPageLimit(maxPageLimit - pageLimitNumber)
      setMinPageLimit(minPageLimit - pageLimitNumber)
    }
  }

  useEffect(() => {
    setFirstAndLastItemIndex({
      startInclusive: indexOfFirstItem,
      endExclusive: indexOfLastItem,
    })
  }, [currentPage])

  return (
    <Wrapper>
      <PageItem onClick={handlePrev}>Prev</PageItem>
      {pages.map((page) => {
        if (page < maxPageLimit + 1 && page > minPageLimit) {
          return (
            <PageItem
              key={page}
              id={page.toString()}
              onClick={handleClick}
              active={parseInt(currentPage) === page}
            >
              {page}
            </PageItem>
          )
        }
      })}
      <PageItem onClick={handleNext}>Next</PageItem>
    </Wrapper>
  )
}

export default Pagination
