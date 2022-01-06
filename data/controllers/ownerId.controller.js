exports.getOwnerById = (req, res) => {
  const { id } = req.params;
  selectOwnerById(id, (err, owner) => {
    res.status(200).send({ owner });
  });
};
