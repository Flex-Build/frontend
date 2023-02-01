import Navbar from "@/components/Navbar";
import React, { useContext } from "react";
import { DragPreviewImage } from "react-dnd";
import styles from "./DesignYourSite.module.scss";
import LeftContainer from "./LeftContainer";
import Properties from "./Properties";
import Rightcontainer from "./Rightcontainer";

function index() {
  return (
    <div className={styles.designpage}>
      <Navbar />
      <div className={styles.maincontainer}>
        <LeftContainer />
        <Rightcontainer />
      </div>
    </div>
  );
}

export default index;
