const fs = require("fs");

exports.selectOwnerById = (ownerId, callback) => {
  fs.readFile(`./data/owners/${id}.json`, "utf8", (err, data) => {
    if (err) {
      callback(err);
    } else {
      const parsedOwner = JSON.parse(data);
      callback(null, parsedOwner);
    }
  });
};

exports.selectOwners = (callback) => {
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
              callback(null, ownersArray);
            }
          }
        });
      });
    }
  });
};

exports.selectUpdateOwnerNameAge = (owner, callback) => {
  console.log(owner);
  fs.readFile(`./data/owners/${id}.json`, "utf8", (err, data) => {
    if (err) {
      callback(err);
    } else {
      let ownerData = JSON.parse(data);
      data.forEach((person) => {
        if (person.id === id) {
          person = owner;
        }
      });
    }
    fs.writeFile(`./data/owners/${id}.json`, "utf8", (err, data) => {
      if (err) {
        callback(err);
      } else {
      }
    });
  });
};
