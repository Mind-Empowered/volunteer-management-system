import { APIGatewayProxyResult } from 'aws-lambda';

// 404 Not Found error handler
export const notFound = (): APIGatewayProxyResult => {
  return {
    statusCode: 404,
    body: JSON.stringify({ message: 'Not Found' }),
  };
};

// General error handler
export const errorHandler = (error: Error): APIGatewayProxyResult => {
  return {
    statusCode: 500,
    body: JSON.stringify({
      message: error.message,
      stack: process.env.NODE_ENV === 'production' ? null : error.stack,
    }),
  };
};
