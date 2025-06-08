import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import User  from '../models/userModel';
import {generateToken} from '../utils/generateToken';
import { UserRole, UserStatus } from '../../types/user';


import connectDB from '../config/db';

// Register a new user
export const registerUser = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    await connectDB(); // Ensure DB connection

    const requestBody = JSON.parse(event.body || '{}');
    const { name, email, password, phoneNumber, bloodGroup, location, skills, role } = requestBody;

    // Check if user already exists
    const userExists = await User.findOne({ email });

    if (userExists) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'User already exists' }),
      };
    }

    // Create new user
    const user = await User.create({
      name,
      email,
      password,
      phoneNumber,
      bloodGroup,
      location,
      skills: skills || [],
      role: role || UserRole.VOLUNTEER,
      status: UserStatus.PENDING, // Requires admin approval
    });

    return {
      statusCode: 201,
      body: JSON.stringify({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        status: user.status,
        message: 'Registration successful! Your account is pending approval.',
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: `Server Error: ${error instanceof Error ? error.message : 'Unknown error'}` }),
    };
  }
};

// Login user and return JWT token
export const loginUser = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    await connectDB(); // Ensure DB connection

    const requestBody = JSON.parse(event.body || '{}');
    const { email, password } = requestBody;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      if (user.status !== UserStatus.APPROVED) {
        return {
          statusCode: 403,
          body: JSON.stringify({ message: 'Your account is pending approval' }),
        };
      }

      return {
        statusCode: 200,
        body: JSON.stringify({
          _id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
          token: generateToken(user.id.toString()),
        }),
      };
    } else {
      return {
        statusCode: 401,
        body: JSON.stringify({ message: 'Invalid email or password' }),
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: `Server Error: ${error instanceof Error ? error.message : 'Unknown error'}` }),
    };
  }
};

// Get user profile
export const getUserProfile = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    await connectDB(); // Ensure DB connection

    const userId = event.requestContext.authorizer?.claims?.sub; // Extract user ID from Cognito JWT

    if (!userId) {
      return {
        statusCode: 401,
        body: JSON.stringify({ message: 'Not authorized' }),
      };
    }

    const user = await User.findById(userId).select('-password');

    if (user) {
      return {
        statusCode: 200,
        body: JSON.stringify(user),
      };
    } else {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: 'User not found' }),
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: `Server Error: ${error instanceof Error ? error.message : 'Unknown error'}` }),
    };
  }
};
