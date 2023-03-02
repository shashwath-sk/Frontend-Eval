/* eslint-disable max-len */
import * as React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import makeRequest from '../../utils/makeRequest';
import { Event } from '../../components';
import { GET_EVENT_BY_ID, UPDATE_EVENT_ON_REGISTRATION, UPDATE_EVENT_ON_BOOKMARK } from '../../constants/apiEndPoint';
import './eventPage.css';

export default function EventPage() {
  const [event, setEvent] = React.useState();
  const [isRegistered, setIsRegistered] = React.useState();
  const [isBookmarked, setIsBookmarked] = React.useState();

  const navigate = useNavigate();
  const { id } = useParams();
  React.useEffect(() => {
    makeRequest(GET_EVENT_BY_ID(id), navigate, {}).then((response) => {
      setEvent(response);
      setIsRegistered(response.isRegistered);
      setIsBookmarked(response.isBookmarked);
    });
  }, []);

  const handleBookmark = async () => {
    await makeRequest(UPDATE_EVENT_ON_BOOKMARK(event.id), navigate, {
      data: { isBookmarked: !isBookmarked }
    });
    setIsBookmarked(!isBookmarked);
  };

  const handleRegister = async () => {
    await makeRequest(UPDATE_EVENT_ON_REGISTRATION(event.id), navigate, {
      data: { isRegistered: !isRegistered }
    });
    setIsRegistered(!isRegistered);
  };
  return event ? (
    <div className="home-containers">
      <div className="events-container">
        <Event key={event.id} Event={event} handleBookmark={handleBookmark} handleRegister={handleRegister} isRegistered={isRegistered} isBookmarked={isBookmarked} />
      </div>

    </div>
  )
    : (
      <div>
        <p>Loading...</p>
      </div>
    );
}
