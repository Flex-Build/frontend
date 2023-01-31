import React from "react";

type Props = {
  htmlString: string;
};
const Exp = (p: Props) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: p.htmlString,
      }}
    ></div>
  );
};

export default Exp;
