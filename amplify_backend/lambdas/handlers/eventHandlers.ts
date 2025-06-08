import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import Event from '../models/eventModel';
import User from '../models/userModel';
import { EventStatus } from '../../types/events';
import mongoose from 'mongoose';
import connectDB from '../config/db';

// Create a new event
export const createEvent = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    await connectDB();
    
    const requestBody = JSON.parse(event.body || '{}');
    const { title, description, location, startDate, endDate, status, maxVolunteers, skills } = requestBody;
    const userId = event.requestContext.authorizer?.claims?.sub; // Extract user ID from Cognito JWT

    if (!userId) {
      return { statusCode: 401, body: JSON.stringify({ message: 'Not authorized' }) };
    }

    const newEvent = await Event.create({
      title,
      description,
      location,
      startDate,
      endDate,
      status: status || EventStatus.UPCOMING,
      maxVolunteers,
      skills: skills || [],
      createdBy: userId,
      registeredVolunteers: [],
    });

    return { statusCode: 201, body: JSON.stringify(newEvent) };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ message: `Server Error: ${error}` }) };
  }
};
