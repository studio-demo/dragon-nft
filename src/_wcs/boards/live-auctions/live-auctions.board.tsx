import React from "react";
import { createBoard } from "@wixc3/react-board";
import { LiveAuctions } from "../../../components/live-auctions/live-auctions";

export default createBoard({
  name: "LiveAuctions",
  Board: () => (
    <LiveAuctions
      cards={[
        {
          imageUrl:
            "https://static.wixstatic.com/media/nsplsh_3c6a887d51094714b01401d53cb9a487~mv2.jpg/v1/fill/w_680,h_454,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image%20by%20Alex%20Sh.jpg",
          title: "Abstract shape",
          userProfile: {
            eth: "45,800",
            imageUrl:
              "https://static.wixstatic.com/media/nsplsh_6f2d3736423262736b6363~mv2_d_3456_5184_s_4_2.jpg/v1/fill/w_286,h_190,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image%20by%20Andres%20Herrera.jpg",
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
            name: "Ann J. Artm",
            imageUrl:
              "https://static.wixstatic.com/media/nsplsh_4554494134355836514e67~mv2_d_4085_6127_s_4_2.jpg/v1/fill/w_286,h_190,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image%20by%20Paladini%20Mauro.jpg",
          },
        },
      ]}
    />
  ),
  environmentProps: {
    windowBackgroundColor: "#181818",
    windowWidth: 1300,
    windowHeight: 686,
    canvasHeight: 901,
  },
});
