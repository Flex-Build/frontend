import { canvasSubject } from "@/src/subjects/canvas";
import React, { useEffect, useState } from "react";
import styles from "./Container.module.scss";
function Container() {
  const [componentBeingDrag, setComponentBeingDrag] = useState<JSX.Element>();
  const [components, setComponents] = useState<JSX.Element[]>([]);
  useEffect(() => {
    canvasSubject.subscribe(setComponentBeingDrag);
  }, []);
  return (
    <div
      placeholder="container"
      onDrop={(e) => {
        const _components = components?.slice();
        if (componentBeingDrag) {
          _components?.push(componentBeingDrag);
          setComponents(_components);
        }
        e.stopPropagation();
      }}
      onDragOver={(e) => {
        let event = e;
        event.stopPropagation();
        event.preventDefault();
      }}
      className={styles.container}
    >
      {components && components}
    </div>
  );
}

export default Container;
