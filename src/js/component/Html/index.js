import React from 'react';

const Html = props => (
  <html>
    <head><title>My Static Site</title></head>
    <body>
      <div id="app">
        {props.children}
      </div>
      <script src="/index.js"></script>
    </body>
  </html>
);


// Html.

export default Html;
