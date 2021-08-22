import React from 'react';

import './Layout.styles.js';

function Layout({ children }) {
  return <main className="container">{children}</main>;
}

export default Layout;
