import { fetchIpfs } from "@/src/services/ipfs/fetchIpfs";
import React, { useEffect, useState } from "react";
import { createNodeArray } from "typescript";
import Properties from "../properties/Properties";

type Props = {
  ipfsHash: string;
};

const Exp = (p: Props) => {
  const [htmlString, setHtmlString] = useState("");
  const [display, setDisplay] = useState(false);
  const [cssProps, setCssProps] = useState<React.CSSProperties>({
    width: "80%",
    padding: "10px",
    borderRadius: "10px",
  });

  useEffect(() => {
    fetchIpfs<string>(p.ipfsHash, true).then((e) => {
      if (e) {
        setHtmlString(e);
      }
    });
  }, []);
  return (
    <>
      <div
        dangerouslySetInnerHTML={{
          __html: htmlString,
        }}
        style={cssProps}
        onClick={() => setDisplay(true)}
      ></div>
      <Properties
        visible={display}
        onCancel={() => setDisplay(false)}
        onStyleChange={setCssProps}
        cssProps={cssProps}
      />
    </>
  );
};

export default Exp;
