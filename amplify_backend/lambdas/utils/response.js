"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorResponse = exports.formatResponse = void 0;
var formatResponse = function (statusCode, body) {
    return {
        statusCode: statusCode,
        body: JSON.stringify(body),
    };
};
exports.formatResponse = formatResponse;
var errorResponse = function (message, statusCode) {
    if (statusCode === void 0) { statusCode = 500; }
    return {
        statusCode: statusCode,
        body: JSON.stringify({ error: message }),
    };
};
exports.errorResponse = errorResponse;
