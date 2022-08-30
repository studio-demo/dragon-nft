import React from "react";
import styles from "./cover.module.scss";
import { Button } from "../button/button";
import { Card } from "../card/card";

export interface CoverProps {
  className?: string;
}

export const Cover: React.FC<CoverProps> = ({ className }) => {
  return (
    <div className={`${styles.root} ${className || ""}`}>
      <div className={styles.TextContainer}>
        <h2 className={styles.title}>Discover a New Era of Crypto Currency</h2>
        <p className={styles.RunningTextCover}>
          Dragon NFT is the primer marketplace for NFT, which are digital items
          you can truly own. Digital items have existed for a long time, but
          never like this.
        </p>
        <Button type="primary" text={"Get Started"} />
      </div>
      <div className={styles.CardsContainer}>
        <Card
          title="Hamlet Contemplates"
          imageUrl="https://static.wixstatic.com/media/11062b_bfd1c054276945c48c1fad30f1646c8a~mv2.jpg/v1/fill/w_680,h_454,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Illustrated%20Female%20Character.jpg"
          profile={{
            eth: "78,098",
            imageUrl:
              "https://static.wixstatic.com/media/nsplsh_6c4a90465f8942448c83875b4a100caa~mv2.jpg/v1/fill/w_286,h_190,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image%20by%20Sierra%20Koder.jpg",
            name: "Alex",
          }}
        />
      </div>
    </div>
  );
};
