import { createBoard } from "@wixc3/react-board";
import { Button } from "../../../components/button/button";

export default createBoard({
    name: "Button",
    Board: () => <Button text="Click me" />,
    environmentProps: {
        canvasWidth: 100,
        windowHeight: 300,
        windowWidth: 300,
        canvasHeight: 46,
    },
});
