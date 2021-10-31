const csv =require('csv-parser');
const fs=require('fs');
const results=[];

const a =fs.readFileSync('./newman/newman-run-report-2021-10-30-12-11-07-038-0.csv')
    .pipe(csv({}))
        .on('data',(data)=>results.push(data))
            .on('end',()=>{
                          //  console.log(results);
                        }
        )

fs.writeFileSync('./newman/check.json', results.toLocaleString, err => {
  if (err) {
    console.error(err)
    return
  }
  //file written successfully
})
