const localPlayStyle = true;
const URL = location.href;

let playOKMode;

if(localPlayStyle == false){
    
    if(URL === "https://ramunespark-sugedama01.github.io/BoomerangSurvivor/"){
        playOKMode = true;
    }else{
        playOKMode = false;
    }
    
    
}else{
    playOKMode = true;
}

    setTimeout(()=>{
const id = setInterval("move()", 20 );    
},300)