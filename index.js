const fs = require('fs');
const path= require('path');
const dirPath= path.join(__dirname,'crud');
const filepath=`${dirPath}/apple.txt`;
//fs.writeFileSync(filepath,'This is a simple text file');
//fs.readFile(filepath,'utf8',(err,item)=>{console.log(item)})
//fs.appendFileSync(filepath, 'And Now I am Updated');
//fs.unlinkSync(filepath);