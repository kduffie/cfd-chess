import express from 'express';
import path from 'path';
import { DataLayerInMemory } from './data-layer-impl';
import { ChessPresentationLayerImpl } from './presentation-layer';

const app = express();
const port = 3000;

const dataLayer = new DataLayerInMemory();

app.use(express.static(path.join(__dirname, '../static')));

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

const presentation = new ChessPresentationLayerImpl(dataLayer);

presentation.initialize(app);


