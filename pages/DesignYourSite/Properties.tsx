import React from "react";
import styles from "./DesignYourSite.module.scss";

function Properties() {
  return (
    <div className={styles.propertiesSection}>
      <p className={styles.propertyname}>Properties</p>
      <hr />
      <div className={styles.propertiesContainer}>
        <p>Width</p>
        <p>Padding</p>
      </div>
    </div>
  );
}

export default Properties;
