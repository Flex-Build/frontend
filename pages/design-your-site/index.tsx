import Navbar from "@/components/Navbar";
import { publish_site } from "@/src/apis/axios";
import { buyComponents } from "@/src/services/ipfs/smart-contract/buy-components";
import { componentAdded } from "@/src/subjects/canvas";
import { BigNumber, BigNumberish, ethers } from "ethers";
import React, { useEffect, useState } from "react";
import { useSigner } from "wagmi";
import styles from "./DesignYourSite.module.scss";
import LeftContainer from "./leftContainer/LeftContainer";
import Rightcontainer from "./rightContainer/Rightcontainer";

function DesignYourSite() {
  const [siteName, setSiteName] = useState("");
  const [vis, setvis] = useState(false);
  const [htmlString, setHtmlString] = useState("");
  const [loadOrNot, setLoadOrNot] = useState(false);
  const [totalPrice, setTotalPrice] = useState(BigNumber.from(0));
  const [ids, setIds] = useState<BigNumberish[]>([]);
  const { data: signer } = useSigner();
  const onOk = async () => {
    if (!signer) return;
    setLoadOrNot(true);
    try {
      await buyComponents(ids, totalPrice, signer);
      await publish_site(siteName, [], htmlString);
    } catch (e) {}

    setLoadOrNot(false);
  };
  useEffect(() => {
    let newTotalPrice = BigNumber.from(totalPrice);
    const _ids = [...ids];
    componentAdded.subscribe((e) => {
      _ids.push(e[1]);
      setIds(_ids);
      newTotalPrice = newTotalPrice.add(e[0].price);
      setTotalPrice(newTotalPrice);
    });
  }, []);
  return (
    <div className={styles.designpage}>
      <div className="h-full w-full">
        <Navbar />
        <div className={styles.maincontainer}>
          <LeftContainer />
          <Rightcontainer htmlgen={setHtmlString} />
        </div>
        <button className={styles.publishBtn} onClick={() => setvis(true)}>
          Publish ({ethers.utils.formatEther(totalPrice)} FIL)
        </button>

        {vis ? (
          <div className={styles.popup1}>
            <div className={styles.popup2}>
              <input
                placeholder="Site Name"
                type="text"
                className={styles.popup3}
                onChange={(e) => setSiteName(e.target.value)}
              ></input>
              <div className={styles.popcenter}>
                <button className={styles.popup4} onClick={onOk}>
                  {loadOrNot && <div className={styles.loader}> </div>}
                  OK
                </button>
                <button className={styles.popup5} onClick={() => setvis(false)}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default DesignYourSite;
