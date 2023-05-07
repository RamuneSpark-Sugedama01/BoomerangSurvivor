
//スマホ判定
let phone;

function phonecheck(){

  if (navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
    phone = true;
  } else {
      phone = false;
  }
}


let side_resize = window.innerWidth;
let tate_resize = window.innerHeight

const rotate_switch = ["","rotate(90deg)"];

let ri = 0;

let p_scale;



function monitor_resize(){
 
    
side_resize = window.innerWidth;
tate_resize = window.innerHeight;

    if(side_resize >= tate_resize || !phone){
    
ri = 0;
    
}else{
    
tate_resize = window.innerWidth;
side_resize = window.innerHeight;
ri = 1;
    
}
if(side_resize/tate_resize >= 1200 / 800){//横長な時
    
    p_scale = (tate_resize / 800) * 100;
    
}else{
   
    p_scale = (side_resize / 1200) * 100;
    
}


       
    screen.style.transform = "translate(-50%, -50%) " + rotate_switch[ri] + " scale("+p_scale+"%)";

    
}
