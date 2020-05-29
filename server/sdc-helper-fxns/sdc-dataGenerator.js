const faker = require('faker');
const fs = require('fs');
const csvWriter = require('csv-write-stream');

const maleTop = [
  'https://sdc-adida-related-info.s3-us-west-1.amazonaws.com/male/top/Cross_Up_365_Hoodie_Grey_FL0991_21_model.jpg',
  'https://sdc-adida-related-info.s3-us-west-1.amazonaws.com/male/top/Cross_Up_365_Hoodie_White_FH7946_23_hover_model.jpg',
  'https://sdc-adida-related-info.s3-us-west-1.amazonaws.com/male/top/Must_Haves_Graphic_Tee_Blue_FQ6216_21_model.jpg',
  'https://sdc-adida-related-info.s3-us-west-1.amazonaws.com/male/top/Primeblue_Singlet_Grey_FJ6828_21_model.jpg',
  'https://sdc-adida-related-info.s3-us-west-1.amazonaws.com/male/top/Ultimate365_Badge_of_Sport_Polo_Shirt_White_FJ9828_21_model.jpg'
];

const maleBottom = [
  'https://sdc-adida-related-info.s3-us-west-1.amazonaws.com/male/bottom/Run_It_3_Stripes_Astro_Pants_Grey_FL6968_25_model.jpg',
  'https://sdc-adida-related-info.s3-us-west-1.amazonaws.com/male/bottom/Ultimate365_Classic_Pants_Black_DQ2217_21_model.jpg',
  'https://sdc-adida-related-info.s3-us-west-1.amazonaws.com/male/bottom/Ultimate365_Classic_Pants_Black_DQ2217_25_model.jpg',
  'https://sdc-adida-related-info.s3-us-west-1.amazonaws.com/male/bottom/Ultimate365_Shorts_Green_FL5831_21_model.jpg',
  'https://sdc-adida-related-info.s3-us-west-1.amazonaws.com/male/bottom/Zeno_Big_Trefoil_Shorts_Black_GD0984_21_model.jpg'
];

const socksPic = [
  'https://sdc-adida-related-info.s3-us-west-1.amazonaws.com/male/bottom/Run_It_3_Stripes_Astro_Pants_Grey_FL6968_25_model.jpg',
  'https://sdc-adida-related-info.s3-us-west-1.amazonaws.com/male/bottom/Ultimate365_Classic_Pants_Black_DQ2217_21_model.jpg',
  'https://sdc-adida-related-info.s3-us-west-1.amazonaws.com/male/bottom/Ultimate365_Classic_Pants_Black_DQ2217_25_model.jpg',
  'https://sdc-adida-related-info.s3-us-west-1.amazonaws.com/male/bottom/Ultimate365_Shorts_Green_FL5831_21_model.jpg',
  'https://sdc-adida-related-info.s3-us-west-1.amazonaws.com/male/bottom/Zeno_Big_Trefoil_Shorts_Black_GD0984_21_model.jpg'
]

const relatedProduct = [
  'https://sdc-adida-related-info.s3-us-west-1.amazonaws.com/related/4D_Run_1.0_Shoes_White_FW1233_01_standard.jpg',
  'https://sdc-adida-related-info.s3-us-west-1.amazonaws.com/related/Adilette_Cloudfoam_Slides_Grey_B42212_01_standard.jpg',
  'https://sdc-adida-related-info.s3-us-west-1.amazonaws.com/related/NMD_R1_Shoes_Black_B42200_01_standard.jpg',
  'https://sdc-adida-related-info.s3-us-west-1.amazonaws.com/related/NMD_R1_Shoes_White_FV7852_01_standard.jpg',
  'https://sdc-adida-related-info.s3-us-west-1.amazonaws.com/related/Swift_Run_Shoes_Blue_EF5441_01_standard.jpg'
];

const productSizeGobal = ['x-small', 'small', 'medium', 'large', 'x-large'];

// function to generate product csv data given the collection name, desire size and a start time to calculate the total time it take to generate the csv file
function GenerateCSV(collection, size = 10000000, startTime) {
  let writer = csvWriter();
  let category;

  switch(collection) {
    case 'shirts':
      category = maleTop;
      break;
    case 'pants':
      category = maleBottom;
      break;
    case 'socks':
      category = socksPic;
      break;
    case 'related_products':
      category = relatedProduct;
      break;
    default:
      break;
  }

  writer.pipe(fs.createWriteStream(`${collection}.csv`));

  let price;

  for(let i = 1; i <= size; i++) {
    price = faker.finance.amount(20, 500);
    writer.write({
      id: i,
      name: `Adidas ${faker.company.bsAdjective()}`,
      price: price,
      sale_price: Number((price - price * .15).toFixed(2)),
      picture: category[faker.random.number({'min': 0, 'max': category.length  - 1})],
      description: faker.lorem.sentence(),
      stock: faker.random.number({'min': 1, 'max': 50}),
      size: productSizeGobal[i % productSizeGobal.length],
      likes: faker.random.boolean()
    });

  }

  writer.end();

  console.log(`Finished generating ${collection}.csv. Size: ${size}`)
  let endTime = process.hrtime(startTime);
  console.log(`Execution time (hr): ${endTime[0]} sec, ${endTime[1]/1000000} ms\n`);
}

// function to generate the "complete the looks"
function completeTheLooks(collection, size = 1000000, productLength = 3500000, startTime) {
  let writer = csvWriter();

  writer.pipe(fs.createWriteStream(`${collection}.csv`));

  for(let i = 1; i <= size; i++) {
    writer.write({
      id: i,
      shirt_id: faker.random.number({'min': 1, 'max': productLength}),
      pant_id: faker.random.number({'min': 1, 'max': productLength}),
      sock_id: faker.random.number({'min': 1, 'max': productLength})
    })
  }

  writer.end();

  console.log(`Finished generating ${collection}.csv. Size: ${size}`)
  let endTime = process.hrtime(startTime);
  console.log(`Execution time (hr): ${endTime[0]} sec, ${endTime[1]/1000000} ms\n`);

}

// function to generate relationship table between each set of "complete the look" with related product
function relationTable(collection, size = 1000000, relatedDataRange, relatedProductQuantity = 12, startTime) {
  let writer = csvWriter();

  writer.pipe(fs.createWriteStream(`${collection}.csv`));

  for(let i = 1; i <= size; i++) {
    for(let j = 1; j <= relatedProductQuantity; j++) {
      writer.write({
        look_id: i,
        related_id: faker.random.number({'min': j, 'max': relatedDataRange})
      })
    }
  }

  writer.end();

  console.log(`Finished generating ${collection}.csv. Size: ${size}`)
  let endTime = process.hrtime(startTime);
  console.log(`Execution time (hr): ${endTime[0]} sec, ${endTime[1]/1000000} ms\n`);
}

module.exports = {
  GenerateCSV,
  completeTheLooks,
  relationTable
}
