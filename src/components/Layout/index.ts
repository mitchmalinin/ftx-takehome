import styled from "styled-components/macro"
import { theme } from "../../constants"

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  padding: 1rem;
  height: 100%;
`

export const Wrapper = styled.div`
  color: ${theme.textColorLight};
  position: relative;
`

export const Header = styled.div`
  padding: 1rem;
  font-size: 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${theme.bgDark};
  color: ${theme.bgDark};
`

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
  }
`

export const TextHighlight = styled.div`
  color: ${theme.textColorLight};
  font-weight: 700;
`

export const ErrorOrLoadingWrapper = styled.div`
  display: grid;
  place-items: center;
  font-size: 1.5;
  padding: 15rem 0;
`
export const ContentSeparator = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 90vh;
`
