// const Data = require("../models/data");
const statusCodes = require("http-status-codes");

const { BadRequestError, NotFoundError } = require("../errors/index");

const getAllData = async (req, res) => {
  res.status(statusCodes.OK).json({ msg: "get all jobs" });
};

const getData = (req, res) => {
  res.status(statusCodes.OK).json({ msg: "get job" });
};

const createData = async (req, res) => {
  res.status(statusCodes.CREATED).json({ msg: "create job" });
};

const updateData = async (req, res) => {
  res.status(statusCodes.OK).json({ msg: "update job" });
};

const deleteData = async (req, res) => {
  res.status(statusCodes.OK).json({ msg: "delete job" });
};

module.exports = { getAllData, getData, createData, updateData, deleteData };
