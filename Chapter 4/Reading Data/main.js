async function renderdata(){
    try{
        const response=await fetch('data.json');
        if(!response.ok) throw new Error('Error');
        const data=response.json();
    }catch(err){
        console.error(err);
    }
}