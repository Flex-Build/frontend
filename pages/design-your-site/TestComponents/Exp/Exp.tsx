import { fetchIpfs } from "@/src/services/ipfs/fetchIpfs";
import React, { useEffect, useState } from "react";
import Properties from "../../properties/Properties";
import mus from "mustache";
import { encapsulateCss } from "./encapsulateCss";
import { componentAdded } from "@/src/subjects/canvas";
type Props = {
  ipfsHash: string;
  id: string;
  htmlGen?: (a: string) => void;
};

const Exp = (p: Props) => {
  const [htmlString, setHtmlString] = useState("");
  const [rawHtmlString, setRawHtmlString] = useState("");
  const [display, setDisplay] = useState(false);

  const [extraProps, setExtraProps] = useState<any>({});
  const [cssProps, setCssProps] = useState<React.CSSProperties>({
    width: "auto",
    padding: "10px",
  });

  useEffect(() => {
    const encapsulated_css = encapsulateCss(rawHtmlString, p.id);
    const rendered = mus.render(encapsulated_css, extraProps);
    setHtmlString(rendered);
  }, [extraProps]);

  useEffect(() => {
    const div_ele = `
      <div style="width: ${cssProps.width}; padding: ${cssProps.padding};">${htmlString}</div>
    `;
    p.htmlGen?.(div_ele);
  }, [cssProps, htmlString]);
  useEffect(() => {
    fetchIpfs<string>(p.ipfsHash, true).then((e) => {
      if (e) {
        setRawHtmlString(e);
        const encapsulated_css = encapsulateCss(e, p.id);
        const _extraProps: any = {};
        const parsed = mus.parse(encapsulated_css);
        parsed.forEach((e) => {
          if (e[0] == "name") {
            _extraProps[e[1]] = "#" + e[1];
          }
        });
        const rendered = mus.render(encapsulated_css, _extraProps);
        setExtraProps(_extraProps);
        setHtmlString(rendered);
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
        cProps={extraProps}
        onPropsChange={(k, v) => {
          const _extraProps = { ...extraProps };
          _extraProps[k] = v;
          setExtraProps(_extraProps);
        }}
      />
    </>
  );
};

export default Exp;
