import Navbar from "@/components/Navbar";
import { createComponent } from "@/src/services/ipfs/smart-contract/create-component";
import React, { useState } from "react";
import { useSigner } from "wagmi";
import styles from "./WriteAComponent.module.scss";
function WriteAComponent() {
  const [code, setCode] = useState("");
  const [price, setPrice] = useState<number>(0);
  const { data: signer } = useSigner();

  const onUpload = () => {
    if (!price || !signer) return;
    createComponent(code, price, signer).then((e) => {
      console.log(e?.transactionHash);
    });
  };
  return (
    <div className={styles.writeAComponentContainer}>
      <Navbar />
      <div className={styles.insertCode}>
        <textarea
          placeholder="Write Your Code Here"
          className={styles.inputArea}
          value={code}
          onChange={(e) => setCode(e.target.value)}
        ></textarea>
        <div className={styles.buttonAndInput}>
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
