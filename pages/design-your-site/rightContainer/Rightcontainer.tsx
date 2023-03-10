import { FlexBuild } from "@/src/contracts";
import { canvasSubject, componentAdded } from "@/src/subjects/canvas";
import { BigNumber, BigNumberish } from "ethers";
import React, { useEffect, useState } from "react";
import Container from "../TestComponents/Container";
import Exp from "../TestComponents/Exp/Exp";
import styles from "./Rightcontainer.module.scss";

type Props = {
  htmlgen?: (a: string) => void;
};

const Rightcontainer: React.FC<Props> = ({ htmlgen }) => {
  const [componentBeingDrag, setComponentBeingDrag] = useState<
    [FlexBuild.ComponentStructOutput, BigNumberish] | boolean
  >();
  const [components, setComponents] = useState<
    ([FlexBuild.ComponentStructOutput, BigNumberish] | boolean)[]
  >([]);

  const [totalPrice, setTotalPrice] = useState(BigNumber.from(0));

  const [finalHtml, setFinalHtml] = useState<string[]>([]);
  const handleHtmlRender = (i: number, a: string) => {
    const the_html = finalHtml.slice();
    the_html[i] = a;

    const style_tag = `
         <style>
      .container {
        flex: 1;
        width: 100%;
        height: 20vh;
        border-radius: 10px;
        border-width: 2px;
        border-color: rgba(0, 0, 0, 0.329);
        display: flex;
        border-style: dotted;
    }
    </style>
    `;

    htmlgen?.(the_html.join("") + style_tag);
    setFinalHtml(the_html);
  };
  useEffect(() => {
    canvasSubject.subscribe(setComponentBeingDrag);
  }, []);

  return (
    <div className={styles.rightcontainer}>
      <p className={styles.previewName}>Preview</p>
      <div
        placeholder="drag here"
        onDrop={(e) => {
          const _components = components?.slice();
          const the_html = finalHtml.slice();
          if (componentBeingDrag) {
            _components?.push(componentBeingDrag);
            the_html.push("");
            if (typeof componentBeingDrag != "boolean") {
              componentAdded.next(componentBeingDrag);
            }
            setFinalHtml(the_html);
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
        {components.length === 0 ? (
          <div className={styles.dragHere}>
            <picture>
            <img
              src="https://cdn-icons-png.flaticon.com/512/6591/6591195.png"
              className={styles.dragimg}
              alt="img"
            />
            </picture>
            <p className={styles.Dragdrop}>Drag & drop<br/>components here!</p>
          </div>
          
        ) : (
          components.map((e, i) => {
            if (typeof e == "boolean") {
              return (
                <Container key={i} htmlgen={(a) => handleHtmlRender(i, a)} />
              );
            }
            return (
              <Exp
                key={i}
                id={i.toString()}
                htmlGen={(a) => handleHtmlRender(i, a)}
                ipfsHash={"ipfs://" + e[0].code_hash}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Rightcontainer;
