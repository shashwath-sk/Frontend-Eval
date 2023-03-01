/* eslint-disable max-len */
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import makeRequest from '../../utils/makeRequest';
import { FilterAndSearch, Event } from '../../components';
import { GET_ALL_EVENTS } from '../../constants/apiEndPoint';
import './HomePage.css';

export default function HomePage() {
  const [Events, setEvents] = React.useState();
  // const [Events2, setEvents2] = React.useState();
  const navigate = useNavigate();
  const [filters, setFilters] = React.useState();
  const [searchBy, setSearchBy] = React.useState();

  React.useEffect(() => {
    makeRequest(GET_ALL_EVENTS, navigate).then((response) => (
      setEvents(response)
    ));
  }, []);

  React.useEffect(() => {
    if (filters) {
      const filteredEvent = Events.filter((event) => event[filters] === true);
      setEvents(filteredEvent);
    }
  }, [filters]);

  React.useEffect(() => {
    if (searchBy) {
      const searchdata = Events.filter((event) => event.name.toLowerCase().includes(searchBy));
      setEvents(searchdata);
    }
  }, [filters]);

  return Events ? (
    <div className="home-container">
      <FilterAndSearch setFilters={setFilters} setSearchBy={setSearchBy} />
      <div className="events-container">
        {Events.map((event) => (
          <Event key={event.id} Event={event} />
        ))}
      </div>

    </div>
  )
    : (
      <div>
        <p>Loading...</p>
      </div>
    );
}
