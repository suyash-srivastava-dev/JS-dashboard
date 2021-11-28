#!/bin/bash  

echo "hello"

node reporter.js 

# cd contoller
node csvToObject.js

# node csvParseToJson.js 
node expressApp.js 