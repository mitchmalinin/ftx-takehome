import React from "react"
import { Route, Routes } from "react-router-dom"
import styled from "styled-components/macro"
import AllCollections from "./components/views/AllCollections"
import NFTCollection from "./components/views/NFTCollection"
import { theme } from "./constants"

const Wrapper = styled.div`
  background-image: ${theme.bgColor};
  min-height: 100vh;
`

const App = () => {
  return (
    <Wrapper>
      <Routes>
        <Route path="/nft" element={<NFTCollection />} />
        <Route path="/" element={<AllCollections />} />
      </Routes>
    </Wrapper>
  )
}

export default App
