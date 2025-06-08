import mongoose, { Document, Schema, Model } from 'mongoose';
import { EventType, EventStatus } from '../../types/events';

// Define base event structure
export interface IEvent {
  title: string;
  description: string;
  date: Date;
  location?: string;
  organizer: string;
  type: EventType;
  status: EventStatus;
  registeredUsers?: mongoose.Types.ObjectId[];
}

// Extend document interface for Mongoose methods
export interface IEventDocument extends IEvent, Document {}

// Define Mongoose schema
const eventSchema = new Schema<IEventDocument>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    location: { type: String },
    organizer: { type: String, required: true },
    type: { type: String, enum: Object.values(EventType), required: true },
    status: { type: String, enum: Object.values(EventStatus), default: EventStatus.UPCOMING },
    registeredUsers: { type: [Schema.Types.ObjectId], ref: 'User', default: [] },
  },
  { timestamps: true }
);

// Prevent duplicate model registration in AWS Lambda cold starts
const Event = mongoose.models.Event as Model<IEventDocument> || mongoose.model<IEventDocument>('Event', eventSchema);
export default Event;
