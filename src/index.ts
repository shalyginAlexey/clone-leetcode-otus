import "dotenv/config";
import express from "express";
import sequelize from "./config/db";
import authRoutes from "./routes/authRoutes";
import taskRoutes from "./routes/taskRoutes";

const app = express();
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(Number(PORT), () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

export default app;
