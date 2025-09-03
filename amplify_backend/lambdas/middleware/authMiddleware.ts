import { APIGatewayProxyEvent } from 'aws-lambda';
import * as jwt from 'jsonwebtoken';
import User from '../models/userModel';
import { UserRole, UserStatus } from '../../types/user';

const secret = process.env.JWT_SECRET || 'your-secret-key';

// Extract and verify user token from API Gateway headers
export const getUserFromToken = async (event: APIGatewayProxyEvent) => {
  try {
    const authHeader = event.headers.Authorization || event.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return null;
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, secret) as { id: string };

    if (!decoded.id) {
      return null;
    }

    const user = await User.findById(decoded.id).select('-password');
    return user || null;
  } catch (error) {
    return null;
  }
};

// Check if user is an admin
export const requireAdmin = async (event: APIGatewayProxyEvent) => {
  const user = await getUserFromToken(event);
  
  if (!user || user.role !== UserRole.ADMIN) {
    throw new Error('Not authorized as admin');
  }

  return user;
};

// Check if user is a volunteer
export const requireVolunteer = async (event: APIGatewayProxyEvent) => {
  const user = await getUserFromToken(event);
  
  if (!user || user.role !== UserRole.VOLUNTEER) {
    throw new Error('Not authorized as volunteer');
  }

  return user;
};
