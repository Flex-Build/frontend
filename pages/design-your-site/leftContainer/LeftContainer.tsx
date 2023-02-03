import React from "react";
import styles from "./LeftContainer.module.scss";
import { canvasSubject } from "@/src/subjects/canvas";
import { GET_ALL_COMPONENTS } from "@/src/graph-ql/queries/GET_ALL_COMPONENTS/getAllComponents";
import { GetAllComponents } from "@/src/graph-ql/queries/GET_ALL_COMPONENTS/__generated__/GetAllComponents";
import { useQuery } from "@apollo/client";
import Exp from "../TestComponents/Exp/Exp";
import Container from "../TestComponents/Container";
function LeftContainer() {
  const { data } = useQuery<GetAllComponents>(GET_ALL_COMPONENTS);

  return (
    <div className={styles.leftcontainer}>
      <p className={styles.compName}>Components</p>

      <div className={styles.complist}>
        <p className={styles.componentName}>Container</p>
        <div className={styles.componentCard}>
          <Container draggable onDragStart={() => canvasSubject.next(true)} />
        </div>
        {data &&
          data.components.map((e) => {
            return (
              <div key={e.id.toString()}>
                <p className={styles.componentName}>name</p>
                <div
                  className={styles.componentCard}
                  draggable
                  onDragStart={() => canvasSubject.next(e)}
                >
                  <Exp ipfsHash={e.code_uri} id={e.id} />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default LeftContainer;
