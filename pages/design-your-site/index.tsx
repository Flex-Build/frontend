import Navbar from "@/components/Navbar";
import { publish_site } from "@/src/apis/axios";
import React, { useContext, useState } from "react";
import { DragPreviewImage } from "react-dnd";
import styles from "./DesignYourSite.module.scss";
import LeftContainer from "./leftContainer/LeftContainer";
import Properties from "./properties/Properties";
import Rightcontainer from "./rightContainer/Rightcontainer";

function DesignYourSite() {
  const [siteName, setSiteName] = useState("");
  const [vis, setvis] = useState(false);
  const [htmlString, setHtmlString] = useState("");
  return (
    <div className={styles.designpage}>
      <div className="h-full w-full">
        <Navbar />
        <div className={styles.maincontainer}>
          <LeftContainer />
          <Rightcontainer htmlgen={setHtmlString} />
        </div>
        <button className={styles.publishBtn} onClick={() => setvis(true)}>
          Publish
        </button>

        {vis ? (
          <div className="h-full w-full backdrop-blur-sm absolute top-0">
            <div className="h-1/6 mx-auto w-2/6 bg-black flex">
              <input
                placeholder="Site Name"
                type="text"
                className="h-10"
                onChange={(e) => setSiteName(e.target.value)}
              ></input>
              <button
                className="bg-yellow-500 h-10 px-10"
                onClick={() => {
                  publish_site(siteName, [], htmlString);
                }}
              >
                Ok
              </button>
              <button
                className="bg-lime-500 h-10 px-10"
                onClick={() => setvis(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default DesignYourSite;
