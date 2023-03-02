/* eslint-disable jsx-a11y/control-has-associated-label */
import * as React from 'react';
import './footer.css';
import ThemeContext from '../../context/PageThemeContext';

export default function Footer() {
  const { theme, setTheme } = React.useContext(ThemeContext);
  const [currentTheme, setCurrentTheme] = React.useState(theme);

  const handleSaveTheme = () => {
    setTheme(currentTheme);
  };

  const handleChangeTheme = (newTheme) => {
    setCurrentTheme(newTheme);
  };
  return (
    <div className={`footer ${theme}`}>
      <dv className="footer-container">
        <div className="theme-container">
          <h1>
            THEME
          </h1>
          <div className="btn-container">
            {theme !== 'theme-purple' && <button type="button" className="btn theme-purple" onClick={() => { handleChangeTheme('theme-purple'); }} />}
            { theme !== 'theme-blue' && <button type="button" className="btn theme-blue" onClick={() => { handleChangeTheme('theme-blue'); }} />}
            {theme !== 'theme-gray' && <button type="button" className="btn theme-gray" onClick={() => { handleChangeTheme('theme-gray'); }} />}
            {theme !== 'theme-black' && <button type="button" className="btn theme-black" onClick={() => { handleChangeTheme('theme-black'); }} />}
          </div>
        </div>
        <div>
          {theme !== currentTheme && <button type="button" className="save-theme" onClick={handleSaveTheme}>SAVE THEME</button>}

        </div>
      </dv>
    </div>
  );
}
