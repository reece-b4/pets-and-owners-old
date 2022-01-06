// GET /owners - responds with an array containing the data of every owner (hint: you will need to use fs.readdir to read all of the file names in the owners folder)

const express = require("express");
const fs = require("fs");
const app = express();
const { getOwnerById } = require("./data/controllers/ownerId.controller.js");
const { getOwners } = require("./data/controllers/owners.controller.js");
app.get("/api/owners/:id", getOwnerById);

app.get("/api/owners", getOwners);

// app.get("/api/owners/:ownerId/pets", (req, res) => {
//   const { ownerId } = req.params;
//   fs.readdir("./data/pets", "utf-8", (err, petsFileNames) => {
//     if (err) {
//       console.log(err);
//     } else {
//       const petsArray = [];
//       petsFileNames.forEach((petsData) => {
//         if (petsData.owner === ownerId) {
//           petsArray.push(petsData);
//           res.status(200).send(petsArray);
//         }
//       });
//     }
//   });
// });

module.exports = app;
