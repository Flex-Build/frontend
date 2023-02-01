import { fetchIpfs } from "@/src/services/ipfs/fetchIpfs";
import React, { useEffect, useState } from "react";
import Properties from "../Properties";

type Props = {
  ipfsHash: string;
};
const Exp = (p: Props) => {
  const [htmlString, setHtmlString] = useState("");

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
      ></div>
      <Properties />
    </>
  );
};

export default Exp;
