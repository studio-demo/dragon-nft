import React from "react";
import styles from "./card.module.scss";
import { Profile, userProfile as userProfileType } from "../profile/profile";
import { Tag } from "../tag/tag";
import { Button } from "../button/button";
import { useState } from "react";
import avatarPlaceholder from "../../assets/images/avatar-placeholder.webp";

export interface CardProps {
  title: string;
  imageUrl?: string;
  premium?: boolean;
  forceHover?: boolean;
  className?: string;
  profile?: userProfileType;
}

export const Card: React.FC<CardProps> = ({
  className,
  title,
  profile,
  imageUrl,
  premium = false,
  forceHover = false,
}) => {
  const [isHovering, setIsHovering] = useState(forceHover);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div className={`${styles.root} ${className}`}>
      <div className={premium ? styles.premium : ""}>
        <div
          className={styles.imageContainer}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <img
            src={imageUrl || avatarPlaceholder}
            className={`${styles.image} ${isHovering ? styles.blur : ""}`}
            alt="card"
          />
          {isHovering && (
            <Button
              text="Place a Bid"
              type="primary"
              className={styles.placeABid}
            />
          )}
        </div>
      </div>
      <div className={styles.titleContainer}>
        <h1 className={styles.titleCard}>{title}</h1>
        <Tag className={premium ? styles.premiumTag : ""} />
      </div>
      <Profile
        eth={profile!.eth}
        imageUrl={profile!.imageUrl}
        name={profile!.name}
      />
    </div>
  );
};
