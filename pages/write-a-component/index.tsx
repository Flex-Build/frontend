import Navbar from "@/components/Navbar";
import { createComponent } from "@/src/services/ipfs/smart-contract/create-component";
import React, { useState } from "react";
import { useSigner } from "wagmi";
import styles from "./WriteAComponent.module.scss";
import Editor from "@monaco-editor/react";
function WriteAComponent() {
  const [code, setCode] = useState("");
  const [price, setPrice] = useState<number>(0);
  const { data: signer } = useSigner();

  const onUpload = () => {
    if (!price || !signer) return;
    createComponent("Name ata nay", code, price, signer).then((e) => {
      console.log(e?.transactionHash);
    });
  };
  return (
    <div className={styles.writeAComponentContainer}>
      <Navbar />
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
          <p className={styles.pricelabel}>Price</p>
          <input
            placeholder="Enter Price"
            type="number"
            className={styles.priceInput}
            value={price}
            onChange={(e) => setPrice(+e.target.value)}
          ></input>
          <button className={styles.upload} onClick={onUpload}>
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}

export default WriteAComponent;
