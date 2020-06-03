const faker = require('faker');
const fs = require('fs');
const csvWriter = require('csv-write-stream');

const collectionSizes = {
  relatedProductsSize: 12000000,
  looks: 1000000
}

// function to generate relationship table between each set of "complete the look" with related product
const relationTable = async (size = 1000000, relatedDataRange, relatedProductQuantity = 12, startTime) => {
  let writer = csvWriter();

  writer.pipe(fs.createWriteStream(`${__dirname}/csv-files/relation_related_and_looks.csv`, {flags:'w'}));

  for(let i = 1; i <= size; i++) {
    for(let j = 1; j <= relatedProductQuantity; j++) {
      let ok = writer.write({
        rrl_look_id: i,
        rrl_related_id: faker.random.number({'min': 1, 'max': relatedDataRange})
      })

      if(!ok) {
        await (new Promise((resolve) => writer.once('drain', resolve)));
      }
    }
  }

  writer.end();

  console.log(`Finished generating relation_related_and_looks.csv. Size: ${size}`)
  let endTime = process.hrtime(startTime);
  console.log(`Execution time (hr): ${endTime[0]} sec, ${endTime[1]/1000000} ms\n`);
}

let startTime = process.hrtime();
relationTable(collectionSizes.looks, collectionSizes.relatedProductsSize, 12, startTime);
