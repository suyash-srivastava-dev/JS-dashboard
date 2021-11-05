const newman = require('newman');
// const csv =require('csv-parser');
const fs=require('fs');
const results=[];
// function reporterxml(){
// newman.run({
//     collection: './collection.json', // Collection URL from a public link or the Postman API can also be used
//     reporters: ['csvextra'],
//     iterationCount: 1,
//     reporter: {
//         csvextra: {
//             export: './report.csv',
//             // template: './template.hbs'
//             // logs: true,
//             // showOnlyFails: true,
//             // noSyntaxHighlighting: true,
//             // testPaging: true,
//             // browserTitle: "My Newman report",
//             // title: "My Newman Report",
//             // titleSize: 4,
//             // omitHeaders: true,
//             // skipHeaders: "Authorization",
//             // omitRequestBodies: true,
//             // omitResponseBodies: true,
//             // hideRequestBody: ["Login"],
//             // hideResponseBody: ["Auth Request"],
//             // showEnvironmentData: true,
//             // skipEnvironmentVars: ["API_KEY"],
//             // showGlobalData: true,
//             // skipGlobalVars: ["API_TOKEN"],
//             // skipSensitiveData: true,
//             // showMarkdownLinks: true,
//             // showFolderDescription: true,
//             // timezone: "Australia/Sydney",
//             // skipFolders: "folder name with space,folderWithoutSpace",
//             // skipRequests: "request name with space,requestNameWithoutSpace"
//         }
//     }
// });


// fs.createReadStream('./newman/newman-run-report-2021-10-30-12-11-07-038-0.csv')
//     .pipe(csv({}))
//         .on('data',(data)=>results.push(data))
//             .on('end',()=>{
//                             console.log(results);
//                         }
//         )
// const results2= "{"+results+"}"
// fs.writeFile("/files/report", results2 , function(err) {
//             if(err) {
//                 return console.log(err);
//             }
//             console.log("The file was saved!");
//         }); 
    // }

   

function reporterhtml()
{
    newman.run({
        collection: './collection.json', // Collection URL from a public link or the Postman API can also be used
        reporters: ['htmlextra','myket_reporter'],
        iterationCount: 1,
        reporter: {
            htmlextra: {
                export: './report.html',
                // template: './template.hbs'
                // logs: true,
                // showOnlyFails: true,
                // noSyntaxHighlighting: true,
                // testPaging: true,
                browserTitle: "EISL report",
                title: "EISL Dashboard Report",
                // titleSize: 4,
                // omitHeaders: true,
                // skipHeaders: "Authorization",
                // omitRequestBodies: true,
                // omitResponseBodies: true,
                // hideRequestBody: ["Login"],
                // hideResponseBody: ["Auth Request"],
                // showEnvironmentData: true,
                // skipEnvironmentVars: ["API_KEY"],
                // showGlobalData: true,
                // skipGlobalVars: ["API_TOKEN"],
                // skipSensitiveData: true,
                // showMarkdownLinks: true,
                // showFolderDescription: true,
                // timezone: "Australia/Sydney",
                // skipFolders: "folder name with space,folderWithoutSpace",
                // skipRequests: "request name with space,requestNameWithoutSpace"
            }
        }
    });
}
    function reporters()
    {
        // reporterxml();
        reporterhtml();
    }
    reporters()
module.exports = reporters;