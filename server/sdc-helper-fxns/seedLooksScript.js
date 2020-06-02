const faker = require('faker');
const fs = require('fs');

const collectionSizes = {
  shirts: 3500000,
  pants: 3500000,
  socks: 3500000,
  looks: 1000000
}

const looksCollection = fs.createWriteStream(`${__dirname}/csv-files/looks.csv`,{flags:'w'});
looksCollection.write('ctl_id,ctl_shirt_id,ctl_pant_id,ctl_sock_id\n', 'utf8');

function writeMillionOfDataForPants(writer, encoding, callback) {
  let i = collectionSizes.looks;
  let ctl_id = 0;

  function write() {
    let ok = true;
    do {
      i -= 1;
      ctl_id += 1;
      let ctl_shirt_id = faker.random.number({'min': 1, 'max': collectionSizes.looks});
      let ctl_pant_id = faker.random.number({'min': 1, 'max': collectionSizes.looks});
      let ctl_sock_id = faker.random.number({'min': 1, 'max': collectionSizes.looks});

      let data = `${ctl_id},${ctl_shirt_id},${ctl_pant_id},${ctl_sock_id}\n`;

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

writeMillionOfDataForPants(looksCollection, 'utf-8', () => {
  looksCollection.end();

  console.log(`Finished generating looks.csv. Size: ${collectionSizes.looks}`)
  let endTime = process.hrtime(startTime);
  console.log(`Execution time (hr): ${endTime[0]} sec, ${endTime[1]/1000000} ms\n`);
});