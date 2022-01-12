
import React, { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components';
import Card from './Card';
import ChangeNameField from './ChangeNameField';
import TextAreaField from './TextAreaField';
import {CardItem} from '../types'

type ColumnProps = {
  name:string
  columnId: number
  userName: string
}

const Column:React.FC <ColumnProps> = ({name, columnId, userName}) => {
  
  const [columnName, setColumnName] = useState(name)
  const [isVisibleTextArea, setIsVisibleTextArea] = useState(false)
  const [cards, setCards] = useState<CardItem[]>([])


  const addCard = (name: string) => {
    const card: CardItem = { columnId, id: Date.now(), name, description: '', comments: [] }
    setCards([...cards, card])
    console.log(card.id);
    
  }

  // const changeNameCard = (name:string, findId:number) => {
  //  const index = cards.findIndex(card => card.id === findId)
  //  setCards([...cards.slice(0, index), {...cards[index], name: name}  ,...cards.slice(index, cards.length)])
  
  // }

  const addComment = (name:string) => {

  }

  const changeComment = (name:string) => {
    
  }

  const changeDescriprion = (name:string, findId:number) => {
    const index = cards.findIndex(card => card.id === findId)
    setCards([...cards.slice(0, index), {...cards[index], description: name}  ,...cards.slice(index, cards.length)])
    console.log(cards[index].description);
    
  }

  return (
    <ColumnContainer>
      <ColumnWrapper>
        <ChangeNameField name={columnName} setName={setColumnName}/>
      </ColumnWrapper>
      <ColumnWrapper>
      {
        cards.map((item) => {
          return <Card item ={item} id={item.id} changeDesc = {changeDescriprion} userName = {userName} key ={item.id} columnName = {columnName}/>
        })
      }
      { isVisibleTextArea ?     
        <TextAreaField id = {0} change={addCard} close={() => setIsVisibleTextArea(false)} placeName='Ввести заголовок этой карточки' btnName='Add card'/>
        :
        <Button onClick={() => setIsVisibleTextArea (true)}>Add card</Button>
      }
      </ColumnWrapper>
    </ColumnContainer>
  )
}

const ColumnContainer = styled.div `
  background-color: #ebecf0;
  border-radius: 3px;
  width: 200px;
  margin: 30px;
`
const ColumnWrapper = styled.div `
  display:flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 10px;
`
const Button = styled.button `
  padding: 5px;
  cursor: pointer;
`

export default Column
