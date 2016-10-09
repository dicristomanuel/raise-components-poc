import React from 'react';
import Root from './components/Root';
import ReactDOMServer from 'react-dom/server';
import data from './data';

module.exports = function render(locals, callback) {
  callback(null, ReactDOMServer.renderToStaticMarkup(<Root {...data} />));
};
