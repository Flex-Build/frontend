import { createComponent } from "@/src/services/ipfs/smart-contract/create-component";
import React, { useState } from "react";
import { useSigner } from "wagmi";
import styles from "./WriteAComponent.module.scss";
import Editor from "@monaco-editor/react";
import { ethers } from "ethers";

function WriteAComponent() {
  const [code, setCode] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { data: signer } = useSigner();

  const onUpload = () => {
    if (!price || !signer) return;
    const price_BigInt = ethers.utils.parseEther(price.toString());
    setIsLoading(true);
    createComponent(name, code, price_BigInt, signer).then((e) => {
      console.log(e?.transactionHash);
      setIsLoading(false);
    }).catch(()=>{
      setIsLoading(false);
    });
  };
  return (
    <div className={styles.writeAComponentContainer}>
      <div className={styles.insertCode}>
        <div style={{ marginTop: "10px" }}></div>
        <Editor
          height="40vh"
          defaultLanguage="html"
          defaultValue="<p>Hello Flex</p>"
          onChange={(e) => setCode(e ?? "")}
          theme="vs-dark"
        />
        <div className={styles.buttonAndInput}>
          <p className={styles.namelabel}>Component Name</p>
          <input
            placeholder="Enter Component Name"
            type="text"
            className={styles.nameInput}
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>

        {/* <input type="text" className={styles.compname} placeholder="Component Name"></input> */}
        <p className={styles.pricelabel}>Price</p>

        <div className="flex">
          <input
            placeholder="Enter Price"
            type="number"
            className={styles.priceInput}
            value={price}
            onChange={(e) => setPrice(+e.target.value)}
          ></input>
          <button
            className={styles.upload + " justify-center items-center"}
            onClick={onUpload}
          >
            Upload
            {isLoading && <div className={styles.loader + " ml-3"} />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default WriteAComponent;
