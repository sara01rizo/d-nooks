import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding:100px 100px 10px 100px;

  h1 {
    font-size:42px;
  }
`

const Subheader = styled.p`
  font-weight:300;
  font-size:26px;
`

const Header = () => {
  return(
    <Wrapper>
    <h1>d-NOOKS</h1>
    <Subheader>The one and only, tell us more about your d-NOOK Berzirk</Subheader>
    </Wrapper>
  )
}

export default Header
