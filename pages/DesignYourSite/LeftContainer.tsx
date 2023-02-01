import React from "react";
import styles from "./DesignYourSite.module.scss";
import { canvasSubject } from "@/src/subjects/canvas";
import { GET_ALL_COMPONENTS } from "@/src/graph-ql/queries/GET_ALL_COMPONENTS/getAllComponents";
import { GetAllComponents } from "@/src/graph-ql/queries/GET_ALL_COMPONENTS/__generated__/GetAllComponents";
import { useQuery } from "@apollo/client";
import Exp from "./TestComponents/Exp";
import Container from "./TestComponents/Container";
function LeftContainer() {
  const { data } = useQuery<GetAllComponents>(GET_ALL_COMPONENTS);

  return (
    <div className={styles.leftcontainer}>
      Components
      <div className="h-fit">
        <Container
          draggable
          onDragStart={() =>
            canvasSubject.next(
              <Container key={"container" + Math.random().toString()} />
            )
          }
        />
        {data &&
          data.components.map((e) => {
            return (
              <div
                draggable
                onDragStart={() =>
                  canvasSubject.next(
                    <Exp
                      key={Math.random().toString() + Date.now()}
                      ipfsHash={e.code_uri}
                    />
                  )
                }
                key={e.id.toString()}
              >
                <Exp ipfsHash={e.code_uri} />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default LeftContainer;
