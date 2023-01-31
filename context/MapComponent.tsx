import Exp from "@/pages/DesignYourSite/TestComponents/Exp";
import React, { useState } from "react";
import Button from "../pages/DesignYourSite/TestComponents/Button";
import Container from "../pages/DesignYourSite/TestComponents/Container";
import Input from "../pages/DesignYourSite/TestComponents/Input";

//components array
type Shash = { id: number; component: JSX.Element }[];

type Om = {
  components: Shash;
  updatecomponents: (a: Shash) => void;
};
export let CustomComponent: React.Context<Om>;

export function OmProvider(props: React.PropsWithChildren) {
  const [components, setComponents] = useState<Shash>([
    { id: 1, component: <Button /> },
    { id: 2, component: <Container /> },
    { id: 3, component: <Exp htmlString="<p>How are you</p>" /> },
  ]);
  const [canvasComponents, setCanvasComponents] = useState<Shash>([]);
  // const[setteledComp, setSettledComp]=useState<Shash>([])

  const updatecomponents = (a: Shash) => {
    setComponents(a);
  };

  const value = {
    components,
    updatecomponents: updatecomponents,
  };
  CustomComponent = React.createContext(value);
  return (
    <CustomComponent.Provider value={value}>
      {props.children}
    </CustomComponent.Provider>
  );
}
