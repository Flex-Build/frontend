import React from 'react'
import { useDrag } from 'react-dnd'
import styles from './DesignYourSite.module.scss'
import Button from './TestComponents/Button'
import Container from './TestComponents/Container'
import Input from './TestComponents/Input'
import { useState, createContext, useContext } from "react";
import { CustomComponent } from './src/context/MapComponent'
function LeftContainer(props: any) {
  // const [data,setdata]=useContext(props.array)
  const data=useContext(CustomComponent)
console.log(data)
  
  return (
    <div className={styles.leftcontainer}>Components
      <div className='h-fit'>
        <button onClick={()=>(console.log(data))}>max</button>
        {data.components.map((e)=><div key={e.id.toString()}>{e.component}  </div>)}
      </div>
    </div>
  )
}

export default LeftContainer