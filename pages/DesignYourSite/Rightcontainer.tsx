import React from "react";
import styles from "./DesignYourSite.module.scss";
function Rightcontainer() {
  return (
    <div
      onDrop={(e) => console.log("drop")}
      onDragOver={(e) => {
        let event = e;
        event.stopPropagation();
        event.preventDefault();
      }}
      className={styles.rightcontainer}
    >
      Rightcontainer
      <div draggable className={styles.sitepreview}></div>
    </div>
  );
}

export default Rightcontainer;
