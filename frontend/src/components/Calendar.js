import React, { useState, useEffect } from 'react';
import { useCalendarApp, ScheduleXCalendar } from '@schedule-x/react';
import {
  createViewDay,
  createViewMonthAgenda,
  createViewMonthGrid,
  createViewWeek,
} from '@schedule-x/calendar';
import { createEventsServicePlugin } from '@schedule-x/events-service';
import '@schedule-x/theme-default/dist/index.css';
import '../css/calendar.css';
import { createEventModalPlugin } from '@schedule-x/event-modal'
import { createDragAndDropPlugin } from '@schedule-x/drag-and-drop'

function Calendar() {
  const eventsService = useState(() => createEventsServicePlugin())[0];
  const eventsModal = createEventModalPlugin()
  const eventsDragAnddrop =createDragAndDropPlugin();


  const calendar = useCalendarApp({
    views: [createViewDay(), createViewWeek(), createViewMonthGrid(), createViewMonthAgenda()],
    events: [
      {
        id: '1',
        title: 'Event 1',
        start: '2025-03-11 13:21',
        end: '2025-03-11 14:00',
        description: 'This event was booked by Mosh'
      },
    ],
    selectedDate:  '2025-11-03',
    plugins: [
      eventsService,
      eventsModal,
      eventsDragAnddrop
    ],
  });

  useEffect(() => {
    // Get all events
    eventsService.getAll();
  }, []);

  return (
    <div className="sx-react-calendar-wrapper">
      <ScheduleXCalendar calendarApp={calendar} />
    </div>
  );
}

export default Calendar;
