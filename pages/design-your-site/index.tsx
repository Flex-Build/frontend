import Navbar from "@/components/Navbar";
import React, { useContext, useState } from "react";
import { DragPreviewImage } from "react-dnd";
import styles from "./DesignYourSite.module.scss";
import LeftContainer from "./leftContainer/LeftContainer";
import Properties from "./properties/Properties";
import Rightcontainer from "./rightContainer/Rightcontainer";

function index() {
  const [siteName, setSiteName] = useState('');
  const [vis, setvis] = useState(false);
  return (
    <div className={styles.designpage}>
      <div className="h-full w-full">
        <Navbar />
        <div className={styles.maincontainer}>
          <LeftContainer />
          <Rightcontainer />
        </div>
        <button className={styles.publishBtn} onClick={() => (setvis(true))} >Publish</button>

        {vis ?
          <div className={styles.popup1}>
            <div className={styles.popup2}>
              <input placeholder="Site Name" type="text" className={styles.popup3} onChange={e => setSiteName(e.target.value)}></input>
              <div className={styles.popcenter}>
                <button className={styles.popup4}>Ok</button>
                <button className={styles.popup5} onClick={() => setvis(false)}>Cancel</button>
              </div>
            </div>
          </div> : null}
      </div>

    </div>
  );
}

export default index;
