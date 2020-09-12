import React from 'react';

const Link = ({ className, href, children }) => {
  // Function to prevent browser from executing
  // a full page reload by default
  const onClick = event => {
    // Support cmd/ctrl+click to open link in new tab
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    event.preventDefault();
    window.history.pushState({}, '', href);

    // Tell the route components that data,
    // specifically the url, just changed.
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;
