const faker = require('faker');
const fs = require('fs');

const { maleTop, productSizeGobal } = require('./dataSet.js');

const collectionSizes = {
  shirts: 3500000
}

const shirtsCollection = fs.createWriteStream(`${__dirname}/csv-files/shirts.csv`,{flags:'w'});
shirtsCollection.write('shirt_id,shirt_name,shirt_price,shirt_sale_price,shirt_picture,shirt_description,shirt_stock,shirt_size,shirt_likes\n', 'utf8');

function writeMillionOfDataForShirt(writer, encoding, callback) {
  let i = collectionSizes.shirts;
  let shirt_id = 0;

  function write() {
    let ok = true;
    do {
      i -= 1;
      shirt_id += 1;
      let shirt_name = `Adidas ${faker.company.bsAdjective()}`;
      let shirt_price = faker.finance.amount(20, 500);
      let shirt_sale_price = Number((shirt_price - shirt_price * .15).toFixed(2));
      let shirt_picture = maleTop[faker.random.number({'min': 0, 'max': maleTop.length  - 1})];
      let shirt_description = faker.lorem.sentence();
      let shirt_stock = faker.random.number({'min': 1, 'max': 50});
      let shirt_size = productSizeGobal[i % productSizeGobal.length];
      let shirt_likes = faker.random.boolean();

      let data = `${shirt_id},${shirt_name},${shirt_price},${shirt_sale_price},${shirt_picture},${shirt_description},${shirt_stock},${shirt_size},${shirt_likes}\n`;

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

writeMillionOfDataForShirt(shirtsCollection, 'utf-8', () => {
  shirtsCollection.end();

  console.log(`Finished generating shirts.csv. Size: ${collectionSizes.shirts}`)
  let endTime = process.hrtime(startTime);
  console.log(`Execution time (hr): ${endTime[0]} sec, ${endTime[1]/1000000} ms\n`);
});