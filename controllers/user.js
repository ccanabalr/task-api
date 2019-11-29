"use strict";

var User = require("../models/user");
var mongoosePaginate = require("mongoose-pagination");

//Function that allows to obtain all paginated users
function getUsers(req, res) {
  var page = 1;
  if (req.params.page) {
    page = req.params.page;
  }
  var itemsPerPage = 4;

  User.find()
    .sort("_id")
    .paginate(page, itemsPerPage, (err, users, total) => {
      if (err) return res.status(500).send({ message: "Request failed" });

      if (!users)
        return res.status(404).send({ message: "No users available at this time" });

      return res.status(200).send({
        users,
        total,
        pages: Math.ceil(total / itemsPerPage)
      });
    });
}

// function that allows to obtain a user by their id
function getUser(req, res) {
  var idUser = req.params.id;
  User.findById(idUser, (err, user) => {
    if (err)
      return res.status(500).send({ message: "Error getting a user" });
    if (!user)
      return res
        .status(404)
        .send({ message: "This user was not found" });
    return res.status(200).send({ user: user });
  });
}

//function that allows you to assign a task to your user.
function saveTaskInUser(req, res) {
  var user = req.body;
  console.log("hola" + req);
  User.findByIdAndUpdate( user._id, user, { upsert: true, new: true },
    (err, user) => {
      if (err)
        return res
          .status(500)
          .send({ message: "Error getting user" });
      if (!user)
        return res.status(404).send({ message: "The user trying to search does not exist in the database" });

      return res.status(200).send({ user: user });
    }
  );
}

module.exports = {
  getUsers,
  getUser,
  saveTaskInUser
};
