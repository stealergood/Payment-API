import { db } from "sequelize";
import db from "../config/dbconfig.js";

const User = db.define("User", {
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  username: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  created_at: DataTypes.DATE,
});

const Product = db.define("Product", {
  product_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  product_name: DataTypes.STRING,
  description: DataTypes.TEXT,
  price: DataTypes.DECIMAL,
  availability: DataTypes.STRING,
  created_at: DataTypes.DATE,
});

const Order = db.define("Order", {
  order_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  user_id: DataTypes.INTEGER,
  product_id: DataTypes.INTEGER,
  quantity: DataTypes.INTEGER,
  total_price: DataTypes.DECIMAL,
  status: DataTypes.STRING,
  created_at: DataTypes.DATE,
});

const Payment = db.define("Payment", {
  payment_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  order_id: DataTypes.INTEGER,
  payment_gateway: DataTypes.STRING,
  transaction_id: DataTypes.STRING,
  amount: DataTypes.DECIMAL,
  status: DataTypes.STRING,
  created_at: DataTypes.DATE,
});

const Transaction = db.define("Transaction", {
  transaction_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  user_id: DataTypes.INTEGER,
  order_id: DataTypes.INTEGER,
  payment_id: DataTypes.INTEGER,
  transaction_type: DataTypes.STRING,
  amount: DataTypes.DECIMAL,
  description: DataTypes.TEXT,
  created_at: DataTypes.DATE,
});

const Log = db.define("Log", {
  log_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  user_id: DataTypes.INTEGER,
  action: DataTypes.STRING,
  description: DataTypes.TEXT,
  created_at: DataTypes.DATE,
});

// Define Foreign Key associations
Order.belongsTo(User, { foreignKey: "user_id" });
Order.belongsTo(Product, { foreignKey: "product_id" });
Payment.belongsTo(Order, { foreignKey: "order_id" });
Transaction.belongsTo(User, { foreignKey: "user_id" });
Transaction.belongsTo(Order, { foreignKey: "order_id" });
Transaction.belongsTo(Payment, { foreignKey: "payment_id" });
Log.belongsTo(User, { foreignKey: "user_id" });

export { User, Product, Order, Payment, Transaction, Log };