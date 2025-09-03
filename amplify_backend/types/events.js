"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventStatus = exports.EventType = void 0;
var EventType;
(function (EventType) {
    EventType["WORKSHOP"] = "workshop";
    EventType["SEMINAR"] = "seminar";
    EventType["WEBINAR"] = "webinar";
    EventType["VOLUNTEERING"] = "volunteering";
})(EventType || (exports.EventType = EventType = {}));
var EventStatus;
(function (EventStatus) {
    EventStatus["UPCOMING"] = "upcoming";
    EventStatus["ONGOING"] = "ongoing";
    EventStatus["COMPLETED"] = "completed";
    EventStatus["CANCELED"] = "canceled";
})(EventStatus || (exports.EventStatus = EventStatus = {}));
