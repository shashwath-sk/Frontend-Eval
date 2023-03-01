// eslint-disable-next-line import/no-unresolved
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import * as React from 'react';
import {
  HomePage, PageNotFound, ErroPage, EventPage
} from './pages';
import { HOME_ROUTE, ERROR_ROUTE, EVENT_ROUTE } from './constants/routes';
import { Header, Footer } from './components';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={HOME_ROUTE} element={<HomePage />} />
          <Route path={EVENT_ROUTE} element={<EventPage />} />
          <Route path={ERROR_ROUTE} element={<ErroPage />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
