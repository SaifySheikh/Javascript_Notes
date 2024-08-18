function f(n){
    return new Promise((resolve, reject)=>{
        if(n%2==0){
            resolve(`${n} is even`);
        }
        else{
            reject(`${n} is odd`);
        }
    });
}

f(3).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});


