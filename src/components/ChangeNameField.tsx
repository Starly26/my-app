import React, { useState } from 'react'

type ChangeProps = {
  name:string
  setName:any //?
}

const ChangeNameField:React.FC <ChangeProps> = ({name, setName}) => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div>
      { 
      isVisible ?
      <input value={name} onChange={event => setName(event.target.value)} autoFocus={true} onBlur={() => setIsVisible(false)}/>
      :<h3 onClick={ () => setIsVisible(true)}>{name}</h3>
    }
      </div>
  )
}

export default ChangeNameField
