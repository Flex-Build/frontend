import Navbar from '@/components/Navbar'
import React, { useContext } from 'react'
import styles from './DesignYourSite.module.scss'
import LeftContainer from './LeftContainer'
import Rightcontainer from './Rightcontainer'
import { createContext } from "react";
import { CustomComponent, OmProvider } from '../../context/MapComponent'


function index() {
  const maxContext = useContext(CustomComponent)
  
  return (
    <div className={styles.designpage}>
      <Navbar />
      <div className={styles.maincontainer}>
        <LeftContainer arr={maxContext.components} />
        {/* <button onClick={temp}>click me</button> */}
        <Rightcontainer />

      </div>
    </div>
  )
}

export default index