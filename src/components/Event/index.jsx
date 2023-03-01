/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import * as React from 'react';
import './event.css';
import { useNavigate } from 'react-router-dom';
import { getFormattedDateFromUtcDate } from '../../utils/common';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Events({
  Event, handleBookmark, handleRegister, isBookmarked, isRegistered
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/events/${Event.id}`);
  };

  return (
    <div className="event-container" onClick={handleClick}>
      <div className="img-container">
        <img className="event-img" src={Event.imgUrl} alt={Event.name} />
      </div>
      <div className="event-info">
        <p className="event-title">{Event.name}</p>
        <p className="event-description">{Event.description}</p>
        <p>
          <span>VENUE: </span>
          {Event.venue}
        </p>
        <p>
          <span>DATE: </span>
          {getFormattedDateFromUtcDate(Event.datetime)}

        </p>
        <div className="event-user-choice">

          <p>
            <i className="fa fa-chevron-up" onClick={handleRegister} />
            {isRegistered ? 'REGISTERED' : 'RESGISTER'}
          </p>
          {Event.areSeatsAvailable ? (
            <p>
              <i className="fa fa-bookmark" onClick={handleBookmark} />
              {isBookmarked ? 'BookMarked' : 'BookMark'}
            </p>
          )
            : (
              <p>
                <i className="fa fa-bookmark" onClick={handleBookmark} />
                No seats available
              </p>
            )}
        </div>
      </div>
    </div>
  );
}
