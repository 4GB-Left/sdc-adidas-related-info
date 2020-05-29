const fs = require('fs');
const path = require('path');
const fastcsv = require('fast-csv');
const { exec } = require('child_process');

const pgres = require('../sdc-db-config/postgre.config.js');


let directoryPath = path.join(__dirname, '/test/');

fs.readdir(directoryPath, (err, files) => {
  if(err) {
    console.log(`Error reading files in path: ${directoryPath} => `, err)
  } else {
    files.forEach((file) => {
      console.log('file: ', file);

      exec(`echo ${file}`, (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
      });

      // exec(`psql;
      // \c adidas_related_info;
      // \copy shirts From ${pwd}/${file}' DELIMITER ',' CSV HEADER;`, (error, stdout, stderr) => {
      //   if (error) {
      //     console.error(`exec error: ${error}`);
      //     return;
      //   }
      //   console.log(`stdout: ${stdout}`);
      //   console.error(`stderr: ${stderr}`);
      // });


    })
  }
})