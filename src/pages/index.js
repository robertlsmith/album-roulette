import * as React from "react"
import Nav from "../components/Navbar"
import styled from "styled-components"

// const pageStyles = {
//   color: "#232129",
//   padding: 96,
//   fontFamily: "-apple-system, Roboto, sans-serif, serif",
// }

const styledMain = styled.main `
`

const IndexPage = () => {
  return (
    <styledMain>
      <Nav></Nav>
    </styledMain>
  )
}

export default IndexPage

export const Head = () => <title>Album Roulette</title>
