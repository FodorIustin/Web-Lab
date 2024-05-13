import {sequlize} from './db.js';

import {Product} from './models/product.model.js';
sequlize.sync({force: true}).then(() => {
  console.log("All models were synchronized successfully.");
  process.exit(0);
});