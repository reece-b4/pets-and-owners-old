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
