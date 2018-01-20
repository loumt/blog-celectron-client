const fs = require('fs');
const path = require('path')

const dirPath = './../app/statics/images';
//读取images下的文件
const files = fs.readdirSync(path.join(__dirname, dirPath));
//数量
console.log(`文件数量:${files.length}`);

let filePath = [];
files.forEach(item => {
    filePath.push(path.join(__dirname, dirPath, item))
})


filePath.forEach(item => {
    //文件信息
    // const state = fs.statSync(item);
    // console.dir(state)




})