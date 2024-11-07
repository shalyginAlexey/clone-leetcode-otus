import { Model, DataTypes } from "sequelize";
import sequelize from "../config/db";

class Task extends Model {
  public id!: number;
  public title!: string;
  public description!: string;
  public difficulty!: string;
  public tags!: string[];
  public examples!: { input: string; output: string }[];
  public additional_materials!: string[];
  public rating!: number;
}

Task.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    difficulty: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tags: {
      type: DataTypes.TEXT,
      allowNull: false,
      get() {
        const rawValue = this.getDataValue("tags") as unknown as string;
        return JSON.parse(rawValue);
      },
      set(val: string[]) {
        this.setDataValue("tags", JSON.stringify(val));
      },
    },
    examples: {
      type: DataTypes.TEXT,
      allowNull: false,
      get() {
        const rawValue = this.getDataValue("examples") as unknown as string;
        return JSON.parse(rawValue);
      },
      set(val: { input: string; output: string }[]) {
        this.setDataValue("examples", JSON.stringify(val));
      },
    },
    additional_materials: {
      type: DataTypes.TEXT,
      allowNull: true,
      get() {
        const rawValue = this.getDataValue(
          "additional_materials"
        ) as unknown as string;
        return JSON.parse(rawValue);
      },
      set(val: string[]) {
        this.setDataValue("additional_materials", JSON.stringify(val));
      },
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Task",
  }
);

export default Task;
