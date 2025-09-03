import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import User from '../models/userModel';
import { UserStatus } from '../../types/user';
import connectDB from '../config/db';

// Get all users
export const getUsers = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    await connectDB();
    
    const users = await User.find({}).select('-password');
    
    return {
      statusCode: 200,
      body: JSON.stringify(users),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: `Server Error: ${error}` }),
    };
  }
};

// Get pending users
export const getPendingUsers = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    await connectDB();
    
    const users = await User.find({ status: UserStatus.PENDING }).select('-password');
    
    return {
      statusCode: 200,
      body: JSON.stringify(users),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: `Server Error: ${error}` }),
    };
  }
};

// Get user by ID
export const getUserById = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    await connectDB();
    
    const userId = event.pathParameters?.id; // Extract user ID from URL params
    const user = await User.findById(userId).select('-password');

    if (!user) {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: 'User not found' }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify(user),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: `Server Error: ${error}` }),
    };
  }
};
