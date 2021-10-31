const csvTojsonParse = require("./csvParseToJson");
const expressP = require("./expressApp");
const reporter = require("./reporter")

async function exec() {
    console.log('Reporter Started..');
 const i=await reporter();
 console.log('Parsing Started..');

 const j=await csvTojsonParse();
 console.log('Express Started..');

 const k=await  expressP();
  }

  exec();