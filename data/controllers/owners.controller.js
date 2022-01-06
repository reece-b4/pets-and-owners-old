const { selectOwners, selectUpdateOwnerNameAge } = require("../models/owners.models");

exports.getOwners = (req, res) => {
  console.log("get request received");
  selectOwners((err, owners) => {
    console.log(owners);
    res.status(200).send({ owners });
  });
};

exports.getOwnerById = (req, res) => {
  const { id } = req.params;
  selectOwnerById(id, (err, owner) => {
    res.status(200).send({ owner });
  });
};

exports.updateOwnerNameAge = (req, res) => {
const { id } = req.params;
req.body.id = id;
selectUpdateOwnerNameAge(req.body, function(err, updatedOwner) {
  
});
}


/*
app.js, receive patch request
controller.js, make the body from packets using express
send body to models
in models replace appropriate user info with that of body
send updated data back to controller which sends to client
*/


