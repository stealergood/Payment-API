import { Sequelize } from "sequelize";

const url = process.env.DATABASE_URL;
const urlParts = url.match(/mysql:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/);

const username = urlParts[1];
const password = urlParts[2];
const host = urlParts[3];
const port = urlParts[4];
const database_name = urlParts[5];

const db = new Sequelize(database_name, username, password, {
    host: host,
    port: port,
    dialect: 'mysql' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});

export default db;