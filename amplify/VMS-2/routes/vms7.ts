import express, { Request, Response } from "express";
import Event from "../models/eventRegister";
import EventRegistration from "../models/userRegister";

const router = express.Router();

// 🟢 GET: View All Events
router.get("/", async (_req: Request, res: Response) => {
    try {
        const events = await Event.find();
        res.status(200).json(events);
    } catch (error: any) {
        console.error("❌ Error fetching events:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
});

// 🟢 POST: Register for an Event
router.post("/:eventId/register", async (req: Request, res: Response) => {
    try {
        const { eventId } = req.params;
        const { volunteerId } = req.body; // Volunteer ID should be sent in request body

        // Check if event exists
        const event = await Event.findById(eventId);
        if (!event) {
            return res.status(404).json({ error: "Event not found" });
        }

        // Check if volunteer is already registered
        const existingRegistration = await EventRegistration.findOne({ volunteer: volunteerId, event: eventId });
        if (existingRegistration) {
            return res.status(400).json({ error: "Volunteer already registered for this event" });
        }

        // Register the volunteer
        const newRegistration = new EventRegistration({ volunteer: volunteerId, event: eventId });
        await newRegistration.save();

        res.status(201).json({ message: "Volunteer registered successfully" });
    } catch (error: any) {
        console.error("❌ Error registering for event:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
});

export default router;
