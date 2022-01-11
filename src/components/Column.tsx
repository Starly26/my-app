
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
  const [descriptions, setDescription] = useState('')

  const addCard = (name: string) => {
    const card: CardItem = { columnId, id: Date.now(), name, description: '', comments: [] }
    setCards([...cards, card])
  }

  const changeNameCard = (name:string) => {

  }

  const changeDescriprion = (name:string) => {
    const description = ''
    setDescription(description + descriptions)
  }

  return (
    <ColumnContainer>
      <ColumnWrapper>
        <ChangeNameField name={columnName} setName={setColumnName}/>
      </ColumnWrapper>
      <ColumnWrapper>
      {
        cards.map((item) => {
          return <Card item ={item} changeDesc = {changeDescriprion} userName = {userName} key ={item.id} columnName = {columnName}/>
        })
      }
      { isVisibleTextArea ?     
        <TextAreaField change={addCard} close={() => setIsVisibleTextArea(false)} placeName='Ввести заголовок этой карточки' btnName='Add card'/>
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
