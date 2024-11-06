const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Task = sequelize.define("Task", {
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  difficulty: { type: DataTypes.STRING, allowNull: false },
  tags: {
    type: DataTypes.TEXT,
    allowNull: false,
    get() {
      return this.getDataValue("tags")
        ? JSON.parse(this.getDataValue("tags"))
        : [];
    },
    set(val) {
      this.setDataValue("tags", JSON.stringify(val));
    },
  },
  examples: {
    type: DataTypes.TEXT,
    allowNull: false,
    get() {
      return this.getDataValue("examples")
        ? JSON.parse(this.getDataValue("examples"))
        : [];
    },
    set(val) {
      this.setDataValue("examples", JSON.stringify(val));
    },
  },
  additional_materials: {
    type: DataTypes.TEXT,
    allowNull: true,
    get() {
      return this.getDataValue("additional_materials")
        ? JSON.parse(this.getDataValue("additional_materials"))
        : [];
    },
    set(val) {
      this.setDataValue("additional_materials", JSON.stringify(val));
    },
  },
  rating: { type: DataTypes.INTEGER, defaultValue: 0 },
});

module.exports = Task;
