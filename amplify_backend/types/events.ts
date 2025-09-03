export enum EventType {
    WORKSHOP = 'workshop',
    SEMINAR = 'seminar',
    WEBINAR = 'webinar',
    VOLUNTEERING = 'volunteering',
  }
  
  export enum EventStatus {
    UPCOMING = 'upcoming',
    ONGOING = 'ongoing',
    COMPLETED = 'completed',
    CANCELED = 'canceled',
  }
  
  export interface IEvent {
    title: string;
    description: string;
    date: Date;
    location?: string;
    organizer: string;
    type: EventType;
    status: EventStatus;
    registeredUsers?: string[];
  }
  