
const fs = require('fs')

const express = require('express')
const app = express()
const port = 4000
function expressP(){
app.get('/', (req, res) => {
   const data= fs.readFileSync('table.html');
  res.send(data.toString());
})

app.get('/newman-report', (req, res) => {
    const data= fs.readFileSync('report.html');
   res.send(data.toString());
 })

 app.get('/check.json', (req, res) => {
  const data= fs.readFileSync('check.json');
 res.send(data.toString());
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
}
expressP();
module.exports=expressP;