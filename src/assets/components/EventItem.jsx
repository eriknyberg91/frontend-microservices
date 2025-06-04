import React from 'react';
import { Link } from 'react-router-dom';

const EventItem = ({ item }) => {
  return (
    <Link to={`/events/${item.id}`} className="event-card">
      <div className="event-type-badge">Event</div>
      <div className="event-status-badge">• Active</div>

      <div className="event-image-placeholder" />

      <div className="event-datetime">
        {new Date(item.eventDate).toLocaleString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
          hour: 'numeric',
          minute: '2-digit',
        })}
      </div>

      <div className="event-title">{item.title}</div>

      <div className="event-location">📍 {item.location}</div>

      <div className="event-price">$50</div>
    </Link>
  );
};

export default EventItem;