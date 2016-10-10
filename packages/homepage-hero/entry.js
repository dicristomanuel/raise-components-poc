import React from 'react';
import Root from './components/Root';
import ReactDOMServer from 'react-dom/server';

module.exports = function render(locals, callback) {
  const { data } = locals;
  callback(null, ReactDOMServer.renderToStaticMarkup(<Root {...data} />));
};
