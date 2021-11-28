var csv = require("jquery-csv");
var fs = require("fs");
const { resolve } = require("path");
const { response } = require("express");
// const latestFileName = require("./latestFile");
const output = [];
function csvToObject(sample) {
  console.log("Inside Object");
  return new Promise((resolve, reject) => {
    resolve(
      fs.readFile(sample, "UTF-8", (err, fileContent) => {
        if (err) {
          console.log(err);
        }
        return csv.toArrays(fileContent, {}, (err, data) => {
          if (err) {
            console.log(err);
          }
          // else {
          //   console.log(data);
          // }
          // return data;
          // for (let i = 0, len = data.length; i < len; i++) {
          //   output.push(data[i]);
        });
      })
    );
    //reject(console.log("error fetching"));
  });
}

// csvToObject();

async function fetchArray() {
  const sample = "./report.csv";
  //   console.log("await....");
  //   const data1 = await cto.csvToObject(sample);
  //   console.log("output data\n" + data1);
  // csvToObject(sample);
  csvToObject(sample).then((response) => {
    console.table(response);
  });
}
fetchArray();

module.exports = { csvToObject };
