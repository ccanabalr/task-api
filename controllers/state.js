"use strict";

var Task = require("../models/task");
var State = require("../models/state");
var moment = require("moment-timezone");



//Function that allows to obtain all the tasks with their states
function getStates(req, res) {

  return State.find((err, states) => {
    console.log(states);
    if (err)
      return res.status(500).send({ message: "Error getting statuses with your tasks" });

    if (!states)
      return res.status(404).send({ message: "There are no states available at the moment" });

    return res.status(200).send({ states: states });
  });

}

//Function that allows updating the status of tasks in open, in-progress, completed, archived
function updateState(req, res) {

  var update = req.body;
  var states = [];
  var errs = [];

  update.forEach(item => {
    State.findByIdAndUpdate(
      item._id,
      item,
      { new: true },
      (err, statuUpdate) => {
        
        if (err) errs.push(err);

        states.push(statuUpdate);
      }
    );
  });

  if (errs.length >= 1)
    return res.status(500).send({ message: "Failed to update state the task" });

  if (!states)
    return res
      .status(404)
      .send({ message: "The task status could not be updated" });

  return res.status(200).send({ states: states });
}

//function that allows me to generate a unique random string
function randomString(len, an) {

  an = an && an.toLowerCase();

  var str = "",
      i = 0,
      min = an == "a" ? 10 : 0,
      max = an == "n" ? 10 : 62;

  for (; i++ < len; ) {
    var r = (Math.random() * (max - min) + min) << 0;
    str += String.fromCharCode((r += r > 9 ? (r < 36 ? 55 : 61) : 48));
  }

  return str;
}

//function that allows you to create a new task in any of the open states, in progress, completed, archived
function saveTaskUpdate(req, res) {

  var idState = req.params.idState;
  var task = req.body;

  task.date = moment()
    .utcOffset("-5")
    .format("YYYY-MM-DD HH:mm");
  task._id =
    randomString(20, "a") +
    moment()
      .unix()
      .toString();


  State.findByIdAndUpdate(
    { _id: idState },
    { $push: { tasks: task } },
    { upsert: true, new: true },
    (err, response) => {
      if (err)
        return res.status(500).send({ message: "Error getting tasks" });
      if (!response)
        return res.status(404).send({ message: "There are no tasks available" });

      return res.status(200).send({ state: response });
    }
  );

}

module.exports = {
  getStates,
  updateState,
  saveTaskUpdate
};
