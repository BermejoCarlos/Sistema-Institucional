import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export const StateProvider = ({ children }) => {

  // Login data
  const [adminAuthenticated, setAdminAuthenticated] = useState(false);
  const [athleteAuthenticated, setAthleteAuthenticated] = useState(false);
  const [adminData, setAdminData] = useState(null);
  const [athleteData, setAthleteData] = useState(null);


  // state of the theme
  const [themeColor, setThemeColor] = useState('#03C9D7');
  const [themeMode, setThemeMode] = useState('Light');


  // state of the buttons
  const [showMenu, setShowMenu] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [themeSettings, setThemeSettings] = useState(false);

  const values = {
    adminAuthenticated, setAdminAuthenticated,
    athleteAuthenticated, setAthleteAuthenticated,
    adminData, setAdminData,
    athleteData, setAthleteData,

    themeColor, setThemeColor,
    themeMode, setThemeMode,

    showMenu, setShowMenu,
    showSidebar, setShowSidebar,
    themeSettings, setThemeSettings
  }

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider value={values}>{children}</StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);