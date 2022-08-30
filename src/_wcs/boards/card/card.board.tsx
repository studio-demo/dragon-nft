import { createBoard } from "@wixc3/react-board";
import { Card } from "../../../components/card/card";

export default createBoard({
  name: "Card",
  Board: () => (
    <Card
      title="Hamlet Contemplates"
      imageUrl="https://static.wixstatic.com/media/11062b_bfd1c054276945c48c1fad30f1646c8a~mv2.jpg/v1/fill/w_680,h_454,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Illustrated%20Female%20Character.jpg"
      profile={{
        eth: "78,098",
        imageUrl:
          "https://static.wixstatic.com/media/nsplsh_6c4a90465f8942448c83875b4a100caa~mv2.jpg/v1/fill/w_286,h_190,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image%20by%20Sierra%20Koder.jpg",
        name: "Alex",
      }}
    />
  ),
});
