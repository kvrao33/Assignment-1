let varPromise  = new Promise((resolve,reject)=>{
    let course=50;
    if(course<50){
        reject({message:"You should complete 50% of your course"})
    }else{
        resolve({message:"Congrats now your eligible for get into Project"})
    }
})

varPromise.then((data)=>{
    console.log(data.message);
}).catch(data=>{
    console.log(data.message);
})
