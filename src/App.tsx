import React from "react"
import { Route, Routes } from "react-router-dom"
import styled from "styled-components/macro"
import AllCollections from "./components/views/AllCollections"
import NFTCollection from "./components/views/NFTCollection"

const Wrapper = styled.div`
  background-image: linear-gradient(
    -225deg,
    #5271c4 0%,
    #b19fff 48%,
    #eca1fe 100%
  );

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
