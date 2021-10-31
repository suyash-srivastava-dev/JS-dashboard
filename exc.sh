#!/bin/bash  

echo "hello"

node reporter.js 
node csvParseToJson.js 
node expressApp.js 