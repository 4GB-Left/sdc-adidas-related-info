const faker = require('faker');
const fs = require('fs');

const { maleBottom, productSizeGobal } = require('./dataSet.js');

const collectionSizes = {
  pants: 3500000
}

const pantsCollection = fs.createWriteStream(`${__dirname}/csv-files/pants.csv`,{flags:'w'});
pantsCollection.write('id,name,price,sale_price,picture,category,description,stock,size,likes\n', 'utf8');

function writeMillionOfDataForPants(writer, encoding, callback) {
  let i = collectionSizes.pants;
  let id = 0;

  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      let name = `Adidas ${faker.company.bsAdjective()}`;
      let price = faker.finance.amount(20, 500);
      let sale_price = Number((price - price * .15).toFixed(2));
      let picture = maleBottom[faker.random.number({'min': 0, 'max': maleBottom.length  - 1})];
      let description = faker.lorem.sentence();
      let stock = faker.random.number({'min': 1, 'max': 50});
      let size = productSizeGobal[i % productSizeGobal.length];
      let likes = faker.random.boolean();

      let data = `${id},${name},${price},${sale_price},${picture},${description},${stock},${size},${likes}\n`;

      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);

    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', write);
    }
  }

  write();
}

let startTime = process.hrtime();

writeMillionOfDataForPants(pantsCollection, 'utf-8', () => {
  pantsCollection.end();

  console.log(`Finished generating pants.csv. Size: ${collectionSizes.pants}`)
  let endTime = process.hrtime(startTime);
  console.log(`Execution time (hr): ${endTime[0]} sec, ${endTime[1]/1000000} ms\n`);
});