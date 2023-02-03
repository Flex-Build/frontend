import { GetAllComponents_components } from "@/src/graph-ql/queries/GET_ALL_COMPONENTS/__generated__/GetAllComponents";
import { canvasSubject } from "@/src/subjects/canvas";
import React, { useEffect, useState } from "react";
import Container from "../TestComponents/Container";
import Exp from "../TestComponents/Exp/Exp";
import styles from "./Rightcontainer.module.scss";
function Rightcontainer() {
  const [componentBeingDrag, setComponentBeingDrag] = useState<
    GetAllComponents_components | boolean
  >();
  const [components, setComponents] = useState<
    (GetAllComponents_components | boolean)[]
  >([]);

  const [finalHtml, setFinalHtml] = useState<string[]>([]);
  const handleHtmlRender = (i: number, a: string) => {
    const the_html = finalHtml.slice();
    the_html[i] = a;

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
                id={e.id}
                htmlGen={(a) => handleHtmlRender(i, a)}
                ipfsHash={e.code_uri}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default Rightcontainer;
