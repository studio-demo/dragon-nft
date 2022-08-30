import React from "react";
import styles from "./home-page.module.scss";
import { Cover } from "../cover/cover";
import { CreateSell } from "../create-sell/create-sell";
import { LiveAuctions } from "../live-auctions/live-auctions";
import { HotNFT } from "../hot-nft/hot-nft";
import { TopMenu } from "../top-menu/top-menu";
import { Banner } from "../banner/banner";

export interface HomePageProps {
  className?: string;
}

export const HomePage: React.FC<HomePageProps> = ({ className }) => {
  return (
    <div className={`${styles.root} ${className}`}>
      <TopMenu
        items={[
          {
            text: "Home",
          },
          {
            text: "Discover",
          },
          {
            text: "Docs",
          },
          {
            text: "Blog",
          },
          {
            text: "About Us",
          },
          {
            text: "Contact Us",
          },
        ]}
      />
      <Cover className={styles.MainCover} />
      <CreateSell className={styles.MainCreatSell} />
      <LiveAuctions
        cards={[
          {
            imageUrl:
              "https://static.wixstatic.com/media/nsplsh_3c6a887d51094714b01401d53cb9a487~mv2.jpg/v1/fill/w_680,h_454,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image%20by%20Alex%20Sh.jpg",
            title: "Abstract shape",
            userProfile: {
              imageUrl:
                "https://static.wixstatic.com/media/nsplsh_6f2d3736423262736b6363~mv2_d_3456_5184_s_4_2.jpg/v1/fill/w_286,h_190,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image%20by%20Andres%20Herrera.jpg",
              eth: "45,800",
              name: "Kathleen Hol",
            },
          },
          {
            imageUrl:
              "https://static.wixstatic.com/media/nsplsh_354f36635f704c7a695873~mv2_d_4016_6016_s_4_2.jpg/v1/fill/w_680,h_454,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image%20by%20Hu%20Chen.jpg",
            title: "Mirror texture",
            userProfile: {
              eth: "100,000",
              imageUrl:
                "https://static.wixstatic.com/media/nsplsh_e1bfade106e84eb09ade2e052c2ac60b~mv2.jpg/v1/fill/w_286,h_190,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image%20by%20Multi%20Awesome%20Studio.jpg",
              name: "Jamika R. W",
            },
          },
          {
            imageUrl:
              "https://static.wixstatic.com/media/nsplsh_85147283a9bb467f9467c64684676f07~mv2.jpg/v1/fill/w_680,h_454,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image%20by%20Alex%20Sh.jpg",
            title: "Mastermind",
            userProfile: {
              eth: "35,678",
              imageUrl:
                "https://static.wixstatic.com/media/nsplsh_4554494134355836514e67~mv2_d_4085_6127_s_4_2.jpg/v1/fill/w_286,h_190,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image%20by%20Paladini%20Mauro.jpg",
              name: "Ann J. Artm",
            },
          },
        ]}
      />
      <HotNFT
        cards={[
          {
            imageUrl:
              "https://static.wixstatic.com/media/11062b_013a3d5b29d04188ad33a77749cbcb48~mv2.jpg/v1/fill/w_680,h_454,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Rounds%20and%20Circles.jpg",
            title: "Azuki Demon",
            userProfile: {
              eth: "3,600",
              imageUrl:
                "https://static.wixstatic.com/media/11062b_632bb10eecfe47b0ac659536c7cfe866~mv2.jpg/v1/fill/w_286,h_190,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Roses%20Welder.jpg",
              name: "Lillie A. Woods",
            },
          },
          {
            imageUrl:
              "https://static.wixstatic.com/media/11062b_5f110733ff5c41d99088c9e425375167~mv2.jpg/v1/fill/w_680,h_454,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Cyborg%20with%20Gas%20Mask.jpg",
            title: "Mutant CloneX'",
            userProfile: {
              eth: "5,8000",
              imageUrl:
                "https://static.wixstatic.com/media/e12a4233422773ddf68d1a08f6b841b8.jpg/v1/fill/w_286,h_190,fp_0.45_0.48,q_80,usm_0.66_1.00_0.01,enc_auto/Future%20Punk.jpg",
              name: "Peggy J. Hag",
            },
          },
          {
            imageUrl:
              "https://static.wixstatic.com/media/11062b_adae38ee6110499e822f536d58016180~mv2.jpg/v1/fill/w_680,h_454,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Geometric%20Elements.jpg",
            title: "ewere",
            userProfile: {
              eth: "8,900",
              imageUrl:
                "https://static.wixstatic.com/media/nsplsh_593a0ba3f8594691bff575470f1c9e9e~mv2.jpg/v1/fill/w_286,h_190,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image%20by%20%E6%84%9A%E6%9C%A8%E6%B7%B7%E6%A0%AA%20cdd20.jpg",
              name: "April T. Ross",
            },
          },
          {
            imageUrl:
              "https://static.wixstatic.com/media/0b92a22fd05e4237a0af2ccc7dd6ba15.jpg/v1/fill/w_680,h_454,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Astronaut%20with%20Surreal%20Background.jpg",
            title: "Dove of Peace",
            userProfile: {
              eth: "3,470",
              imageUrl:
                "https://static.wixstatic.com/media/nsplsh_d3447799c6ba4a10ab98601864d0c7d6~mv2.jpg/v1/fill/w_286,h_190,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image%20by%20Mulyadi.jpg",
              name: "James L. Thra",
            },
          },
          {
            imageUrl:
              "https://static.wixstatic.com/media/11062b_114bb20a92cb4281a58007d5e26dc0dd~mv2.jpg/v1/fill/w_680,h_454,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Scary%20Robot.jpg",
            title: "Turtle United",
            userProfile: {
              eth: "67,030",
              imageUrl:
                "https://static.wixstatic.com/media/7f9cc7fa2f864072b961d3678830eb59.jpg/v1/fill/w_680,h_454,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3D%20Sculpture.jpg",
              name: "Linda B. Gada",
            },
          },
          {
            imageUrl:
              "https://static.wixstatic.com/media/11062b_2edfa7e7e0ba48d6b140aa3a3261feda~mv2.jpg/v1/fill/w_680,h_454,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Baseball.jpg",
            title: "Desi Baby Club",
            userProfile: {
              eth: "23,4000",
              imageUrl:
                "https://static.wixstatic.com/media/nsplsh_526e34395355303363716b~mv2_d_1920_2880_s_2.jpg/v1/fill/w_272,h_182,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image%20by%20Nathan%20Bingle.jpg",
              name: "Dennis K. Pa",
            },
          },
        ]}
        className={styles.MainHot}
      />
      <Banner />
    </div>
  );
};
