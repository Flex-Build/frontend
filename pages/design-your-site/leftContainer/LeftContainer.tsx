import React, { useEffect, useState } from "react";
import styles from "./LeftContainer.module.scss";
import { canvasSubject } from "@/src/subjects/canvas";
import Exp from "../TestComponents/Exp/Exp";
import Container from "../TestComponents/Container";
import { getComponents } from "@/src/services/ipfs/smart-contract/get-components";
import { useProvider } from "wagmi";
import { FlexBuild } from "@/src/contracts";
import { ethers } from "ethers";
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
    <div className="flex flex-col w-[27%]">
      <div className="bg-[#E4F5EB] mb-1.5 pl-6 pt-3">
        <p className="text-3xl mb-4">Components</p>
      </div>
      <div className={styles.leftcontainer}>
      <div className={styles.complist}>
        <p className={styles.componentName}>Container</p>
        <div className={styles.componentCard}>
          <Container draggable onDragStart={() => canvasSubject.next(true)} />
        </div>
        {components &&
          components.map((e, i) => {
            return (
              <div key={i}>
                <div className={styles.nameAndPrice}>
                  <p className={styles.componentName}>{e.name}</p>
                  <p className={styles.itemprice}>
                    {ethers.utils.formatUnits(e.price) + ` FIL`}
                  </p>
                </div>
                <div
                  className={styles.componentCard}
                  draggable
                  onDragStart={() => canvasSubject.next([e, i])}
                >
                  <Exp ipfsHash={"ipfs://" + e.code_hash} id={i.toString()} />
                </div>
              </div>
            );
          })}
      </div>
    </div>
    </div>
  );
}

export default LeftContainer;
