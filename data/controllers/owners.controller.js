const { selectOwners } = require("../models/owners.models");

exports.getOwners = (req, res) => {
  console.log("get request received");
  selectOwners((err, owners) => {
    console.log(owners);
    res.status(200).send({ owners });
  });
};
