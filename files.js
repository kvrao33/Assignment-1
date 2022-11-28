let fs= require('fs').promises;

//It is a function to create a new file using fs module.
async function createFile(){ 

try{
  await fs.writeFile("newfile.txt","New file was created")
  console.log("File created Successfully")
}
catch(err){
    console.log("Error occurred",err);
}
}
createFile()
    