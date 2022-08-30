import React from "react";
import { createBoard } from "@wixc3/react-board";
import { Profile } from "../../../components/profile/profile";

export default createBoard({
  name: "Profile",
  Board: () => (
    <Profile
      imageUrl="https://static.wixstatic.com/media/nsplsh_6c4a90465f8942448c83875b4a100caa~mv2.jpg/v1/fill/w_286,h_190,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image%20by%20Sierra%20Koder.jpg"
      name="SalvadorDali"
      eth="4.89 eTH"
    />
  ),
  environmentProps: {
    canvasWidth: 340,
    canvasBackgroundColor: "#181717",
    canvasHeight: 59,
  },
});
