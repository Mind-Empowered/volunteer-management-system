import { APIGatewayProxyHandler } from 'aws-lambda';
import dotenv from 'dotenv';
import connectToDatabase from '../config/db';
import {
  getUsersHandler,
  getPendingUsersHandler,
  getVolunteerDirectoryHandler,
  getUserByIdHandler,
  updateUserHandler,
  deleteUserHandler,
  updateUserStatusHandler,
} from './handlers/userHandlers';
import {
  registerUserHandler,
  loginUserHandler,
  getUserProfileHandler,
  updateUserProfileHandler,
} from './handlers/authHandlers';
import {
  createEventHandler,
  getEventsHandler,
  getEventByIdHandler,
  updateEventHandler,
  deleteEventHandler,
  registerForEventHandler,
  unregisterFromEventHandler,
} from './handlers/eventHandlers';

// Load environment variables
dotenv.config();

// Health check Lambda function
export const healthCheckHandler: APIGatewayProxyHandler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'API is running...' }),
  };
};

// Connect to database on cold start
connectToDatabase();

// Export other handlers as named exports (already done in respective handler files)
