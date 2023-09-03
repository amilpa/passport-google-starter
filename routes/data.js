const express = require("express");
const router = express.Router();

const isLoggedIn = require("../middlewares/auth");

const {
  getAllData,
  getData,
  createData,
  updateData,
  deleteData,
} = require("../controllers/data");

//get record
router.get("/", isLoggedIn, getAllData);
router.get("/:id", isLoggedIn, getData);

//change record
router.post("/", isLoggedIn, createData);
router.patch("/:id", isLoggedIn, updateData);

//delete record
router.delete("/:id", isLoggedIn, deleteData);

module.exports = router;
