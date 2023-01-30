import React, { useRef } from "react";
import { useDrag } from "react-dnd";
import styles from "./DesignYourSite.module.scss";
import { useContext } from "react";
import { CustomComponent } from "../../context/MapComponent";
function LeftContainer(props: any) {
  const data = useContext(CustomComponent);

  return (
    <div className={styles.leftcontainer}>
      Components
      <div className="h-fit">
        <button onClick={() => console.log(data)}>max</button>
        {data.components.map((e) => {
          return (
            <div
              draggable
              onDrop={() => console.log("drop")}
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
