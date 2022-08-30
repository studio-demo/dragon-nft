import React from "react";
import styles from "./logo.module.scss";
import LogoIcon from "../../assets/images/logo.png";

export interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`${styles.root} ${className}`}>
      <div className={styles.LogoLayout}>
        <div className={styles.logo}>
          <img src={LogoIcon} className={styles.Image} alt="logo" />
        </div>
        <p className={styles.LogoText}>Dragon NFT</p>
      </div>
    </div>
  );
};
