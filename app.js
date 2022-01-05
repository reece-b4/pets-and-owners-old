// GET /owners - responds with an array containing the data of every owner (hint: you will need to use fs.readdir to read all of the file names in the owners folder)

const express = require("express");
const fs = require("fs");
const app = express();

app.get("/api/owners/:id", (req, res) => {
  const { id } = req.params;
  fs.readFile(`./data/owners/${id}.json`, "utf8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const owner = JSON.parse(data);
      res.status(200).send({ owner });
    }
  });
});

app.get("/api/owners", (req, res) => {
  console.log("get request received");
  fs.readdir("./data/owners", "utf8", (err, dataArray) => {
    if (err) {
      console.log(err);
    } else {
      const ownersArray = [];
      dataArray.forEach((filename) => {
        fs.readFile(`data/owners/${filename}`, "utf8", (err, ownerData) => {
          if (err) {
            console.log(err);
          } else {
            ownersArray.push(JSON.parse(ownerData));
            if (ownersArray.length === dataArray.length) {
                res.status(200).send(ownersArray);
            }
          }
        });
      });
    }
  });
});

module.exports = app;
