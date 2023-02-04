import React from "react";
import styles from "./Properties.module.scss";

type Props = {
  onCancel: () => void;
  cssProps?: React.CSSProperties;
  onStyleChange?: (cssProps: React.CSSProperties) => void;
  visible: boolean;
  onPropsChange?: (key: string, value: string) => void;
  cProps?: any;
};
const Properties: React.FC<Props> = (p) => {
  return (
    <>
      {p.visible && (
        <div className={styles.propertiesSection}>
          <div className={styles.propAndBtn}>
            <h6 className={styles.propertyname}>Properties</h6>
            <button onClick={p.onCancel} className={styles.cross}>
              X
            </button>
          </div>
          <hr className={styles.hl} />
          <div className={styles.propertiesContainer}>
            {p.onStyleChange && (
              <>
                <div className="m-2">
                  <p className={styles.PropertyLable}>Width</p>
                  <input
                    className={styles.inputParemeter}
                    type="string"
                    value={p.cssProps?.width}
                    onChange={(e) => {
                      const new_css: React.CSSProperties = {
                        ...p.cssProps,
                        width: e.target.value,
                      };
                      p.onStyleChange?.(new_css);
                    }}
                  ></input>
                </div>

                <div className="m-2">
                  <p className={styles.PropertyLable}>Padding</p>
                  <input
                    className={styles.inputParemeter}
                    type="string"
                    value={p.cssProps?.padding}
                    onChange={(e) => {
                      const new_css: React.CSSProperties = {
                        ...p.cssProps,
                        padding: e.target.value,
                      };
                      p.onStyleChange?.(new_css);
                    }}
                  ></input>
                </div>
              </>
            )}
            {p.onPropsChange && (
              <>
                {Object.keys(p.cProps).map((k) => (
                  <div key={k} className="m-2">
                    <p className={styles.PropertyLable}>{k}</p>
                    <input
                      className={styles.inputParemeter}
                      type="string"
                      value={p.cProps[k]}
                      onChange={(e) => {
                        p.onPropsChange?.(k, e.target.value);
                      }}
                    ></input>
                  </div>
                ))}
              </>
            )}
          </div>

          
        </div>
      )}
    </>
  );
};

export default Properties;
