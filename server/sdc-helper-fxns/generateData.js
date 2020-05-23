const { GenerateCSV } = require('./sdc-dataGenerator.js')

let startTime = process.hrtime();

// generate the csv for "shirts" collection
new GenerateCSV('shirts', ['id', 'name', 'price', 'sale_price', 'picture', 'description', 'stock', 'size', 'likes'], 100, startTime);
// new GenerateCSV('shirts', ['id', 'name', 'price', 'sale_price', 'picture', 'description', 'stock', 'size', 'likes'], 3500000, startTime);

// generate the csv for "pants" collection
new GenerateCSV('pants', ['id', 'name', 'price', 'sale_price', 'picture', 'description', 'stock', 'size', 'likes'], 100, startTime);
// new GenerateCSV('pants', ['id', 'name', 'price', 'sale_price', 'picture', 'description', 'stock', 'size', 'likes'], 3500000, startTime);

// generate the csv for "socks" collection
new GenerateCSV('socks', ['id', 'name', 'price', 'sale_price', 'picture', 'description', 'stock', 'size', 'likes'], 100, startTime);
// new GenerateCSV('socks', ['id', 'name', 'price', 'sale_price', 'picture', 'description', 'stock', 'size', 'likes'], 3500000, startTime);

// // generate the csv for "related" collection
new GenerateCSV('related', ['id', 'name', 'price', 'sale_price', 'picture', 'description', 'stock', 'size', 'likes'], 100, startTime);
// new GenerateCSV('related', ['id', 'name', 'price', 'sale_price', 'picture', 'description', 'stock', 'size', 'likes'], 5000000, startTime);