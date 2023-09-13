const express = require("express");
const {
  fetchOrdersByUser,
  createOrder,
  updateOrder,
  deleteOrder,
  fetchAllOrders,
} = require("../controller/Order");
const router = express.Router();

router
  .get("/own/", fetchOrdersByUser)
  .post("/", createOrder)
  .patch("/:id", updateOrder)
  .delete("/:id", deleteOrder)
  .get("/", fetchAllOrders);

exports.router = router;
