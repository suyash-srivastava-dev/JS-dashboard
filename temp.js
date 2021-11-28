var csv = require("jquery-csv");
var fs = require("fs");

// const latestFileName = require("./latestFile");
var result = [];
function csvToObject(sample) {
  console.log("Inside Object");

  fs.readFile(sample, "UTF-8", (err, fileContent) => {
    if (err) {
      console.log(err);
    }
    result = csv.toArrays(fileContent, {}, (err, output) => {
      if (err) {
        console.log(err);
      }
      // else {
      console.log(output);
      // }
      // return data;
      // for (let i = 0, len = data.length; i < len; i++) {
      //   output.push(data[i]);
    });
  });

  console.log("oupt===========================\n" + result);
}

// csvToObject();

function fetchArray() {
  const sample = "./report.csv";
  //   console.log("await....");
  //   const data1 = await cto.csvToObject(sample);
  //   console.log("output data\n" + data1);
  // csvToObject(sample);
  console.log(csvToObject(sample));
}
fetchArray();

module.exports = { csvToObject };
