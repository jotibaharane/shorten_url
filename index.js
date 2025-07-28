import { config } from "dotenv";
import express from "express";
import mongoose from "mongoose";
import { main, redirectShort, short } from "./controller/url.js";

const app = new express();
app.use(express.urlencoded({ extended: true }));
config({ path: ".env" });
mongoose
  .connect(process.env.MONGO_URI, { dbName: "short_url" })
  .then(() => console.log(`mongo connected`))
  .catch((err) => console.log(err?.message));

app.get("/", main);

app.post("/short", short);
app.get("/:shortId", redirectShort);

app.listen(process.env.PORT, () =>
  console.log(`port is running on ${process.env.PORT}`)
);
