"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const promise_1 = __importDefault(require("mysql2/promise"));
const queryUtils_1 = require("./queryUtils");
dotenv_1.default.config();
const conn = promise_1.default.createPool({
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    port: Number(process.env.MYSQLPORT || 3306)
});
if (['dev', 'development'].includes(process.env.NODE_ENV || 'development')) {
    const dropDatabase = (0, queryUtils_1.readQueries)('dropDatabase.sql');
    const createDatabase = (0, queryUtils_1.readQueries)('createDatabase.sql');
    (0, queryUtils_1.executeQueries)(conn, dropDatabase).then(() => (0, queryUtils_1.executeQueries)(conn, createDatabase));
}
exports.default = conn;
