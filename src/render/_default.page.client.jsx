import React from 'react';
import { hydrateRoot } from 'react-dom/client';

export { render };

async function render(pageContext) {
  const { Page, pageProps } = pageContext;
  const page = React.createElement(Page, pageProps);
  const container = document.getElementById('react-root');
  
  if (!container) {
    throw new Error('DOM element #react-root not found');
  }
  
  hydrateRoot(container, page);
}