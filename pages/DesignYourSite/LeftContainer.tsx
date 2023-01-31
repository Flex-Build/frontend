import React, { useRef } from "react";
import { useDrag } from "react-dnd";
import styles from "./DesignYourSite.module.scss";
import { useContext } from "react";
import { CustomComponent } from "../../context/MapComponent";
import { canvasSubject } from "@/src/subjects/canvas";
function LeftContainer(props: any) {
  const data = useContext(CustomComponent);

  return (
    <div className={styles.leftcontainer}>
      Components
      <div className="h-fit">
        {data.components.map((e) => {
          return (
            <div
              draggable
              onDragStart={() => canvasSubject.next(e.component)}
              key={e.id.toString()}
            >
              {e.component}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LeftContainer;
