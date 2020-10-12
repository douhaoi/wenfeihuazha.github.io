const { exec,spawn } = require('child_process');
const fs = require('fs');
let build = exec('yarn run build', (err, stdout, stderr) => {
  if(err){
    console.log('这是错误信息',err);
  }else{
    console.log('打包文件成功');
    readFileList();
  }
});
build.stdout.on('data',data=>{
  console.log(data)
})
function readFileList(){
  let read = exec('qshell listbucket wenfeihuazha-blog -o if-pbl.list.txt',(err, stdout, stderr) => {
    if(err){
      console.log('这是读取文件列表错误信息',err);
    }else{
      console.log('读取成功');
      delectFile();
    }
  })
  read.stdout.on('data',data=>{
    console.log(data)
  })
}
function delectFile(){
  let delect = exec('qshell batchdelete --force wenfeihuazha-blog -i if-pbl.list.txt ',(err, stdout, stderr) => {
    fs.unlinkSync('if-pbl.list.txt');
    if(err){
      console.log('这是删除文件列表错误信息',err);
    }else{
      console.log('删除成功');
      qupload();
    }
  })
  delect.stdout.on('data',data=>{
    console.log(data)
  })
}
function qupload(){
  let up = exec('qshell qupload upload.conf',(err, stdout, stderr) => {
    if(err){
      console.log('这是上传错误信息',err);
    }else{
      console.log('上传成功');
      exec('rm -rf dist');
    }
  })
  up.stdout.on('data',data=>{
    console.log(data)
  })
}
