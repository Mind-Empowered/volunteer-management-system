"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.notFound = void 0;
// 404 Not Found error handler
var notFound = function () {
    return {
        statusCode: 404,
        body: JSON.stringify({ message: 'Not Found' }),
    };
};
exports.notFound = notFound;
// General error handler
var errorHandler = function (error) {
    return {
        statusCode: 500,
        body: JSON.stringify({
            message: error.message,
            stack: process.env.NODE_ENV === 'production' ? null : error.stack,
        }),
    };
};
exports.errorHandler = errorHandler;
