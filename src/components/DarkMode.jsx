import React, { useState } from 'react';

const DarkModeButton = ({ setDarkMode }) => {
  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div>
      <button onClick={toggleDarkMode}>
        {darkMode ? 'Desactivar modo oscuro' : 'Activar modo oscuro'}
      </button>
    </div>
  );
};

export default DarkModeButton;