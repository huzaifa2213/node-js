const {readFile, writeFile, read} =require('fs');
console.log('Start the Task');
readFile('./content/first.txt','utf8',(err,result)=>{
if(err){
    console.log(err);
    return;
}
const first = result;
readFile('./content/second.txt','utf8',(err,result)=>{
if(err){
    console.log(err);
    return;
}
const second= result;
writeFile('./content/result.txt',`Here is the result File: ${first},${second}`,{flag:'a'},(err,result)=>{
if(err){
    console.log(err);
    return;
}
console.log('Done with the Task');
})
})
})
console.log('Move to the next Task');