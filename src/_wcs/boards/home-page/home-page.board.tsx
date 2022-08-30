import React from "react";
import { createBoard } from "@wixc3/react-board";
import { HomePage } from "../../../components/home-page/home-page";

export default createBoard({
  name: "HomePage",
  Board: () => <HomePage />,
  environmentProps: {
    windowWidth: 1354,
    windowHeight: 3914,
    canvasBackgroundColor: "#030610",
    canvasWidth: 1354,
    canvasHeight: 3914,
    windowBackgroundColor: "#030610",
  },
});
