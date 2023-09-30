const db = require("../db");

module.exports.getAllUsers = async () => {
  const [records] = await db.query("SELECT * FROM user_info");

  return records;
};

module.exports.getUserById = async (id) => {
  const [record] = await db.query("SELECT * FROM user_info where id = ?", [id]);

  return record;
};

module.exports.deleteUserById = async (id) => {
  const [record] = await db.query("DELETE FROM user_info where id = ?", [id]);

  return record.affectedRows;
};

// STORED PROCEDURES
module.exports.addOrEditUser = async (obj, id = 0) => {
  const [{ affectedRows }] = await db.query("CALL usp_add_or_edit_user(?, ?, ?)", [id, obj.name, obj.email]);
  
  return affectedRows;
};
