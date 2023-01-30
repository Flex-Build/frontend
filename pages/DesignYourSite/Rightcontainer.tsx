import React from 'react'
import styles from './DesignYourSite.module.scss'
function Rightcontainer() {
  return (
    <div draggable onDragEnter={() => console.log("entered")}
      className={styles.rightcontainer}>Rightcontainer
      <div draggable className={styles.sitepreview} onDrag={(l)=>(console.log("end at"+ l.target))}></div>
    </div>      
  )
}

export default Rightcontainer