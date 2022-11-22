let fs= require('fs').promises;
async function create(){

try{

  await fs.writeFile("newfile.txt","New file was created")
  console.log("File created Successfully")
}
catch(err){
    console.log("Error",err);
}
}
create()
    