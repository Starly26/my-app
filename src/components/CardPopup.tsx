import { NONAME } from 'dns'
import React, { useState } from 'react'
import styled from 'styled-components'
import ChangeNameField from './ChangeNameField'
import TextAreaField from './TextAreaField'

type CardPopupProps = {
name:string
columnName:string
close?:any
userName: string
changeDesc:(value:string, id:number) => void
desc:string
id:number
}

const CardPopup:React.FC <CardPopupProps>= ({name, close, columnName, userName, changeDesc, desc, id, }) => {
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
       <p>в колонке <Underline>{columnName}</Underline></p>
       <h3>Описание</h3>
       {  isVisibleDesc ?
         <AreaWrapper>
          <TextAreaField placeName='Добавить более подробное описание' btnName='Сохранить' 
         close={() => setIsVisibleDesc(false) } change={changeDesc} id = {id}/>
         </AreaWrapper>
         : <div>
           <p>{desc}</p>
          <button onClick={() => setIsVisibleDesc(true) }>Изменить</button>
         </div>
       }
       <p>Автор <Underline>{userName}</Underline></p>
       <h3>Действия</h3>  
       <AreaWrapper>
       {/* надо как-то сделать ID необязательным */}
          <TextAreaField id={0} placeName='Напишите комментарий' btnName='Сохранить' 
         close={changeDesc} change={changeDesc}/>
         </AreaWrapper>
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
const Underline = styled.span`
  text-decoration: underline;
`