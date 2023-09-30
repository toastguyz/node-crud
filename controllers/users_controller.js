const express = require("express");
const service = require("../services/user_service");
const router = express.Router();

// http://localhost:3000/api/users/
router.get("/", async (req, res) => {
  const users = await service.getAllUsers();
  res.send(users);
});

// http://localhost:3000/api/users/:id
router.get("/:id", async (req, res) => {
  const user = await service.getUserById(req.params.id);

  if (user.length == 0) {
    res
      .status(404)
      .send("No records found for the given userId : " + req.params.id);
  } else {
    res.send(user);
  }
});

// http://localhost:3000/api/users/:id
router.delete("/:id", async (req, res) => {
  const affectedRows = await service.deleteUserById(req.params.id);

  if (affectedRows == 0) {
    res
      .status(404)
      .send("No records found for the given userId : " + req.params.id);
  } else {
    res.send("User deleted successfully.");
  }
});

// http://localhost:3000/api/users/
router.post("/", async (req, res) => {
  await service.addOrEditUser(req.body);
  res.status(201).send("Created successfully.");
});

// http://localhost:3000/api/users/:id
router.put("/:id", async (req, res) => {
  const affectedRows = await service.addOrEditUser(req.body, req.params.id);

  if (affectedRows == 0) {
    res
      .status(404)
      .send("No records found for the given userId : " + req.params.id);
  } else {
    res.send("Updated successfully.");
  }
});

module.exports = router;
