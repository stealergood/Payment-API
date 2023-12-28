import { Sequelize } from "sequelize";
import db from "../config/dbconfig.js";

const User = db.define('customer', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    orderid: {
        type: Sequelize.STRING
    },
    username: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    alamat: {
        type: Sequelize.STRING
    },
    phone: {
        type: Sequelize.INTEGER
    },
});

const Order =db.define('order', {
    orderid: {
        type: Sequelize.STRING
    },
    custid: {
        type: Sequelize.INTEGER,
        references: {
            model: User,
            key: 'id'
        }
    },
    productid: {
        type: Sequelize.INTEGER,
        references: {
            model: Product,
            key: 'productid'
        }
    },
})

const Product = db.define('product', {
    productid: {
        type: Sequelize.INTEGER
    },
    name: {
        type: Sequelize.STRING
    },
    harga: {
        type: Sequelize.INTEGER
    }
});

export { User, Order, Product };