import React from "react";
import styles from "./top-menu.module.scss";
import { Logo } from "../logo/logo";
import { MenuTab, menuItem as menuItemType } from "../menu-tab/menu-tab";
import { Button } from "../button/button";

export interface TopMenuProps {
  className?: string;
  items: menuItemType[];
}

export const TopMenu: React.FC<TopMenuProps> = ({ className, items }) => {
  return (
    <div className={`${styles.root} ${className}`}>
      <Logo />
      <div className={styles.tabsContainer}>
        {items.map((item, i) => {
          return (
            <MenuTab key={i} item={{ text: item.text, link: item.link }} />
          );
        })}
      </div>
      <Button text={"Connect Wallet"} type="secondary" />
    </div>
  );
};
