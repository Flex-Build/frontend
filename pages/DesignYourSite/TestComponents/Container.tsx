import React from 'react'
import styles from './Container.module.scss'
function Container() {
  return (
    <div draggable placeholder='container' className={styles.container}></div>
  )
}

export default Container