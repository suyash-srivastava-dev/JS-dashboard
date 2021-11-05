var path = require('path');
var fs = require('fs');
const csv=require('csvtojson');
const latestFileName = require("./latestFile")

function csvTojsonParse()
{
const csvFilePath='./newman'+'/'+latestFileName('./newman').file;
var outPath = path.join(__dirname, './check.json');

// const resultJson_new=[];
const p =csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    console.log(jsonObj);
    fs.writeFileSync(outPath, JSON.stringify(jsonObj), 'utf8', 
    function(err){console.log(err);});
    /**
     * [
     * 	{a:"1", b:"2", c:"3"},
     * 	{a:"4", b:"5". c:"6"}
     * ]
     */ 
})
}
csvTojsonParse();
module.exports=csvTojsonParse;