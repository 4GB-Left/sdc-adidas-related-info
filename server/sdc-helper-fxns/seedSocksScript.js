const faker = require('faker');
const fs = require('fs');

const {
  socksPic,
  productSizeGobal } = require('./dataSet.js');

const collectionSizes = {
  socks: 3500000
}

const socksCollection = fs.createWriteStream(`${__dirname}/csv-files/socks.csv`,{flags:'w'});
socksCollection.write('id,sock_name,sock_price,sock_sale_price,sock_picture,sock_description,sock_stock,sock_size,sock_likes\n', 'utf8');

function writeMillionOfDataForSocks(writer, encoding, callback) {
  let i = collectionSizes.socks;
  let sock_id = 0;

  function write() {
    let ok = true;

    do {
      i -= 1;
      sock_id += 1;
      let sock_name = `Adidas ${faker.company.bsAdjective()}`;
      let sock_price = faker.finance.amount(20, 500);
      let sock_sale_price = Number((sock_price - sock_price * .15).toFixed(2));
      let sock_picture = socksPic[faker.random.number({'min': 0, 'max': socksPic.length  - 1})];
      let sock_description = faker.lorem.sentence();
      let sock_stock = faker.random.number({'min': 1, 'max': 50});
      let sock_size = productSizeGobal[i % productSizeGobal.length];
      let sock_likes = faker.random.boolean();

      let data = `${sock_id},${sock_name},${sock_price},${sock_sale_price},${sock_picture},${sock_description},${sock_stock},${sock_size},${sock_likes}\n`;

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

writeMillionOfDataForSocks(socksCollection, 'utf-8', () => {
  socksCollection.end();

  console.log(`Finished generating socks.csv. Size: ${collectionSizes.socks}`)
  let endTime = process.hrtime(startTime);
  console.log(`Execution time (hr): ${endTime[0]} sec, ${endTime[1]/1000000} ms\n`);
});