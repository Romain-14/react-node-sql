import express from "express";
import cors from "cors";
import "dotenv/config";

import router from "./router/index.routes.js";

const app = express();
const PORT = process.env.PORT || process.env.LOCAL_PORT;

app.use(express.static("public"));
app.use(express.static("../client/build"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);

app.get("*", (req, res) => {
    res.sendFile("../client/build", "index.html");
});

app.listen(PORT, () => console.log(`running on http://localhost:${PORT}`));
