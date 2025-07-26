import express from "express";
import mongoose from "mongoose";
import { redirectShort, short } from "./controller/url.js";
const app = new express();
app.use(express.urlencoded({ extended: true }));
mongoose
  .connect(
    "mongodb+srv://jotibaharane1906:rLI5U6b9K3YPW5Ve@cluster0.wpzqvmv.mongodb.net/",
    { dbName: "short_url" }
  )
  .then(() => console.log(`mongo connected`))
  .catch((err) => console.log(err?.message));

const PORT = 1000;

app.get("/", (req, res) => {
  res.render("index.ejs", { shortUrl: null });
});

app.post("/short", short);
app.get("/:shortId", redirectShort);

app.listen(PORT, () => console.log(`port is running on ${PORT}`));
