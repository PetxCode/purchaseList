const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./utils/db");

const app = express();
const port = process.env.PORT;

app.use(cors({ origin: "*" }));
app.use(express.json());

app.get("/", (req, res) => {
	res.status(200).json({ message: "go good and fine...!❤️🍾🍾👌👌👌🎊🎉" });
});

app.use("/api/user", require("./router/userRouter"));
app.use("/api/item", require("./router/itemsRouter"));

app.use("/api/item/like", require("./router/likeRouter"));
app.use("/api/item/rating", require("./router/ratingRouter"));

app.listen(port, () => {
	console.log("server is now listening");
});
