import { GetAllComponents_components } from "@/src/graph-ql/queries/GET_ALL_COMPONENTS/__generated__/GetAllComponents";
import { canvasSubject } from "@/src/subjects/canvas";
import React, { useEffect, useState } from "react";
import styles from "./Container.module.scss";
import Exp from "./Exp/Exp";
const Container: React.FC<
  React.HTMLProps<HTMLDivElement> & {
    htmlgen?: (a: string) => void;
  }
> = ({ htmlgen, ...p }) => {
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
    htmlgen?.("<div class=\"container\">"+the_html.join("")+"</div>");
  };
  useEffect(() => {
    canvasSubject.subscribe(setComponentBeingDrag);
  }, []);
  return (
    <div
      {...p}
      placeholder="container"
      onDrop={(e) => {
        const _components = components?.slice();
        const the_html = finalHtml.slice();
        if (componentBeingDrag) {
          _components?.push(componentBeingDrag);
          the_html.push("");
          setFinalHtml(the_html);
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
      {components &&
        components.map((e, i) => {
          if (typeof e == "boolean") {
            return (
              <Container htmlgen={(a) => handleHtmlRender(i, a)} key={i} />
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
        })}
    </div>
  );
};

export default Container;
