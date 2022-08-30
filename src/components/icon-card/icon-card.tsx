import React from "react";
import styles from "./icon-card.module.scss";

export interface IconCardProps {
  className?: string;
  imageUrl: string;
}

export const IconCard: React.FC<IconCardProps> = ({ className, imageUrl }) => {
  return (
    <div className={`${styles.root} ${className}`}>
      <div className={styles.ImageContainer}>
        <div className={styles.Image}>
          <svg viewBox="0 0 24 24" fill="currentColor" width="35" height="35">
            <path d="M19,5 C19.5522847,5 20,5.44771525 20,6 L20,16 C20,16.5522847 19.5522847,17 19,17 L15,17 L15,19 L18,19 L18,20 L6,20 L6,19 L9,19 L9,17 L5,17 C4.44771525,17 4,16.5522847 4,16 L4,6 C4,5.44771525 4.44771525,5 5,5 L19,5 Z M14,17 L10,17 L10,19 L14,19 L14,17 Z M19,16 L19,6 L5,6 L5,16 L19,16 Z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};
