import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", {
    title: "Enter your name below 👇"
  })
});

app.post("/submit", (req, res) => {
  let name = req.body.fName + req.body.lName;
  let nameLength = name.length;

  res.render("index.ejs", {
    title: `There are ${nameLength} letters in your name.`
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});