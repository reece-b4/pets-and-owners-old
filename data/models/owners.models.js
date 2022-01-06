const fs = require("fs");

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
