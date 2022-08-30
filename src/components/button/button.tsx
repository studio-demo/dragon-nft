import React from "react";
import styles from "./button.module.scss";

export interface ButtonProps {
  className?: string;
  text: string;
  type?: "primary" | "secondary";
}

export const Button: React.FC<ButtonProps> = ({
  className,
  type = "primary",
  text,
}) => {
    const typeClass = styles[type];
  return (
    <div className={`${styles.root} ${typeClass} ${className}`}>{text}</div>
  );
};
