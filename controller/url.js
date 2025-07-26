import shortid from "shortid";
import { Url } from "../modal/url.js";

export const short = async (req, res) => {
  const longUrl = req.body.Url;
  const shortcode = shortid.generate();
  const shortUrl = `http://localhost:1000/${shortcode}`;
  const encodedUrl = new Url({ shortcode, longUrl });
  encodedUrl.save();
  console.log(encodedUrl);
  //   res.json({ encodedUrl, shortUrl });
  res.render("index.ejs", { shortUrl: shortUrl });
};

export const redirectShort = async (req, res) => {
  const shortcode = req.params.shortId;
  const resp = await Url.findOne({ shortcode });
  if (resp) {
    res.redirect(resp.longUrl);
  } else {
    res.json({ shortcode, resp: "not found" });
  }
};
