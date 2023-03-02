/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import * as React from 'react';
import './header.css';
import { useNavigate } from 'react-router-dom';
import { HOME_ROUTE } from '../../constants/routes';
import ThemeContext from '../../context/PageThemeContext';

export default function Header() {
  const navigate = useNavigate();
  const { theme } = React.useContext(ThemeContext);
  return (
    <div className={`header ${theme}`}>
      <h1 onClick={() => { navigate(HOME_ROUTE).Refresh(); }}>
        EVENTIFY
      </h1>
    </div>
  );
}
