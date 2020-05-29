const { GenerateCSV, completeTheLooks, relationTable } = require('./sdc-dataGenerator.js')

let startTime = process.hrtime();

// generate the csv for "shirts" collection
// GenerateCSV(collection, desireDataSampleSize, startTime)
// new GenerateCSV('shirts', 100, startTime);
new GenerateCSV('shirts', 3500000, startTime);

// generate the csv for "pants" collection
// GenerateCSV(collection, desireDataSampleSize, startTime)
// new GenerateCSV('pants', 100, startTime);

new GenerateCSV('pants', 3500000, startTime);

// generate the csv for "socks" collection
// GenerateCSV(collection, desireDataSampleSize, startTime)
// new GenerateCSV('socks', 100, startTime);

new GenerateCSV('socks', 3500000, startTime);

// // generate the csv for "related products" collection
// GenerateCSV(collection, desireDataSampleSize, startTime)
// new GenerateCSV('related_products', 100, startTime);

// new GenerateCSV('related_products', 10000000, startTime);

// generate the "complete the look" collection
// completeTheLooks(collection, desireDataSampleSize, productLength, startTime)
// completeTheLooks('complete_the_look', 100, 100, startTime)

completeTheLooks('complete_the_look', 1000000, 3300000, startTime)

// generate the relation table between each "complete the look" and "related product"
// relationTable(collectionName, desireDataSampleSize, relatedProductQuantity, rangeeOfRelatedProduct, startTime)
relationTable('relation_related_and_looks', 100, 100, 12, startTime);

// relationTable('relation_related_and_looks', 1000000, 12, startTime);