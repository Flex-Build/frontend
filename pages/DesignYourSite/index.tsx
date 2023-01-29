import Navbar from '@/components/Navbar'
import React, { useContext } from 'react'
import styles from './DesignYourSite.module.scss'
import LeftContainer from './LeftContainer'
import Rightcontainer from './Rightcontainer'
import { createContext } from "react";
import { CustomComponent, OmProvider } from './src/context/MapComponent'


function index() {
  const maxContext = useContext(CustomComponent)

  // function to add the new component at context 
  // function temp() {
  //   const maxComps = maxContext.components.slice()
  //   maxComps.push({ id: 4, component: <button>ultra</button> })
  //   maxContext.updatecomponents(maxComps)
  //   console.log(maxComps);
  // }
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