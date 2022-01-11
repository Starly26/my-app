import React from 'react'
import Card from './Card'
import styled from 'styled-components'
import Column from './Column'

type dashProps = {
  userName: string
}


const Dashbord:React.FC <dashProps> = ({userName}) => {
  return (
    <Container>
      <Column columnId={1} userName = {userName} name = {'TODO'}/>
      <Column columnId={2} userName = {userName} name = {'In Progress'} />
      <Column columnId={3} userName = {userName} name = {'Testing'} />
      <Column columnId={4} userName = {userName} name = {'Done'} />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
`

export default Dashbord
