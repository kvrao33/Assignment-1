let courseCompleted=40;//course completed in percentage
let courseData  = new Promise((resolve,reject)=>{
    
    if(courseCompleted<50){
        reject({message:"You should complete 50% of your course"})
    }else{
        resolve({message:"Congrats now your eligible for get into Project"})
    }
})

courseData.then((data)=>{
    console.log(data.message);
}).catch(data=>{
    console.log(data.message);
})
