import React, { useState } from 'react'
import styled from 'styled-components'
import ChangeNameField from './ChangeNameField'
import TextAreaField from './TextAreaField'

type CardPopupProps = {
name:string
columnName:string
close:any
userName: string
changeDesc:any
desc:string
}

const CardPopup:React.FC <CardPopupProps>= ({name, close, columnName, userName, changeDesc, desc}) => {
  const [CardName, setCardName] = useState(name)
  const [isVisibleDesc, setIsVisibleDesc] = useState(true)

  

  return (
   <Container>
     <Wrapper>
       <Wrapper1>
         <ChangeNameField name = {CardName} setName={setCardName}></ChangeNameField>
         <ImgWrapper onClick={close}>
           <img src="/assets/close.svg" />
         </ImgWrapper>
       </Wrapper1>
       <p>в колонке {columnName}</p>
       <h3>Описание</h3>
       {  isVisibleDesc ?
         <AreaWrapper>
          <TextAreaField placeName='Добавить более подробное описание' btnName='Сохранить' 
         close={() => setIsVisibleDesc(false) } change={changeDesc}/>
         </AreaWrapper>
         : <div>
           <p>{desc}</p>
          <button onClick={() => setIsVisibleDesc(true) }>Изменить</button>
         </div>
       }
       <p>Автор {userName}</p>  
     </Wrapper>
   </Container>
  )
}

export default CardPopup

const Container = styled.div`
position: absolute;
left:0;
top:0;
width: 100%;
height:100%;
background-color: #000000a3;
`
const Wrapper = styled.div`
width:90%;
background-color: white;
margin: 40px auto;
height:90%;
padding: 20px;
`

const Wrapper1 = styled.div`
display:flex;
justify-content: space-between;
`
const ImgWrapper = styled.div`
width:15px;
cursor: pointer;
`

const AreaWrapper = styled.div`
width: 60%;
`