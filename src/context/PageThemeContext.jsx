import React from 'react';

const ThemeContext = React.createContext({
  theme: 'theme-black',
  setTheme: () => {}
});

export default ThemeContext;
