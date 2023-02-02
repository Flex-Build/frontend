import { canvasSubject } from "@/src/subjects/canvas";
import React, { useEffect, useState } from "react";
import styles from "./Rightcontainer.module.scss";
function Rightcontainer() {
  const [componentBeingDrag, setComponentBeingDrag] = useState<JSX.Element>();
  const [components, setComponents] = useState<JSX.Element[]>([]);
  useEffect(() => {
    canvasSubject.subscribe(setComponentBeingDrag);
  }, []);
  console.log(components);
  
  return (
    <div className={styles.rightcontainer}>
      <p className={styles.previewName}>Preview</p>
      <div
      placeholder="drag here"
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
        {components.length===0?
        <div className={styles.dragHere}>
          <img src="https://cdn-icons-png.flaticon.com/512/6591/6591195.png" className={styles.dragimg} alt="" />
        </div>:
        components}
      </div>
    </div>
  );
}

export default Rightcontainer;
