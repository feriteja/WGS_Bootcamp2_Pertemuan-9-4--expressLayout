// const http = require("http");
const fs = require("fs");
const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

// app.use((req, res, next) => {
//   console.log("time", Date.now());
//   next();
// });

app.get("/", (req, res) => {
  contacts = [
    {
      name: "user1",
      email: "user1@mail.com",
    },
    {
      name: "user2",
      email: "user2@mail.com",
    },
    {
      name: "user3",
      email: "user3@mail.com",
    },
    {
      name: "user4",
      email: "user4@mail.com",
    },
  ];

  res.render("index", {
    name: "Feri Teja Kusuma",
    title: "WEBSERVER - EJS",
    contacts,
  });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "EJS layout" });
});

app.get("/contact", (req, res) => {
  res.render("contact", { title: "EJS layout" });
});

app.get("/product/:id", (req, res) => {
  console.log(req.query.category);
  res.send(
    `product id: ${req.params.id} <br /> category id: ${req.query.category} `
  );
});

app.get("/product/:id/category/:idcat", (req, res) => {
  res.send(
    `product id: ${req.params.id} <br /> category id: ${req.params.idcat} `
  );
});

app.use("/", (req, res) => {
  res.status(404).render("notFound", { name: "feri" });
});

app.listen(port, () => {
  console.log(`your server listening on port ${port}`);
});
