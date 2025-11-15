import React from 'react';
import { renderToString } from 'react-dom/server';

export { render };
export { passToClient };

const passToClient = ['pageProps', 'documentProps'];

async function render(pageContext) {
  const { Page, pageProps } = pageContext;
  const pageHtml = renderToString(React.createElement(Page, pageProps));
  
  return {
    documentHtml: `<!DOCTYPE html>
      <html lang="de">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>${pageContext.documentProps?.title || 'Pflegedienst Dreieich'}</title>
          <meta name="description" content="${pageContext.documentProps?.description || ''}" />
        </head>
        <body>
          <div id="react-root">${pageHtml}</div>
        </body>
      </html>`
  };
}