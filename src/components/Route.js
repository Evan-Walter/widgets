import { useState, useEffect } from 'react';

// No need to import React b/c no jsx
const Route = ({ path, children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', onLocationChange);

    return () => {
      window.removeEventListener('popstate', onLocationChange);
    };
  }, []);

  return currentPath === path ? children : null;
};

// Set up route handler to listen for
// the event that dispatched from the Link
// component, to communicate that data, specifically
// the url, just changed.

export default Route;
