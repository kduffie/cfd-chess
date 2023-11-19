import express from 'express';
import { DataLayer } from './data-layer';

export class ChessPresentationLayerImpl {
  private dataLayer: DataLayer

  constructor(dataLayer: DataLayer) {
    this.dataLayer = dataLayer;
  }

  initialize(app: express.Application) {
    app.get('/', (req, res) => {
      res.contentType('text/html');
      const html = `
    <!doctype html>
    <html lang="en">
      <head>
        <title>Chess</title>
        <link rel="stylesheet" href="/styles.css">
      </head>
      <body>
        <h1>Hello World!</h1>
        <p>There are ${this.dataLayer.getState().moves.length} moves so far.</p>
        <p>Todo:  call business logic to get state and display it here.</p>
      </body>
    </html>
      `;
      res.send(html);
    });
  }
}
