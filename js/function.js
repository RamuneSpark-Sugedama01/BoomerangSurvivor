const screen = document.getElementById( "screen" );


function setImage(e,f){

            if (e.innerHTML !== `<img src="${f}">`) {
                e.innerHTML = `<img src="${f}">`;
            }
    
    }

function setText(e,f){
    
    if(e.innerHTML !== "<nobr>"+f+"</nobr>"){
    e.innerHTML = "<nobr>"+f+"</nobr>";
    }
}

function setImageWidth(e,f,g){

        if (e.innerHTML !== `<img src="${f}" width="${g}">`) {
            e.innerHTML = `<img src="${f}" width="${g}">`;
        }
    
}
