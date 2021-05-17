const express = require("express");
const path = require("path");
const app = express();
const port = 8080;

// use express.static to serve my scripts without custom routing
app.use(express.static("scripts"));

// create reference to root path for my html paths
const htmlRoot = { root: path.join(__dirname, "./public") };

app.get("/", (req, res) => res.sendFile("/index.html", htmlRoot));
app.get("/about", (req, res) => res.sendFile("/about.html", htmlRoot));
app.get("/contact-me", (req, res) =>
  res.sendFile("./contact-me.html", htmlRoot)
);

// catch 404s & display relevant html page
app.use((req, res /* next */) => {
  res.status(404).sendFile("./404.html", htmlRoot);
});

app.listen(port);
app.listen(() => console.log(`listening on port ${port}`));
