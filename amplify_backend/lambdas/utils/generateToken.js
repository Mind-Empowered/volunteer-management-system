"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
var jwt = require("jsonwebtoken");
var secret = process.env.JWT_SECRET || 'your-secret-key';
var generateToken = function (userId) {
    return jwt.sign({ id: userId }, secret, { expiresIn: '30d' });
};
exports.generateToken = generateToken;
