import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/db";

interface UserAttributes {
  id: number;
  username: string;
  password: string;
  email: string;
  role: string;
  rating: number;
}

interface UserCreationAttributes
  extends Optional<UserAttributes, "id" | "role" | "rating"> {}

class User
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  public id!: number;
  public username!: string;
  public password!: string;
  public email!: string;
  public role!: string;
  public rating!: number;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: "user",
    },
    rating: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    modelName: "User",
  }
);

export default User;
