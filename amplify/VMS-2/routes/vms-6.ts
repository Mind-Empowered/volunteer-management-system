import express, { Request, Response } from "express";
import Event from "../models/eventRegister";

const router = express.Router();

// 🟢 Create a new event (Admin Only)
router.post("/", async (req: Request, res: Response) => {
    try {
        const { eventId, name, address, state, city, dateTime } = req.body;

        if (!eventId || !name || !address || !state || !city || !dateTime) {
            return res.status(400).json({ error: "All required fields must be provided" });
        }

        const newEvent = new Event(req.body);
        const savedEvent = await newEvent.save();
        console.log("✅ Event saved successfully:", savedEvent);
        res.status(201).json(savedEvent);
    } catch (error: any) {
        console.error("❌ Error saving event:", error.message);
        if (error.code === 11000) {
            return res.status(400).json({ error: "Event ID must be unique" });
        }
        res.status(500).json({ error: "Internal server error" });
    }
});

// 🟢 Get all events
router.get("/", async (_req: Request, res: Response) => {
    try {
        const events = await Event.find();
        console.log(`✅ Fetched ${events.length} events`);
        res.status(200).json(events);
    } catch (error: any) {
        console.error("❌ Error fetching events:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
});

// 🔵 Update an event (Admin Only)
router.patch("/:eventId", async (req: Request, res: Response) => {
    try {
        const { eventId } = req.params;
        const updateData = req.body;

        const updatedEvent = await Event.findOneAndUpdate({ eventId }, updateData, { new: true });

        if (!updatedEvent) {
            return res.status(404).json({ error: "Event not found" });
        }

        console.log("✅ Event updated successfully:", updatedEvent);
        res.status(200).json(updatedEvent);
    } catch (error: any) {
        console.error("❌ Error updating event:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
});

export default router;
