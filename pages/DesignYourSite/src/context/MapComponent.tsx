import React, { useState } from "react";
import Button from "../../TestComponents/Button";
import Container from "../../TestComponents/Container";
import Input from "../../TestComponents/Input";

//components array
type Shash={id:number,component:JSX.Element}[] 


type Om = {
    components:Shash,
    updatecomponents:(a:Shash)=>void,
};
export let CustomComponent:React.Context<Om>

export function OmProvider(props:React.PropsWithChildren){
    const[components,setComponents]=useState<Shash>([{ id: 1, component: <Button /> }, { id: 2, component: <Container /> }, { id: 3, component: <Input /> }]);   
    const updatecomponents=(a:Shash)=>{
        setComponents(a)
    }

    const value = {
        components,
        updatecomponents:updatecomponents
    }
    CustomComponent=React.createContext(value)
    return (
        <CustomComponent.Provider value={value}>
            {props.children}
        </CustomComponent.Provider>
    )
}