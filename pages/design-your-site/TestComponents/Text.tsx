import React, { useState } from "react";
import Properties from "../properties/Properties";
const Container: React.FC<
  React.HTMLProps<HTMLDivElement> & {
    htmlgen?: (a: string) => void;
  }
> = ({ htmlgen, ...p }) => {
  const [display, setDisplay] = useState(false);
  const [text, setText] = useState("Hello");

  return (
    <>
      <p>{text}</p>
      <Properties
        onCancel={() => setDisplay(false)}
        visible={display}
        onTextChange={setText}
      />
    </>
  );
};

export default Container;
