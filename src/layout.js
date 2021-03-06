import serialize from "serialize-javascript";

/**
 * HTML
 * This html.js file acts as a template that we insert all our generated
 * application code into before sending it to the client as regular HTML.
 * Note we're returning a template string from this function.
 */
const Layout = ({title, body, cssPath, jsPath, data}) => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
      <link rel="stylesheet" href="${cssPath}">
      <script>window.data = ${serialize(data)}</script>
      <script src="${jsPath}" defer></script>
    </head>
    <body>
      <div id="root">${body}</div>
    </body>
  </html>
`;

export default Layout;
