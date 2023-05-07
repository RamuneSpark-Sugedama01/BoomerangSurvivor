function backup(){


if(pausetime == 0 && i == page){
    if(save == 1){
        save = 2;
        backupData = (localStorage.getItem("BOOMERANG_SURVIVOR_saveTEN"));
        backupData = lock_1(backupData);
        download_txt("BS_SaveData.txt", backupData);
        
        
    }
    
    if(d_load == 1){
        f();
        d_load = 2;
    }
}
    
}

let save = 0;
let d_load = 0;

let backupData;

function f(evt){//復元
let input = document.getElementById('file');
input.click();
}

    addEventListener("change",function(evt){    
    let f = evt.target.files;
        let reader = new FileReader();
         if(f[0] != undefined){
    //テキスト形式で読み込む
    reader.readAsText(f[0]);
    //読込終了後の処理
    reader.onload = function(ev){
        //テキストエリアに表示する
        backupData = reader.result;
        //console.log(backupData.length);
             backupData = unlock_1(backupData);
   
    }}
    },false);
    
function unlock_1(d){
    
    
    
     let x = d;
    
    let keta = x.slice( 0, 1 ) ;
    if( x.length > 30 || !isHanEi(x)){d="error"; 
     //console.log(false);
    }else{
  //console.log(true);
    keta = lx[keta];    
    }
    
    
if( isNaN(Number(keta)) || d == "error" || x.length != 1+keta+10 ){d="error";}else{
    let score = x.slice(1,keta+1)
  
let sc = Array.from(score);
    d = "";
         
for(let i = 0; i < keta; i++){
 sc[i] = lx[sc[i]];  
    
    if(isNaN(Number(sc[i]))){
        d = "error";
            break;
    }
d = String(sc[i]) + d;
}
 
        //console.log(d);
        
if(Number.isInteger(Number(d)) && Number(d) >= 0){
    
    let z = Number(d); //zは数字、dは文字列

    
    let ch2 = x.slice(keta+1,keta+11)
    let ch = Array.from(ch2);
    //console.log(ch);
  
     for(let i = 0; i < 10; i++){ //余り
    
         ch[i] =lx[ch[i]];
        ch[i] = Number(ch[i]);
         
         if(z%md[i] == ch[i]){
             
         }else{
             d = "error";
             //console.log("errrr");
         }
         
    }
    
    if(d != "error"){
        d = z;
        d *= 10;
        //console.log("success ! "+d);
        i = 100;
        pausetime = 1;
        localStorage.setItem("BOOMERANG_SURVIVOR_saveTEN",d);
    }
    
}}
     
        if(d == "error"){
            i = 101;
            pausetime = 1;
        }
        
        return d;
    
}


function lock_1(d){

     d = Number(d);
    let x = d/10;
    
    let keta = String(x).length; //桁数を取る
        d = lx[keta];
    
    let DS = []; //スコアを記号に
    let ic = []; //余りチェック
    
    for(let i = 0; i < keta; i++){　//記号化
    DS[i] = Math.floor(x / Math.pow(10,i))%10;
     DS[i] = lx[DS[i]];
       
         d = d + DS[i];
    }
    
    for(let i = 0; i < 10; i++){ //余り
    ic[i] = x % md[i];
    ic[i] = lx[ic[i]];
        
        d = d + ic[i];
    }
    
 return d;
    
}


const lx2 = "GBCLEQADJYF";
let lx = Array.from(lx2);

const md2 = "7382965749";
let md = Array.from(md2);

for(let i = 0; i < 11; i++){
    lx[lx[i]] = i;
}

document.body.onkeydown = key_down2;
 function key_down2( e ){

 e.preventDefault( );
 let key2 = e.keyCode;

     if( key2 == 83 ){
   save = 1;
 }
    
if( key2 == 76 ){
   d_load = 1;
 }
  
 
    
     }


document.body.onkeyup = key_up2;

function key_up2( e ){

 e.preventDefault( );
 let key2 = e.keyCode;
     
      if( key2 == 83 && (save == 1 || save == 2)){
   save = 0;
 }
    
    if( key2 == 76 && (d_load == 1 || d_load == 2)){
   d_load = 0;
 }


  
 }


function download_txt(file_name, data) {
 
    const blob = new Blob([data], {type: 'text/plain'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    document.body.appendChild(a);
    a.download = file_name;
    a.href = url;
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
 
}

function isHanEi(str){
  str = (str==null)?"":str;
  if(str.match(/^[A-Za-z]*$/)){
    return true;
  }else{
    return false;
  }
}