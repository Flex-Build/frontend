import React, { useState } from "react";
import styles from "./Properties.module.scss";

function Properties() {
  const [display, setDisplay] = useState(false);

  return (
    <>    {display ?
      <div className={styles.propertiesSection}>
        <div className={styles.propAndBtn}>
        <h6 className={styles.propertyname}>Properties</h6>
        <button onClick={() => (display ? setDisplay(false) : setDisplay(true))} className={styles.cross}>X</button>
        </div>
        <hr />
        <div className={styles.propertiesContainer}>
          <div className="flex m-2">
            <p className={styles.PropertyLable}>width</p>
            <input className={styles.inputParemeter} type="number"></input>
          </div>

          <div className="flex m-2">
            <p className={styles.PropertyLable}>Padding</p>
            <input className={styles.inputParemeter} type="number"></input>
          </div>

          <div className="flex m-2">
            <p className={styles.PropertyLable}>Rounded</p>
            <input className={styles.inputParemeter} type="number"></input>
          </div>
        </div>

        <button>publish</button>
      </div>
      :
      <button className={styles.displayBtn} onClick={() => (display ? setDisplay(false) : setDisplay(true))}>properties</button>}
      </>

  );
}

export default Properties;
