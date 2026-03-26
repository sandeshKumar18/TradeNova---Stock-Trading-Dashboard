const { model } = require("mongoose");

const {PositionsSchema} = require("../Schemas/PositionsSchema");

const PositionModel = model("position" , PositionsSchema);

module.exports =  {PositionModel};