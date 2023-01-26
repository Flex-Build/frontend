import React, { useState } from 'react'
import { useDrag } from 'react-dnd'
import styles from './DesignYourSite.module.scss'
import Button from './TestComponents/Button'
import Container from './TestComponents/Container'
import Input from './TestComponents/Input'


function LeftContainer() {
  var[arr,setarr]=useState([<Button/>,<Container/>,<Input/>])
  console.log(arr);
  useDrag

  
  return (
    <div className={styles.leftcontainer}>Components
      <div className='h-fit'>
        <Button/>
        <Container/>
        <Input/>
        
      </div>
    </div>
  )
}

export default LeftContainer