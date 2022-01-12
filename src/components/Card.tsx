import React, { useState } from 'react'
import styled from 'styled-components'
import CardPopup from './CardPopup'
import {CardItem} from '../types'

type CardProps = {
  item: CardItem
  columnName: string
  userName: string
  changeDesc: (value:string, id:number) => void
  id: number
}
const Card:React.FC <CardProps> = ({item, columnName, userName, changeDesc, id,}) => {

  const [isPopupVisible, setIsPopupVisible] = useState(false)

  return (
    <>
      { isPopupVisible ?
        <CardPopup desc={item.description} userName = {userName} name = {item.name} close = {() => setIsPopupVisible(false)} 
        columnName={columnName} changeDesc ={changeDesc} id = {id} />
        :
        <Wrapper onClick={() => setIsPopupVisible(true)}>
          <Container>
            <p>{item.name}</p>
            <ImgContainer>
              <img src="/assets/edit.svg"/>
            </ImgContainer>
          </Container>
          <Container2>
          <ImgContainer>
            <Img src="/assets/comment.svg"/>
          </ImgContainer>
          <p>Count</p>
          </Container2>
        </Wrapper>
      }
    </>
  )
}

export default Card

const Wrapper = styled.div`
width:90%;
background-color: white;
padding:5px;
margin: 5px;
cursor:pointer;
`

const Container = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
`
const Container2 = styled.div`
display:flex;
align-items: center;
`
const ImgContainer = styled.div`
width: 15px;
height: 15px;
margin: 5px;
`
const Img = styled.img`
width:100%;
height:100%;
`