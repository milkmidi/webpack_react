const express = require('express');
const path = require('path');
// const compression = require('compression');

// ...
// import some new stuff
import React from 'react';
// we'll use this to render our app to an html string
import { renderToString } from 'react-dom/server';
// and these to match the url to routes and then render
import { match, RouterContext, StaticRouter } from 'react-router-dom';
import routes from './src/js/routes';


const app = express();

const context = {};

const markup = renderToString(
  <StaticRouter
    location={'/'}
    context={context}
  >
    <App/>
  </StaticRouter>,
);
// app.use(compression());

// serve our static stuff like index.css
// app.use(express.static(path.join(__dirname, 'public')));


// send all requests to index.html so browserHistory works
function renderPage(appHtml) {
  return `
    <!doctype html public="storage">
    <html>
    <meta charset=utf-8/>
    <title>My First React Router App</title>
    <link rel=stylesheet href=/index.css>
    <div id=app>${appHtml}</div>
    <script src="/bundle.js"></script>
   `;
}
app.get('*', (req, res) => {
  // match the routes to the url
  match({ routes, location: req.url }, (err, redirect, props) => {
    // `RouterContext` is what the `Router` renders. `Router` keeps these
    // `props` in its state as it listens to `browserHistory`. But on the
    // server our app is stateless, so we need to use `match` to
    // get these props before rendering.
    console.log(props);
    const appHtml = renderToString(<RouterContext {...props}/>);

    // dump the HTML into a template, lots of ways to do this, but none are
    // really influenced by React Router, so we're just using a little
    // function, `renderPage`
    res.send(renderPage(appHtml));
  });
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Production Express server running at localhost:${PORT}`);
});
