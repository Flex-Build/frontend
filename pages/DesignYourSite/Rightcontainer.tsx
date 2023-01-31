import { canvasSubject } from "@/src/subjects/canvas";
import React, { useEffect, useState } from "react";
import styles from "./DesignYourSite.module.scss";
function Rightcontainer() {
  const [componentBeingDrag, setComponentBeingDrag] = useState<JSX.Element>();
  const [components, setComponents] = useState<JSX.Element[]>([]);
  useEffect(() => {
    canvasSubject.subscribe(setComponentBeingDrag);
  }, []);
  return (
    <div className={styles.rightcontainer}>
      Rightcontainer
      <div
        onDrop={(e) => {
          const _components = components?.slice();
          if (componentBeingDrag) {
            _components?.push(componentBeingDrag);
            setComponents(_components);
          }
        }}
        onDragOver={(e) => {
          let event = e;
          event.stopPropagation();
          event.preventDefault();
        }}
        className={styles.sitepreview}
      >
        {components && components.map((e) => e)}
      </div>
    </div>
  );
}

export default Rightcontainer;
