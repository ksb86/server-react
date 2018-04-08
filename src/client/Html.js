/**
 * HTML
 * This html.js file acts as a template that we insert all our generated
 * application code into before sending it to the client as regular HTML.
 * Note we're returning a template string from this function.
 */
const Html = ({title, body, cssPath, jsPath}) => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
      <link rel="stylesheet" href="${cssPath}">
    </head>
    <body>
      <div id="root">${body}</div>
      <script src="${jsPath}"></script>
    </body>
  </html>
`;

export default Html;
