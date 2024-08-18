function fetchdata(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(`Data has been Fetched`);
        },4000);
    });
}

async function getdata(){
    try{
        const data= await fetchdata();
        console.log(data); 
    }catch(err){
        console.log(err);
    }
}

getdata();
console.log("HI");