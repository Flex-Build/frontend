import { fetchIpfs } from "@/src/services/ipfs/fetchIpfs";
import React, { useEffect, useState } from "react";
import Properties from "../properties/Properties";

type Props = {
  ipfsHash: string;
  id: string;
};
const encapsulateCss = (htmlString: string, id: string) => {
  const lines = htmlString.split("\n");
  const styleTag = lines.findIndex((e) => e.includes("<style>"));
  if (styleTag == -1) {
    return htmlString;
  }

  let classNames: string[] = [];
  for (let index = styleTag; index < lines.length; index++) {
    const line = lines[index];
    if (line.includes("{")) {
      if (line.includes(".")) {
        const _classNames = line
          .slice(1, -1)
          .split(".")
          .map((e) => e.trim());
        classNames = classNames.concat(_classNames.filter((e) => e != " "));
      }
    }
  }

  for (let cN of classNames) {
    // const regexExp = `/\\.${cN}|"${cN}| ${cN} |${cN}"/i`;
    const regexExpStr = `\\.${cN}`;
    const regexExp = new RegExp(regexExpStr, "g");
    htmlString = htmlString.replaceAll(regexExp, "." + cN + id);
  }
  for (let cN of classNames) {
    const regexExpStr = `"${cN}`;
    const regexExp = new RegExp(regexExpStr, "g");
    htmlString = htmlString.replaceAll(regexExp, `"` + cN + id);
  }
  for (let cN of classNames) {
    const regexExpStr = ` ${cN}`;
    const regexExp = new RegExp(regexExpStr, "g");
    htmlString = htmlString.replaceAll(regexExp, " " + cN + id + " ");
  }
  console.log(htmlString);

  return htmlString;
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
        setHtmlString(encapsulateCss(e, p.id));
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
