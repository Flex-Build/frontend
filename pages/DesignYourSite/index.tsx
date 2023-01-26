import Navbar from '@/components/Navbar'
import React from 'react'
import styles from './DesignYourSite.module.scss'
import LeftContainer from './LeftContainer'
import Rightcontainer from './Rightcontainer'

function index() {
  
  return (
    <div className={styles.designpage}>
      <Navbar/>
      <div className={styles.maincontainer}>
        <LeftContainer/>
        <Rightcontainer/>
        

      </div>
    </div>
  )
}

export default index