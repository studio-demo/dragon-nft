import React from "react";
import { createBoard } from "@wixc3/react-board";
import { Button } from "../../../components/button/button";

export default createBoard({
  name: "Button - Secondary",
  Board: () => <Button type="secondary" text="Button" />,
  environmentProps: {
    windowBackgroundColor: "#000000",
    canvasBackgroundColor: "#000000",
    canvasWidth: 100,
    windowHeight: 300,
    windowWidth: 300,
    canvasHeight: 46,
  },
});
