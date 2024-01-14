import express from "express";
import morgan from "morgan";
import router from "./router.js";

const app = express();

app.use(morgan("tiny"));
app.use(express.json());

app.use("/files", router);

app.listen(3000, (error) => {
  if (error) {
    console.log("Error-Server-Running ");
  }
  console.log("Server running on port 3000 OK!");
});
