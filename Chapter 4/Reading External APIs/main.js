function renderdata(){
    fetch("url").then(res=>{
        if(!res.ok) return console.error("error");
        return res.json();
    }).then(data=>{
        console.log(data);
    })
}