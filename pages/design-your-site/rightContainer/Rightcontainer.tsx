import { FlexBuild } from "@/src/contracts";
import { GetAllComponents_components } from "@/src/graph-ql/queries/GET_ALL_COMPONENTS/__generated__/GetAllComponents";
import { getComponents } from "@/src/services/ipfs/smart-contract/get-components";
import { canvasSubject } from "@/src/subjects/canvas";
import React, { useEffect, useState } from "react";
import { useSigner } from "wagmi";
import Container from "../TestComponents/Container";
import Exp from "../TestComponents/Exp/Exp";
import styles from "./Rightcontainer.module.scss";

type Props = {
  htmlgen?: (a: string) => void;
};

const Rightcontainer: React.FC<Props> = ({ htmlgen }) => {
  const [componentBeingDrag, setComponentBeingDrag] = useState<
    FlexBuild.ComponentStructOutput | boolean
  >();
  const [components, setComponents] = useState<
    (FlexBuild.ComponentStructOutput | boolean)[]
  >([]);

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
            <img
              src="https://cdn-icons-png.flaticon.com/512/6591/6591195.png"
              className={styles.dragimg}
              alt=""
            />
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
                ipfsHash={"ipfs://" + e.code_hash}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Rightcontainer;
