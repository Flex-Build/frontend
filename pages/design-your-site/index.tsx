import Navbar from "@/components/Navbar";
import { publish_site } from "@/src/apis/axios";
import React, { useContext, useState } from "react";
import { DragPreviewImage } from "react-dnd";
import styles from "./DesignYourSite.module.scss";
import LeftContainer from "./leftContainer/LeftContainer";
import Properties from "./properties/Properties";
import Rightcontainer from "./rightContainer/Rightcontainer";

function index() {
  const [siteName, setSiteName] = useState('');
  const [vis, setvis] = useState(false);
  const [htmlString,setHtmlString]=useState("");
  const [loadOrNot,setLoadOrNot] = useState(true);
  return (
    <div className={styles.designpage}>
      <div className="h-full w-full">
        <Navbar />
        <div className={styles.maincontainer}>
          <LeftContainer />
          <Rightcontainer htmlgen={setHtmlString}/>
        </div>
        <button className={styles.publishBtn} onClick={() => (setvis(true))} >
          Publish
        </button>

        {vis ?
          <div className={styles.popup1}>
            <div className={styles.popup2}>
              <input placeholder="Site Name" type="text" className={styles.popup3} onChange={e => setSiteName(e.target.value)}></input>
              <div className={styles.popcenter}>
                <button className={styles.popup4} onClick={()=>{publish_site(siteName,[],htmlString)}}>
                {loadOrNot?<div className={styles.loader}> </div>: "OK" }
                </button>
                <button className={styles.popup5} onClick={() => setvis(false)}>Cancel</button>
              </div>
            </div>
          </div> : null}
      </div>

    </div>
  );
}

export default index;
