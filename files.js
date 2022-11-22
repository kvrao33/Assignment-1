let fs= require('fs');
fs.writeFile("newfile.txt","New file was created",(err)=>{
    if(err) throw err;
    console.log("file created successfully");
})