import dotenv from "dotenv";

import express from  "express";
import cors from "cors";
import routes from "./routes.js";

dotenv.config();

const port = 3333;
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`⚡ Backend started at http://localhost:${port}`);
});
