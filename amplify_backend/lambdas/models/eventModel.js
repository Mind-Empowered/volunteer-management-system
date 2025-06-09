"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var events_1 = require("../../types/events");
// Define Mongoose schema
var eventSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    location: { type: String },
    organizer: { type: String, required: true },
    type: { type: String, enum: Object.values(events_1.EventType), required: true },
    status: { type: String, enum: Object.values(events_1.EventStatus), default: events_1.EventStatus.UPCOMING },
    registeredUsers: { type: [mongoose_1.Schema.Types.ObjectId], ref: 'User', default: [] },
}, { timestamps: true });
// Prevent duplicate model registration in AWS Lambda cold starts
var Event = mongoose_1.default.models.Event || mongoose_1.default.model('Event', eventSchema);
exports.default = Event;
