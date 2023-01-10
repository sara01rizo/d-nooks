import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Link } from 'react-router-dom'
import Rating from '../Rating/Rating'

const Card = styled.div`
  border: 1.5px solid #efefef;
  background: #ddd;
`

const GarbageLogo = styled.div`
  height: 50px;
  img {
    height: 50px;
    width: 50px;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 100%;
  }
`

const GarbageName = styled.div`
  padding: 20px 0 10px 0;
`

const LinkWrapper = styled.div`
  margin: 30px 0 20px 0;
  height:50px;
  a {
    color: #ddd;
    background-color: #71b406;
    border-radius: 4px;
    padding: 10px 50px;
    cursor: pointer;
    border-radius: 3px;
    border: 1px solid #71b406;
    text-align: center;
    line-height: 20px;
    min-height: 40px;
    margin: 7px;
    font-weight: 600;
    text-decoration: none;
    width: 100%;
    transition: ease-in-out 0.1s;
    &:hover{
      border-color: #619a07;
      background: #619a07;
    }
  }
`

const Garbage = ({ name, image_url, average_score, slug, ...props }) => {
  return (
    <Card>
      <GarbageLogo>
        <img src={image_url} alt={name} width="50"/>
      </GarbageLogo>
      <GarbageName>
        {name}
      </GarbageName>
      <Rating score={average_score} />
      <LinkWrapper>
        <Link to={"/garbages/" + slug}>View D-nooks</Link>
      </LinkWrapper>
    </Card>
  )
}

export default Garbage
