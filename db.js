import Sequelize from "sequelize";
import dotenv from "dotenv";
dotenv.config();

export const sequelize = new Sequelize(
  process.env.DB_NAME, // Название БД
  process.env.DB_USER, // Пользователь
  process.env.DB_PASSWORD, // Пароль
  {
    dialect: "postgres",
    host: "0.0.0.0",
    port: process.env.DB_PORT,
  }
);
