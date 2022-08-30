import React from "react";
import { createBoard } from "@wixc3/react-board";
import { Logo } from "../../../components/logo/logo";

export default createBoard({
    name: "Logo",
    Board: () => <Logo />,
    environmentProps: {
        windowBackgroundColor: '#000000'
    }
});
