import React, { useEffect, useState } from "react";
import styles from "./LeftContainer.module.scss";
import { canvasSubject } from "@/src/subjects/canvas";
import Exp from "../TestComponents/Exp/Exp";
import Container from "../TestComponents/Container";
import { getComponents } from "@/src/services/ipfs/smart-contract/get-components";
import { useProvider, useSigner } from "wagmi";
import { FlexBuild } from "@/src/contracts";
function LeftContainer() {
  const [components, setComponents] = useState<
    FlexBuild.ComponentStructOutput[]
  >([]);

  const provider = useProvider();
  useEffect(() => {
    getComponents(provider).then((e) => {
      if (e) setComponents(e);
    });
  }, []);
  return (
    <div className={styles.leftcontainer}>
      <p className={styles.compName}>Components</p>

      <div className={styles.complist}>
        <p className={styles.componentName}>Container</p>
        <div className={styles.componentCard}>
          <Container draggable onDragStart={() => canvasSubject.next(true)} />
        </div>
        {components &&
          components.map((e, i) => {
            return (
              <div key={i}>
                <p className={styles.componentName}>name</p>
                <div
                  className={styles.componentCard}
                  draggable
                  onDragStart={() => canvasSubject.next(e)}
                >
                  <Exp ipfsHash={"ipfs://" + e.code_hash} id={i.toString()} />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default LeftContainer;
