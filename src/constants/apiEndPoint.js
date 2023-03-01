export const BACKEND_URL = 'http://localhost:8000/';

export const GET_ALL_EVENTS = {
  url: 'api/events',
  method: 'GET'
};

export const GET_EVENT_BY_ID = (EventID) => ({
  url: `api/events/${EventID}`,
  method: 'GET'
});

export const UPDATE_EVENT_ON_REGISTRATION = (EventID) => ({
  url: `api/events/${EventID}`,
  method: 'PATCH'
});

export const UPDATE_EVENT_ON_BOOKMARK = (EventID) => ({
  url: `api/events/${EventID}`,
  method: 'PATCH'
});
