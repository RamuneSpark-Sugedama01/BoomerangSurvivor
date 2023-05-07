document.write( "<div id= screen> </div>" );
const screen = document.getElementById( "screen" );

let sg = "";

if(isInstalledFont('Segoe Script')){
    sg = "Segoe Script"
}else{
    sg = "Higashi"
}

//スクリーン幅は、横1200 縦800
    
let mode = 0;
    
let damage=0;　//ダメージ判定・無敵時間計算
    
let stock = 2;　//残り数
let life = 1;　//ハート
    
let sx; //キャラx座標
let sy; //キャラy座標
let walk = 0; //歩いているか判定
    
let weapon = 1; //ブーメラン
    
const wsize = 25; //ブーメラン判定
       
let wv = 15;
let weaponv; //ブーメラン速
let wvdown = 0.5;
let attackup = 0;
    
let shottime = 0; //連射防止
    
let wvec; //ブーメラン向き
    
let weaponcatch = [];
    
const charax = 65 * 0.5; //当たり判定差分x
const charay = 70; //当たり判定差分y
    
let atarix = sx + charax; //当たり判定x
let atariy = sy + charay; //当たり判定y
    
    let wx = []; //ブーメラン座標
let wy = [];
    
    let wepopa = 1;
    
    let i; //繰り返し構文はじめ、多岐に使用
    let bi;　//繰り返し構文内の繰り返し構文に使用（主にブーメランの処理）
    
    const inum = 5; //アイテム数
    let im =[];
    let ix =[];
    let ifx =[];//登場位置
    let ixx = [];//横揺れ
        let iy =[];
    let ivy =[];
      let iax =[];
        let iay =[];
    const iv = 3; //アイテム追加速度最大値+1

    let wax = []; //当たり判定ブーメランx
    let way = []; //当たり判定ブーメランy
    
    let p = 0; //点数
    let hi;　//ハイスコア
    let chain = 1;　//連続攻撃によるスコアアップ
    let bonus = 1;　//50000点ごとに1UP
    let levelp; //難易度と連動させるスコア（cheatFを使用時にずらす）
    const soundp = 100000; //サウンドテスト点数(ここに表示されている数以上のハイスコアを出すと、サウンドテストが利用可能)
    const limitp = 9999999900; //点数の上限
    
    
    let idol = 0;　//アイドルモーション制御
    
let vec = "down" //キャラの向き

let fourway = 0;　//4WAY判定
    
let speed = 1.5; //移動速度（ステータス）
let actspeed = 1.5; //実際の移動速度    
    
let lrk = "EMPTY" //キー左右
let udk = "EMPTY" //キー左右
let k = "EMPTY"; //文字入力判定
let X_k = "EMPTY";    
let num_k = "EMPTY";

    const page = 8;//マニュアルのページ数
    
let attack = "EMPTY"; //ブーメランキー
    
    // sound
    let soundpause = new Audio( );
    soundpause.src = "mp3/pause.mp3";
    
    
    let sounditem = new Audio( );
    sounditem.src = "mp3/item.mp3";
    
    let soundok = new Audio( );
    soundok.src = "mp3/OK.mp3";
    
        let sounddefeat = new Audio( );
    sounddefeat.src = "mp3/defeat.mp3";
 
       let soundweapon = new Audio( );
    soundweapon.src = "mp3/throw.mp3";
    
    let soundtwinkle = new Audio( );
    
      let voice = new Audio( );
    
 
      let BGM = new Audio( );
    
 
 
    
    
    //A ENEMY
    
    let aem = [];
    let aex = [];
    let aey = [];
    let aaex = [];
    let aaey = [];
    let aevec = [];
    let aenum = 20; 
    let aev = 3;
    
     //B ENEMY
    
    let bem = [];
    let bex = [];
    let bey = [];
    let baex = [];
    let baey = [];
    let bevec = [];
    let benum = 20; 
    let bev = 4;
    
     //C ENEMY
    
    let cem = [];
    let cex = [];
    let cey = [];
    let caex = [];
    let caey = [];
    let cevec = [];
    let cenum = 20; 
    let cev = [];
    let adcev = [];
    
         //D ENEMY
    
    let dem = [];
    let dex = [];
    let dey = [];
    let daex = [];
    let daey = [];
    let devec = [];
    let denum = 10; 
    let dev = 5;
    let actdev = [];
    let dexnaname = [];
    let deynaname = [];
    let deate=[]; //接触前・後の判定
   
         //E ENEMY
    
    let eem = 0;
    let eex;
    let eey;
    let eaex;
    let eaey;
    let eevx;
    let eevy;
    let eev;
    let ecount = 0;
    let eenum = 0;
    let eespeed;
    
     let pausetime = 0; //ポーズ（SPACEキー）連射防止用
    
    let scene = "alert";
    
    let time = 0;
    let ktime =0;
    
    let misscount = 0;　//ミスアニメーション制御
    
    let blackout = 1;　//ブラックアウト不透明度
    let blacktime = 0;
    let textout; //クレジット不透明度
    let shift = 0;　//画面切り替わり判定
    const shiftspeed = 0.1; //画面切り替わり速度
    let aeratio; //AENEMY割合
    let beratio; //BENEMY割合
    
    let ceratio; //CENEMY割合
    let deratio; //DENEMY割合
    let eeratio; //EENEMY割合

    let cont; //コンティニュー選択
    
    const firsttime = 0;//初期タイム、デバッグ用、通常は0にすること。
    const firstp = 0;//初期点、デバッグ用、通常は0にすること。
    
    //裏技
    let cheat;
    let cheatB;
    let cheatC;
    let cheatD = 0;
    let cheatE;
    let cheatF;
    let cheatOK = 0;
    let night = 0;
    
    let side;
    let tate;
    let sizealert = 0
    
    //クレジット
    let credits = 0;
    
    //背景画像を切り替えたとき、読み込み時間が一瞬発生した場合の表示画面
     document.write( "<div id= mostback> </div>" );
document.getElementById( "mostback" ).style.position = "absolute";
document.getElementById( "mostback" ).style.left = 0;
document.getElementById( "mostback" ).style.top = 0;
document.getElementById( "mostback" ).innerHTML = "<img src = image/black.jpg>";
screen.appendChild(document.getElementById( "mostback" ));
    
//画像・文字
document.write( "<div id= haikei> </div>" );
document.getElementById( "haikei" ).style.position = "absolute";
document.getElementById( "haikei" ).style.left = 0;
document.getElementById( "haikei" ).style.top = 0;
document.getElementById( "haikei" ).innerHTML = "";
screen.appendChild(document.getElementById( "haikei" ));
    
for (i = 0 ; i < 4; i++){
    weaponcatch[i] =1;
    wx[i] = 0;
     wy[i] = 0;
document.write( "<div id= buki"+i+"> </div>" );
document.getElementById( "buki" +i ).style.position = "absolute";
    document.getElementById( "buki" +i ).style.left = wx[i];
document.getElementById( "buki" +i ).style.top = wy[i];
document.getElementById( "buki" +i ).innerHTML = "";
    screen.appendChild(document.getElementById( "buki" +i ));
}

    for( i = 0; i < inum; i++){
        im[i] =0;
    document.write( "<div id= item"+ i+"> </div>" );
document.getElementById( "item" + i ).style.position = "absolute";
    document.getElementById( "item" + i ).style.left = 0;
document.getElementById( "item" + i ).style.top = 0;
document.getElementById( "item" + i ).innerHTML = "";
        screen.appendChild(document.getElementById( "item" +i ));
    }
    
     for( i = 0; i < aenum; i++){
       aem[i] = 0;
    aex[i] = 0;
    aey[i] = 0;
    aevec[i] =  "down";
    
    document.write( "<div id= Aenemy"+ i+"> </div>" );
document.getElementById( "Aenemy" + i ).style.position = "absolute";
    document.getElementById( "Aenemy" + i ).style.left = 0;
document.getElementById( "Aenemy" + i ).style.top = 0;
document.getElementById( "Aenemy" + i ).innerHTML = "";
        screen.appendChild(document.getElementById( "Aenemy" +i ));
    }
    
      for( i = 0; i < benum; i++){
       bem[i] = 0;
    bex[i] = 0;
    bey[i] = 0;
    bevec[i] =  "up";
    
    document.write( "<div id= Benemy"+ i+"> </div>" );
document.getElementById( "Benemy" + i ).style.position = "absolute";
    document.getElementById( "Benemy" + i ).style.left = 0;
document.getElementById( "Benemy" + i ).style.top = 0;
document.getElementById( "Benemy" + i ).innerHTML = "";
                  screen.appendChild(document.getElementById( "Benemy" +i ));
    }
    
    for( i = 0; i < cenum; i++){
       cem[i] = 0;
    cex[i] = 0;
    cey[i] = 0;
        cev[i]= 8;
    cevec[i] =  "left";
    
    document.write( "<div id= Cenemy"+ i+"> </div>" );
document.getElementById( "Cenemy" + i ).style.position = "absolute";
    document.getElementById( "Cenemy" + i ).style.left = 0;
document.getElementById( "Cenemy" + i ).style.top = 0;
document.getElementById( "Cenemy" + i ).innerHTML = "";
            screen.appendChild(document.getElementById( "Cenemy" +i ));
    }

    for( i = 0; i < denum; i++){
       dem[i] = 0;
    dex[i] = 0;
    dey[i] = 0;
    devec[i] =  "left";
actdev[i] = 0;
        
    document.write( "<div id= Denemy"+ i+"> </div>" );
document.getElementById( "Denemy" + i ).style.position = "absolute";
    document.getElementById( "Denemy" + i ).style.left = 0;
document.getElementById( "Denemy" + i ).style.top = 0;
document.getElementById( "Denemy" + i ).innerHTML = "";
                screen.appendChild(document.getElementById( "Denemy" +i ));
    }
    
     document.write( "<div id= Eenemy> </div>" );
document.getElementById( "Eenemy" ).style.position = "absolute";
    document.getElementById( "Eenemy" ).style.left = 0;
document.getElementById( "Eenemy" ).style.top = 0;
document.getElementById( "Eenemy" ).innerHTML = "";
        screen.appendChild(document.getElementById( "Eenemy" ));

    
    
document.write( "<div id= player> </div>" );
document.getElementById( "player" ).style.position = "absolute";
document.getElementById( "player" ).style.left = sx;
document.getElementById( "player" ).style.top = sy;
document.getElementById( "player" ).innerHTML = "";
        screen.appendChild(document.getElementById( "player" ));


document.write( "<div id= stat> </div>" );
document.getElementById( "stat" ).style.position = "absolute";
document.getElementById( "stat" ).style.left = 0;
document.getElementById( "stat" ).style.top = 0;
document.getElementById( "stat" ).innerHTML = "";
        screen.appendChild(document.getElementById( "stat" ));
    
document.write( "<div id= TEN> </div>" );
document.getElementById( "TEN" ).style.position = "absolute";
document.getElementById( "TEN" ).style.left = 0;
document.getElementById( "TEN" ).style.top = 20;
document.getElementById( "TEN" ).style.transform = "translate(-100%, 0%)";
document.getElementById( "TEN" ).style.fontFamily =　"Higashi";
document.getElementById( "TEN" ).style.fontSize =　"35";
    document.getElementById( "TEN" ).style.color =　"#FFFFFF";
document.getElementById( "TEN" ).innerHTML = "";
        screen.appendChild(document.getElementById( "TEN" ));

    document.write( "<div id= HiTEN> </div>" );
document.getElementById( "HiTEN" ).style.position = "absolute";
document.getElementById( "HiTEN" ).style.left = 0;
document.getElementById( "HiTEN" ).style.top = 20;
document.getElementById( "HiTEN" ).style.transform = "translate(-100%, 0%)";
document.getElementById( "HiTEN" ).style.fontFamily =　"Higashi";
document.getElementById( "HiTEN" ).style.fontSize =　"35";
    document.getElementById( "HiTEN" ).style.color =　"#FFFFFF";
document.getElementById( "HiTEN" ).innerHTML = "";
        screen.appendChild(document.getElementById( "HiTEN" ));

    
    document.write( "<div id= BGM> </div>" );
document.getElementById( "BGM" ).style.position = "absolute";
document.getElementById( "BGM" ).style.left = "50%";
document.getElementById( "BGM" ).style.transform = "translate(-50%, 0%)";
document.getElementById( "BGM" ).style.top = 340;
document.getElementById( "BGM" ).style.fontFamily =　sg;
document.getElementById( "BGM" ).style.fontSize =　"40";
    document.getElementById( "BGM" ).style.color =　"#B8F58F";
document.getElementById( "BGM" ).innerHTML = "";
        screen.appendChild(document.getElementById( "BGM" ));

document.write( "<div id= credit> </div>" );
document.getElementById( "credit" ).style.position = "absolute";
document.getElementById( "credit" ).style.left = "50%";
document.getElementById( "credit" ).style.transform = "translate(-50%, 0%)";
document.getElementById( "credit" ).style.top = 340;
document.getElementById( "credit" ).style.fontFamily =　sg;
document.getElementById( "credit" ).style.fontSize =　"45";
    document.getElementById( "credit" ).style.color =　"#FFFFFF";
document.getElementById( "credit" ).innerHTML = "";
        screen.appendChild(document.getElementById( "credit" ));

document.write( "<div id= STOCKS> </div>" );
document.getElementById( "STOCKS" ).style.position = "absolute";
document.getElementById( "STOCKS" ).style.left = 94;
document.getElementById( "STOCKS" ).style.top = 14;
document.getElementById( "STOCKS" ).style.fontFamily =　"Higashi";
        document.getElementById( "STOCKS" ).style.fontWeight = "bold";
document.getElementById( "STOCKS" ).style.fontSize =　"50";
document.getElementById( "STOCKS" ).innerHTML = ""; //stockの影
        screen.appendChild(document.getElementById( "STOCKS" ));
    
    document.write( "<div id= STOCK> </div>" );
document.getElementById( "STOCK" ).style.position = "absolute";
document.getElementById( "STOCK" ).style.left = 90;
document.getElementById( "STOCK" ).style.top = 10;
document.getElementById( "STOCK" ).style.fontFamily =　"Higashi";
document.getElementById( "STOCK" ).style.fontSize =　"50";
    document.getElementById( "STOCK" ).style.fontWeight = "bold";
    document.getElementById( "STOCK" ).style.color =　"#FFFFFF";
document.getElementById( "STOCK" ).innerHTML = "";
        screen.appendChild(document.getElementById( "STOCK" ));
    
 document.write( "<div id= heart> </div>" );
document.getElementById( "heart" ).style.position = "absolute";
document.getElementById( "heart" ).style.left = 150;
document.getElementById( "heart" ).style.top = 18;
document.getElementById( "heart" ).innerHTML = "";
        screen.appendChild(document.getElementById( "heart" ));


    
    document.write( "<div id= pause> </div>" );
document.getElementById( "pause" ).style.position = "absolute";
document.getElementById( "pause" ).style.left = 450;
document.getElementById( "pause" ).style.top = 300;
document.getElementById( "pause" ).innerHTML = "";
        screen.appendChild(document.getElementById( "pause" ));
    
    document.write( "<div id= select> </div>" );
document.getElementById( "select" ).style.position = "absolute";
document.getElementById( "select" ).style.left = 0;
document.getElementById( "select" ).style.top = 0;
document.getElementById( "select" ).innerHTML = "";
        screen.appendChild(document.getElementById( "select" ));

    document.write( "<div id= maple> </div>" );
document.getElementById( "maple" ).style.position = "absolute";
document.getElementById( "maple" ).style.left = -360;
document.getElementById( "maple" ).style.top = 0;
document.getElementById( "maple" ).innerHTML = "";
        screen.appendChild(document.getElementById( "maple" ));

        document.write( "<div id= logo> </div>" );
document.getElementById( "logo" ).style.position = "absolute";
document.getElementById( "logo" ).style.left = 0;
document.getElementById( "logo" ).style.top = -80;
document.getElementById( "logo" ).innerHTML = "";
        screen.appendChild(document.getElementById( "logo" ));

        document.write( "<div id= mode> </div>" );
document.getElementById( "mode" ).style.position = "absolute";
document.getElementById( "mode" ).style.left = 0;
document.getElementById( "mode" ).style.top = 0;
document.getElementById( "mode" ).innerHTML = "";
        screen.appendChild(document.getElementById( "mode" ));
    
        document.write( "<div id= enter> </div>" );
document.getElementById( "enter" ).style.position = "absolute";
document.getElementById( "enter" ).style.left = 250;
document.getElementById( "enter" ).style.top = 600;
document.getElementById( "enter" ).innerHTML = "";
        screen.appendChild(document.getElementById( "enter" ));
    
for(let i = 0; i < 3; i++){
 document.write( "<div id= erase"+i+"> </div>" );
document.getElementById( "erase"+i ).style.position = "absolute";
document.getElementById( "erase"+i ).style.left = 0;
document.getElementById( "erase"+i ).style.top = 0;
document.getElementById( "erase"+i ).style.visibility = "hidden";
document.getElementById( "erase"+i ).innerHTML = "";
        screen.appendChild(document.getElementById( "erase"+i ));
}
    
     document.write( "<div id= black> </div>" );
document.getElementById( "black" ).style.position = "absolute";
document.getElementById( "black" ).style.left = 0;
document.getElementById( "black" ).style.top = 0;
                  document.getElementById( "black" ).style.opacity = blackout;
document.getElementById( "black" ).innerHTML = "<img src = image/black.jpg>";
        screen.appendChild(document.getElementById( "black" ));
    
    
//デバッグ
//document.write( "<div id= zahyo> </div>" );document.getElementById( "zahyo" ).style.position = "absolute";document.getElementById( "zahyo" ).style.left = 0;document.getElementById( "zahyo" ).style.top = 0;document.getElementById( "zahyo" ).style.fontFamily =　"Higashi";document.getElementById( "zahyo" ).style.fontSize =　"20";document.getElementById( "zahyo" ).style.color =　"#555555";document.getElementById( "zahyo" ).innerHTML = "";

//for (i = 0 ; i < aenum; i++){document.write( "<div id= hantei"+i+"> </div>" );document.getElementById( "hantei" +i ).style.position = "absolute";document.getElementById( "hantei" +i ).style.left = 0;document.getElementById( "hantei" +i ).style.top = 0;document.getElementById( "hantei" +i ).innerHTML = "<img src = image/ATARI.png>";}

let erase = 0
let e_select = 0





//ゲーム進行    
let id = setInterval("move( )", 20 );
function move( ) {

    
        monitor_resize();
     
        
        document.getElementById( "TEN" ).style.left = 680;
    
    document.getElementById( "HiTEN" ).style.left = 1165;
  
    phonecheck();
    
 //デバッグ
    
 //  document.getElementById( "zahyo" ).innerHTML = "(TIME "+time+" SCENE " +scene +" MODE " +mode +" KTIME "+ktime+" SHIFT "+shift+" sx "+sx+" k "+k+"　<br>"+cheat+" "+cheatB+" "+cheatC+" "+cheatD+"　"+cheatF+" "+side+" "+tate+")<br>"+erase;
 
        
      //  for (i = 0 ; i < aenum; i++){ document.getElementById( "hantei" +i ).style.left = aaex[i];document.getElementById( "hantei" +i ).style.top = aaey[i];}

    hi = (localStorage.getItem("BOOMERANG_SURVIVOR_saveTEN"));
    
    if(hi < 10000){
    localStorage.setItem("BOOMERANG_SURVIVOR_saveTEN",10000);
    }
    
    
    
    if (p > hi ){
        hi = p;
        localStorage.setItem("BOOMERANG_SURVIVOR_saveTEN",hi);
    }
    
      //リミット
        if(p >= limitp){
            p = limitp;
        }
            if(hi >= limitp){
            hi = limitp;
            localStorage.setItem("BOOMERANG_SURVIVOR_saveTEN",hi);
    
        }
    
    
    
    if(cheatF == 8){
        levelp = p+900000;
    }else{
        levelp = p;
    }
    
    
    if (scene =="game"||scene == "miss"){
        
        //背景・ステータス
        
        document.getElementById( "STOCK" ).innerHTML = stock;
        document.getElementById( "STOCKS" ).innerHTML = stock;
    
 document.getElementById( "stat" ).innerHTML = "<img src = image/status.png>";
        
        document.getElementById( "TEN" ).innerHTML = p;
        
        document.getElementById( "HiTEN" ).innerHTML = hi;
        
        if (life == 2){
        document.getElementById( "heart" ).innerHTML = "<img src = image/heart.png width = 50>";
        }else{
            document.getElementById( "heart" ).innerHTML = "";
        }

        
        
    if (scene =="game"){
        
        
        
        shift = 0;
        
        
      
        //時間計測
        
            if(time>=0 && time < 1000 && damage >= 0){
        ktime = ktime + 1;
        if (ktime >= 60){
            time = time + 1;
            ktime = 0;
        }
            } //ダメージ回転中は時間計測を止める
        

        
        if (time >= 0 &&time < 20){
                    if(cheatC != 8){
            
            aenum = 2;
            benum = 0;
             cenum = 0;
            denum = 0;
            eenum = 0;
            dev = 5;
            aeratio = 0.99;
            beratio = 0.99;
            deratio = 0.999
            ceratio = 0.999;
            eeratio= 0.999;
                        
                    }else{ //CheatC使用時
                        
                        aenum = 2;
            benum = 0;
             cenum = 0;
            denum = 2;
            eenum = 0;
            dev = 3;
            aeratio = 0.99;
            beratio = 0.99;
            deratio = 0.993;
            ceratio = 0.99;
            eeratio= 0.999;
            
                        
                    }
 
        }else if(time < 0){ //調整確認用
              aenum = 0;
            benum = 0;
            cenum =0;
            denum = 0;
            eenum = 1;
                        dev = 0;
                        aeratio = 0.99;
            beratio = 0.99;
            deratio = 0.999
                        ceratio = 1;
            eeratio= 0.95;
        }else if(time < 30){
            
                                if(cheatC != 8){
            
            aenum = 3;
            benum = 1;
            cenum = 0;
            denum = 0;
            eenum = 0;
                        dev = 5;
                        aeratio = 0.99;
            beratio = 0.99;
            deratio = 0.999
            ceratio = 0.999;
            eeratio= 0.999;
                                    
                                }else{//CheatC使用時
                                    
                aenum = 3;
            benum = 1;
             cenum = 1;
            denum = 3;
            eenum = 0;
            dev = 4;
            aeratio = 0.99;
            beratio = 0.99;
            deratio = 0.995;
            ceratio = 0.999;
            eeratio= 0.999;
            
                                    
                                }
                                    
                                    
                  }else if(time < 50){
                      
                if(cheatC != 8){
                      
            aenum = 3;
            benum = 2;
            cenum = 0;
            denum = 0;
            eenum = 0;
                                  dev = 5;
                                  aeratio = 0.99;
            beratio = 0.99;
            deratio = 0.999
                                  ceratio = 0.999;
            eeratio= 0.999;
                      
                      
                                    }else{//CheatC使用時
                                    
                aenum = 4;
            benum = 3;
             cenum = 1;
            denum = 4;
            eenum = 0;
            dev = 4;
            aeratio = 0.99;
            beratio = 0.99;
            deratio = 0.995;
            ceratio = 0.999;
            eeratio= 0.999;
            
                                    
                                }
                  
                      
                      
        }else if(time < 80){
            
               if(cheatC != 8){
            
            aenum = 3;
            benum = 3;
            cenum = 0;
            denum = 0;
            eenum = 0;
                        dev = 5;
                        aeratio = 0.99;
            beratio = 0.99;
            deratio = 0.999
                        ceratio = 0.999;
            eeratio= 0.999;
            
                 }else{//CheatC使用時
                                    
                aenum = 4;
            benum = 4;
             cenum = 1;
            denum = 4;
            eenum = 0;
            dev = 5;
            aeratio = 0.99;
            beratio = 0.99;
            deratio = 0.995;
            ceratio = 0.999;
            eeratio= 0.999;
            
                                    
                                }
            
        }
        else if(time < 100){
            
            if(cheatC != 8){
            
            aenum = 3;
            benum = 3;
            cenum = 1;
            cenum = 0;
            denum = 0;
                        dev = 5;
                        aeratio = 0.99;
            beratio = 0.99;
            deratio = 0.999
                        ceratio = 0.999;
            eenum = 0;
            eeratio= 0.999;
            
            }else{//CheatC使用時
                                    
                aenum = 4;
            benum = 4;
             cenum = 3;
            denum = 4;
            eenum = 0;
            dev = 5;
            aeratio = 0.99;
            beratio = 0.99;
            deratio = 0.995;
            ceratio = 0.999;
            eeratio= 0.999;
            
                                    
                                }
            
            
            
        }else if(time < 130){
            
                        if(cheatC != 8){
            
            aenum = 3;
            benum = 3;
            cenum = 1;
            denum = 1;
                        dev = 5;
                        aeratio = 0.99;
            beratio = 0.99;
            deratio = 0.999
                        ceratio = 0.999;
            eenum = 0;
            eeratio= 0.999;
            
            }else{//CheatC使用時
                                    
                aenum = 4;
            benum = 4;
             cenum = 3;
            denum = 4;
            eenum = 0;
            dev = 6;
            aeratio = 0.99;
            beratio = 0.99;
            deratio = 0.995;
            ceratio = 0.999;
            eeratio= 0.999;
            
                                    
                                }
            
            
            
        }else if(time < 150){
            
                        if(cheatC != 8){
            
            
              aenum = 3;
            benum = 3;
            cenum = 1;
            denum = 1;
                        dev = 5;
                        aeratio = 0.99;
            beratio = 0.99;
            deratio = 0.999
                        ceratio = 0.999;
            eenum = 1;
         eeratio= 0.999;
            
                }else{//CheatC使用時
                                    
                aenum = 4;
            benum = 4;
             cenum = 3;
            denum = 4;
            eenum = 1;
            dev = 6;
            aeratio = 0.99;
            beratio = 0.99;
            deratio = 0.995;
            ceratio = 0.999;
            eeratio= 0.999;
            
                                    
                                }
            
            
        }else if(time < 180){
           
                          if(cheatC != 8){
          
            
            aenum = 3;
            benum = 3;
            cenum = 2;
            denum = 1;
                        dev = 5;
                        aeratio = 0.99;
            beratio = 0.99;
            deratio = 0.999
                        ceratio = 0.999;
            eenum = 1;
             eeratio= 0.999;
            
             }else{//CheatC使用時
                                    
                aenum = 5;
            benum = 5;
             cenum = 4;
            denum = 4;
            eenum = 1;
            dev = 7;
            aeratio = 0.995;
            beratio = 0.995;
            deratio = 0.995;
            ceratio = 0.999;
            eeratio= 0.999;
            
                                    
                                }
            
            
            
        }else if(time < 200){
            
                        if(cheatC != 8){
          
            
              aenum = 3;
            benum = 3;
            cenum = 3;
            denum = 1;
                        dev = 5;
                        aeratio = 0.99;
            beratio = 0.99;
            deratio = 0.999
                        ceratio = 0.999;
            eenum = 1;
            eeratio= 0.999;
            
        }else{ //CheatC使用時
                                    
                aenum = 5;
            benum = 5;
             cenum = 4;
            denum = 5;
            eenum = 1;
            dev = 7;
            aeratio = 0.994;
            beratio = 0.994;
            deratio = 0.995;
            ceratio = 0.999;
            eeratio= 0.999;
            
                                    
                                }
                
            
        }else if(time < 230){
            
                          if(cheatC != 8){
            
              aenum = 3;
            benum = 3;
            cenum = 3;
            denum = 2;
                        dev = 6;
                        aeratio = 0.99;
            beratio = 0.99;
            deratio = 0.999
                        ceratio = 0.999;
            eenum = 1;
            eeratio= 0.999;
            
            }else{ //CheatC使用時
                                    
                aenum = 5;
            benum = 5;
             cenum = 5;
            denum = 5;
            eenum = 1;
            dev = 7;
            aeratio = 0.994;
            beratio = 0.994;
            deratio = 0.995;
            ceratio = 0.999;
            eeratio= 0.999;
            
                                    
                                }
        
            
        }else if(time < 300){
            
                          if(cheatC != 8){
            
            
            aenum = 4;
            benum = 4;
            cenum = 4;
            denum = 4;
                        dev = 5;
                        aeratio = 0.99;
            beratio = 0.99;
            deratio = 0.999
                        ceratio = 0.999;
            eenum = 1;
            eeratio= 0.999;
            
            }else{ //CheatC使用時
                                    
                aenum = 5;
            benum = 5;
             cenum = 5;
            denum = 5;
            eenum = 1;
            dev = 7;
            aeratio = 0.993;
            beratio = 0.993;
            deratio = 0.995;
            ceratio = 0.999;
            eeratio= 0.999;
            
                                    
                                }
        
            
        }else if(time < 400){
            
                 if(cheatC != 8){
            
            
              aenum = 5;
            benum = 5;
            cenum =5;
            denum = 5;
            eenum = 1;
                        dev = 5;
                        aeratio = 0.99;
            beratio = 0.99;
            deratio = 0.999
                        ceratio = 0.999;
            eeratio= 0.999;
            
            }
            
        }else if(time < 500){
            
                 if(cheatC != 8){
            
            
              aenum = 5;
            benum = 5;
            cenum =5;
            denum = 5;
            eenum = 1;
                        dev = 7;
                        aeratio = 0.99;
            beratio = 0.99;
            deratio = 0.999
                        ceratio = 0.999;
            eeratio= 0.999;
            
             }
            
        }
        
        if((time >= 500 && cheatC != 8)||(time >= 300 && cheatC == 8)){
            
                        eenum = 1;
            
              if(cheatC != 8){
            dev = 7;
            
                               }else{ 
                                dev = 8;
               
                               }
                  
            
            if(levelp<420000){
              aenum = 5;
            benum = 5;
            cenum = 5;
            denum = 5;
                            aeratio = 0.99;
            beratio = 0.99;
            deratio = 0.999
                            ceratio = 0.999;
                            eeratio = 0.95;
            }else if(levelp<500000){
              aenum = 7;
            benum = 7;
            cenum = 5;
            denum = 5;
                            aeratio = 0.99;
            beratio = 0.99;
            deratio = 0.999
                            ceratio = 0.999;
                            eeratio = 0.95;
            }else if(levelp<600000){
                  aenum = 7;
            benum = 7;
            cenum =7;
            denum = 5;
                            aeratio = 1;
            beratio = 1;
            deratio = 1;
                            ceratio = 0.95;
                            eeratio = 1;
            }else if(levelp<700000){
                  aenum = 7;
            benum = 7;
            cenum =7;
            denum = 5;          
                            aeratio = 0.999;
            beratio = 0.999;
            deratio = 0.999;
                ceratio = 0.95;
                            eeratio = 0.999;
            }else if(levelp<800000){
                  aenum = 10;
            benum = 10;
            cenum =7;
            denum = 5;            
                            aeratio = 0.995;
            beratio = 0.995;
            deratio = 1;
                ceratio = 1;
                            eeratio = 0.95;
            }else if(levelp<900000){
                  aenum = 10;
            benum = 10;
            cenum =7;
            denum = 5;            
                            aeratio = 0.998;
            beratio = 0.998;
            deratio = 0.95;
                ceratio = 1;
                            eeratio = 0.995;
            }else{
                  aenum = 10;
            benum = 10;
            cenum =10;
            denum = 5;            
                    aeratio = 0.99;
            beratio = 0.99;
            deratio = 0.997;
                ceratio = 0.999;
                            eeratio = 0.95;
            }

        }
        
        
        if(cheatC != 8){
            aev=3;
            bev=4;
        }else{
        aev=3.6;
            bev=4.4;
            
        }
      
        
        
        
        //ポーズ
        
        document.getElementById( "pause" ).innerHTML = "";
        if (pausetime > 0){
            pausetime = pausetime -1;
        }
        
    if (k == "SPACE" && pausetime == 0 && sizealert == 0){
                    pausetime = 20;
            scene ="pause";
          
    soundpause.src = "mp3/pause.mp3";
        soundpause.play();
        }
    
    
    
    
    
//当たり判定
        document.getElementById( "player" ).style.left = sx;
 document.getElementById( "player" ).style.top = sy;
 
        
atarix = sx + charax;
atariy = sy + charay;
    

    
    //斜め移動の速度調整
if (lrk =="EMPTY"||udk == "EMPTY"){
    actspeed = speed;
}else{
    actspeed = Math.sqrt(2)*speed*0.5
}
        
        //歩き判定
    
    if(lrk=="EMPTY" && udk=="EMPTY"){
        walk = 0;
    }else{
        walk = 1;
    }
    
　//移動ここから
        if(damage >= 0 && walk == 1){
　if( lrk == "LEFT" ){
      sx = sx - actspeed;
     if(udk != "DOWN"){
     vec ="left";
     }
     
   }    

　if( lrk == "RIGHT" ){
      sx = sx + actspeed;
          if(udk != "DOWN"){
     vec ="right";
     }
   }    

　if( udk == "UP" ){
      sy = sy - actspeed; 
     if(lrk == "EMPTY"){
     vec ="up";
     }
   }    

　if( udk == "DOWN" ){
      sy = sy + actspeed;  
          
     vec ="down";
     
   }  
        }
    
    
//キャラ移動限界点
    if( sx <= 250 ){
         sx = 250;
      }
    if( sx >= 884 ){
         sx = 884;
      } 
    if( sy <= 100 ){
         sy = 100;
      } 
    if( sy >= 650 ){
         sy = 650;
      }

    
    //静止モーション・アニメーション・座標調整
if(walk == 0 && damage >= 0){
    if (vec == "down"){
 document.getElementById( "player" ).innerHTML = "<img src = image/down.png>"  
    }if (vec == "up"){
 document.getElementById( "player" ).innerHTML = "<img src = image/up.png>"  
    }if (vec == "left"){
 document.getElementById( "player" ).innerHTML = "<img src = image/left.png>"  
    }if (vec == "right"){
 document.getElementById( "player" ).innerHTML = "<img src = image/right.png>"  
    }
}else if(walk == 1 && damage >= 0){
     if (vec == "down"){
 document.getElementById( "player" ).innerHTML = "<img src = image/down_anim.png>"           
    }if (vec == "up"){
 document.getElementById( "player" ).innerHTML = "<img src = image/up_anim.png>"  
    }if (vec == "left"){
 document.getElementById( "player" ).innerHTML = "<img src = image/left_anim.png>"  
    }if (vec == "right"){
 document.getElementById( "player" ).innerHTML = "<img src = image/right_anim.png>"  
    }
}
    
           //スコアボーナス
        if(p >= 50000 * bonus){
        bonus = bonus + 1;
             sounditem.src = "mp3/1UP.mp3";
        sounditem.play();
            if(stock<5){
                stock = stock + 1;
            }
        
        }
        
        
    }
    //ブーメランショット
        
        
        
        if (attack == "EMPTY" && shottime == 0){
        shottime = 1;
    }
    
        
        if (fourway == 0 || fourway == 1){
    
    if (attack == "ON" && weapon == 1 && shottime == 1 && damage >= 0 && scene == "game"){
        
    soundweapon.src = "mp3/throw.mp3";
        
    soundweapon.play();
        weapon = 0;
        weaponcatch[0]=0;
wx[0] = atarix - wsize * 0.5;
wy[0] = atariy - wsize * 0.5;
        
        document.getElementById( "buki" + 0 ).innerHTML = "<img src = image/weapon_anim.png width=25>";
  
        wvec = vec;
        
                         weaponv = wv;
        
    }
    
    if (weapon == 0){
              
     if (wvec == "down"){
          wx[0] = atarix - wsize * 0.5;
         wy[0] = wy[0] + weaponv;
            }if (wvec == "up"){
 wx[0] = atarix - wsize * 0.5;
        wy[0] = wy[0] -weaponv;
    }if (wvec == "left"){
 wy[0] = atariy - wsize * 0.5;
        wx[0] = wx[0] - weaponv;
    }if (wvec == "right"){
 wy[0] = atariy - wsize * 0.5;
         wx[0] = wx[0] + weaponv;
    }
        if(scene == "game"){
        
     if (wvec == "down" && wy[0]<atariy && weaponv < wv){
          document.getElementById( "buki"+0 ).innerHTML = ""
         chain = 1;
         weapon = 1;
                     weaponcatch[0]=1;
         shottime = 0;
         wx[0] = 0;
         wy[0] = 0;
         wvec = "";
         weaponv = wv;
            }if (wvec == "up" && wy[0] > atariy&& weaponv < wv){
  document.getElementById( "buki"+0 ).innerHTML = ""
                chain = 1;
         weapon = 1;
                            weaponcatch[0]=1;
                shottime = 0;
         wx[0] = 0;
         wy[0] = 0;
                        wvec = "";
                         weaponv = wv;
               
}if (wvec == "left" && wx[0] > atarix && weaponv < wv){
document.getElementById( "buki"+0 ).innerHTML = ""
    chain = 1;
         weapon = 1;
            weaponcatch[0]=1;
    shottime = 0;
         wx[0] = 0;
         wy[0] = 0;
            wvec = "";
             weaponv = wv;
    }if (wvec == "right" && wx[0] < atarix && weaponv < wv){
 document.getElementById( "buki"+0 ).innerHTML = ""
        chain = 1;
         weapon = 1;
                    weaponcatch[0]=1;
        shottime = 0;
         wx[0] = 0;
         wy[0] = 0;
                wvec = "";
                 weaponv = wv;
        
    }
            
        }
        
          weaponv = weaponv - wvdown;
    
        if(weaponv <= -wv){
            meaponv = -wv;
        }
        
       
        
    }
            
        
            
        }
        
          if(fourway == 1 && weapon == 1){
            fourway = 2;
        }
        
        //4way
        
        if (fourway == 2 || fourway == 1.5){
    

            
    if (attack == "ON" && weapon == 1 && shottime == 1 && damage >= 0 && scene == "game"){
        weapon = 0;
        
        
    soundweapon.src = "mp3/throw.mp3";
        
    soundweapon.play();
        
                   for (i = 0 ; i < 4; i++){
wx[i] = atarix - wsize * 0.5;
wy[i] = atariy - wsize * 0.5;
        
        document.getElementById( "buki" + i ).innerHTML = "<img src = image/weapon_anim.png width=25>";
        
          weaponcatch[i] =0;
        
    }
        
                                 weaponv = wv;
               
           }
        
    if (weapon == 0){
        

        
         
        
          wx[0] = atarix - wsize * 0.5;
         wy[0] = wy[0] + weaponv;
        
 wx[1] = atarix - wsize * 0.5;
        wy[1] = wy[1] - weaponv;
    
 wy[2] = atariy - wsize * 0.5;
        wx[2] = wx[2] - weaponv;
    
 wy[3] = atariy - wsize * 0.5;
         wx[3] = wx[3] + weaponv;
    
                if(scene == "game"){
        
                          for (i = 0 ; i < 4; i++){
        
     if (i == 0 && wy[i]<atariy && weaponv < wv && weaponcatch[i] ==0){
           weaponcatch[i] =1;
        
            }
        if (i == 1 && wy[i] > atariy&& weaponv < wv && weaponcatch[i] ==0){
            weaponcatch[i] =1;
              
}
        if (i == 2 && wx[i] > atarix && weaponv < wv && weaponcatch[i] ==0){
    weaponcatch[i] =1;

      }
        if (i == 3 && wx[i] < atarix && weaponv < wv && weaponcatch[i] ==0){
    weaponcatch[i] =1;
    }
                              if (weaponcatch[i]==1){
 document.getElementById( "buki"+i ).innerHTML = "";    
                                  
         wx[i] = 0;
         wy[i] = 0;
                              }
                              
                      
                  }
                    
                }
        if(weaponcatch[0]==1 && weaponcatch[1]==1 && weaponcatch[2]==1 && weaponcatch[3]==1){
                    chain = 1;
            
            
            
           
        
        weapon = 1;
         shottime = 0;
                     weaponv = wv;
            
            for (i = 0 ; i < 4; i++){
            
            wx[i] = 0;
wy[i] = 0;
            }
        

        }
                
        
         weaponv = weaponv - wvdown;
    if(weaponv <= -wv){
            meaponv = -wv;
        }
        
    
            }
            
        }
        if(fourway == 1.5 && weapon == 1){
                fourway = 0;
            }
        
    
    //ブーメラン位置
    
                for( bi = 0; bi < 4; bi++){
    
    document.getElementById( "buki" + bi ).style.left = wx[bi];
document.getElementById( "buki" + bi ).style.top = wy[bi];
                    
                   if(weaponcatch[bi] == 0  ){
            document.getElementById( "buki" + bi ).innerHTML = "<img src = image/weapon_anim.png width=25>";                    
                    }
                    
                }
        
        for (i = 0 ; i < 4; i++){
    wax[i] = wx[i] + 12.5; 
    way[i] = wy[i] + 12.5;
}

        
     
    
    //アイテム生成
        for( i = 0; i < inum; i++){
    
    
if(im[i] == 0 && i <= 1 && Math.random( ) > 0.9985){ //スピードアップ


       ifx[i] = Math.floor(Math.random( ) * 634 ) + 250;
           im[i] = 1;
       iy[i] = 40;
    ivy[i] = Math.floor(Math.random() * iv) + 2;
    
    if (Math.random() > 0.5){
        ixx[i] = "cos";
 
    }else{
        
               ixx[i] = "sin";
    } 
   }
            
            if(im[i] == 0 && i <= 1 && Math.random( ) > 0.999){ //アタックアップ


       ifx[i] = Math.floor(Math.random( ) * 634 ) + 250;
           im[i] = 1;
       iy[i] = 40;
    ivy[i] = Math.floor(Math.random() * iv) + 2;
    
    if (Math.random() > 0.5){
        ixx[i] = "cos";
 
    }else{
        
               ixx[i] = "sin";
    } 
   }
            
            if(im[i] == 0 && i < 5 && Math.random( ) > 0.9996 && time >= 30){　//レアアイテム


       ifx[i] = Math.floor(Math.random( ) * 634 ) + 250;
           im[i] = 1;
       iy[i] = 40;
    ivy[i] = Math.floor(Math.random() * iv) + 2;
    
    if (Math.random() > 0.5){
        ixx[i] = "cos";
 
    }else{
        
               ixx[i] = "sin";
    }
   }

            
            
            
            if(im[i] == 1){
                if (ixx[i] =="cos"){
                ix[i]=ifx[i] + Math.cos(0.015 * iy[i])*100;
                }if (ixx[i] =="sin"){
                ix[i]=ifx[i] + Math.sin(0.015 * iy[i])*100;
                }
        iy[i]=iy[i]+ivy[i];
                
            
                   if( iy[i] > 800+1 ){
       im[i] = 0;
       document.getElementById( "item" + i ).innerHTML = "";
   } 

                
            }
            
            document.getElementById( "item" + i ).style.left = ix[i];
   document.getElementById( "item" + i ).style.top = iy[i];
            iax[i] = ix[i] +25;
            iay[i]= iy[i] +25;

                    for( bi = 0; bi < 4; bi++){
        
    
    if (((Math.abs (atarix - iax[i]) < 25 && Math.abs (atariy - iay[i])<25　&& damage >= 0)
     ||((Math.abs (wax[bi] - iax[i]) < 25 && Math.abs (way[bi] - iay[i]) < 25) && weaponcatch[bi]==0 ))&& im[i] == 1 && scene =="game"){
     im[i] = 0;
        if(i == 4){
 sounditem.src = "mp3/1UP.mp3";
        sounditem.play();
            
        }else{
         sounditem.src = "mp3/item.mp3";
        sounditem.play();
    
        }
               document.getElementById( "item" + i ).innerHTML = "";
        if( i == 0){
            p = p + 50;
                speed = speed + 1; //移動速度アップ
if (speed >= 8.5){	
speed = 8.5;
}
        }
         if( i == 1){
                         p = p + 50;
attackup = attackup + 1;
             
      if(attackup >= 8){   
        attackup = 8;
}

        }
          if( i == 2){
                              voice.src = "voice/4way.mp3";
        voice.play();
                  p = p + 100;
              if (fourway == 0){
              fourway = 1;　//4way
              }    if (fourway == 1.5){
              fourway = 2;　//4way修復
              }
        }
          if( i == 3){
             voice.src = "voice/heart.mp3";
        voice.play();
              if (life < 2){
              life = 2;
              }else{
               p = p + 200;       
              }
        }
        if( i == 4){
              if (stock < 5){
              stock = stock + 1;
              }else{
               p = p + 100;       
              }
        }
  	
}
                    }
    
        
        
        if(attackup == 8){   
        wv = 33
        wvdown = 1.1
    }else{
            wv = 15 * Math.pow(1.1, attackup)
            wvdown = 0.5 * Math.pow(1.1, attackup)
            
        }
        
        
        
        
        
        
        
        }

        
             
  if (im[0] == 1){
      document.getElementById( "item" + 0 ).innerHTML = "<img src = image/speed.png width = 50>"
  }
    if (im[1] == 1){
      document.getElementById( "item" + 1 ).innerHTML = "<img src = image/weaponspeed.png width = 50>"
  } 
        if (im[2] == 1){
      document.getElementById( "item" + 2 ).innerHTML = "<img src = image/4way.png width = 50>"
  }
         if (im[3] == 1){
      document.getElementById( "item" + 3 ).innerHTML = "<img src = image/heart.png width = 50>"
  }
        if (im[4] == 1){
      document.getElementById( "item" + 4 ).innerHTML = "<img src = image/zanki.png width = 50>"
  }

        
        //A ENEMY生成
        for( i = 0; i < aenum; i++){
    
            
    
if(aem[i] == 0 && Math.random( ) > aeratio){


       aex[i] = Math.floor(Math.random( ) * 634 ) + 250;
           aem[i] = 1;
       aey[i] = 0;
    
    }
            
       if(aem[i]==0){
         document.getElementById( "Aenemy" + i ).innerHTML = "";
       }     
            
            if(aem[i] == 1){
            aey[i]=aey[i]+aev;
                
         
       document.getElementById( "Aenemy" + i ).innerHTML = "<img src = image/enemy_anim.png>";
   

                if(aey[i]>800+1){
                    aem[i] = 0;
                }
                
                
            }
            
            document.getElementById( "Aenemy" + i ).style.left = aex[i];
   document.getElementById( "Aenemy" + i ).style.top = aey[i];
            aaey[i] = aey[i] +46;
            aaex[i]= aex[i] +65 * 0.5;

                    for( bi = 0; bi < 4; bi++){
        
    if (((Math.abs (wax[bi] - aaex[i]) < 30 && Math.abs (way[bi] - aaey[i]) < 30) && weaponcatch[bi]==0 )&& aem[i] == 1 && scene == "game"){
     aem[i] = 2;
       document.getElementById( "Aenemy" + i ).innerHTML = "<img src = image/enemyD_anim.png>";
        
            sounddefeat.src = "mp3/defeat.mp3";
            sounddefeat.play();
        
        
        p = p + 100 * chain;
        chain = chain + 1;
        
}
                    }
                        
                        if (((Math.abs (atarix - aaex[i]) < 40 && Math.abs (atariy - aaey[i])<40))&& aem[i] == 1 && damage == 0){
                            
                            damage = 1;
        
        
  	
}
                        
                    if(aem[i] == 2){
            aey[i]=aey[i]-10;
                
            if( aey[i] < 0 ){
       aem[i] = 0;
   }     
                        
                        
                    }
    
        }
    
        //B ENEMY生成
        for( i = 0; i < benum; i++){
    
            
    
if(bem[i] == 0 && Math.random( ) > beratio){


       bex[i] = Math.floor(Math.random( ) * 634 ) + 250;
           bem[i] = 1;
       bey[i] = 800+1;
    
    }
            
         if(bem[i] == 0){
     document.getElementById( "Benemy" + i ).innerHTML = "";

         }   
            
            if(bem[i] == 1){
            bey[i]=bey[i]-bev;
                
            if( bey[i] <= 0 ){
                   bem[i] = 0;
      }
                document.getElementById( "Benemy" + i ).innerHTML = "<img src = image/BENEMY.png>";
   

                
            }
            
            document.getElementById( "Benemy" + i ).style.left = bex[i];
   document.getElementById( "Benemy" + i ).style.top = bey[i];
            baey[i] = bey[i] +46;
            baex[i]= bex[i] +65 * 0.5;

                    for( bi = 0; bi < 4; bi++){
        
    if (((Math.abs (wax[bi] - baex[i]) < 30 && Math.abs (way[bi] - baey[i]) < 30) && weaponcatch[bi]==0 )&& bem[i] == 1&& scene == "game"){
     bem[i] = 2;
       document.getElementById( "Benemy" + i ).innerHTML = "<img src = image/enemyD_anim.png>";
        
            sounddefeat.src = "mp3/defeat.mp3";
            sounddefeat.play();
        
        p = p + 150 * chain;
        chain = chain + 1;
        
}
                    }
                        
                        if (((Math.abs (atarix - baex[i]) < 40 && Math.abs (atariy - baey[i])<40))&& bem[i] == 1 && damage == 0){
                            
                            damage = 1;
        
        
  	
}
                        
                    if(bem[i] == 2){
            bey[i]=bey[i]-10;
                
            if( bey[i] < 0 ){
       bem[i] = 0;
   }     
                        
                        
                    }
    
        }
        
           //C ENEMY生成
        for( i = 0; i < cenum; i++){
    
if(cem[i] == 0 && Math.random( ) > ceratio){
    
    
                             cev[i] = 8;
    cevec[i] = Math.floor(Math.random() * 2);
    
        adcev[i] = Math.floor(Math.random() * 4);
    
    cev[i] = cev[i]+adcev[i];
    
    if (cevec[i] == 1){
        cevec[i] = "left";
        cex[i] = 1200+1;
        }else{
            cevec[i] = "right";
        cex[i] = -100;
        }
    
           cem[i] = 1;
    
       cey[i] = Math.floor(Math.random( ) * 550 ) + 100;
    
    }
            if(cem[i] == 0){
                 document.getElementById( "Cenemy" + i ).innerHTML = "";
            }
            
            if(cem[i] == 1){
                 if (cevec[i] == "left"){
                     
            document.getElementById( "Cenemy" + i ).innerHTML = "<img src = image/CENEMYL.png>";
                     
            cex[i]=cex[i]-cev[i];
                 }
                 if (cevec[i] == "right"){
                     
            cex[i]=cex[i]+cev[i];
                     
            document.getElementById( "Cenemy" + i ).innerHTML = "<img src = image/CENEMYR.png>";
                 }
                
            if( cex[i] < -100 || cex[i] > 1200+1 ){
                   cem[i] = 0;
   } 

                
            }
            
            document.getElementById( "Cenemy" + i ).style.left = cex[i];
   document.getElementById( "Cenemy" + i ).style.top = cey[i];
            caey[i] = cey[i] +46;
            caex[i]= cex[i] +65 * 0.5;

                    for( bi = 0; bi < 4; bi++){
        
    if (((Math.abs (wax[bi] - caex[i]) < 30 && Math.abs (way[bi] - caey[i]) < 30) && weaponcatch[bi]==0 )&& cem[i] == 1&& scene == "game"){
    
       document.getElementById( "Cenemy" + i ).innerHTML = "<img src = image/enemyD_anim.png>";
        
            sounddefeat.src = "mp3/defeat.mp3";
            sounddefeat.play();
        
         cem[i] = 2;
        
        p = p + 1000 * chain;
        chain = chain + 1;
        
}
                    }
                        
                        if (((Math.abs (atarix - caex[i]) < 40 && Math.abs (atariy - caey[i])<40))&& cem[i] == 1 && damage == 0){
                            
                            damage = 1;
        
        
  	
}
                        
                    if(cem[i] == 2){

            cey[i]=cey[i]-10;
                
            if( cey[i] < 0 ){
       cem[i] = 0;
   }     
                        
                        
                    }
    
        }
        
     //D ENEMY生成
        for( i = 0; i < denum; i++){
    
if(dem[i] == 0 && Math.random( ) > deratio){
    
    devec[i] = Math.floor(Math.random() * 2);

    deate[i] = 0;
    
    if (devec[i] == 1){
        dex[i] = 1200+1;
        }else{
        dex[i] = -100;
        }
    
           dem[i] = 1;
    
       dey[i] = Math.floor(Math.random( ) * 550 ) + 100;
    
    }
            if(dem[i] == 0){
                 document.getElementById( "Denemy" + i ).innerHTML = "";
            }
                
            if(dem[i] == 1){
            
                 document.getElementById( "Denemy" + i ).innerHTML = "<img src = image/DENEMY.png>";
            
                 //追跡モード
                if(scene == "game" && deate[i] == 0){
                    
                 //追跡x軸
                    
                  if( Math.abs (atariy - daey[i]) < 40 && actdev[i]>=actspeed && udk != "EMPTY" && sy != 100 && sy != 650){//自分の方が遅いときの不自然なカクツキ防止
               
                      if(daey[i]> atariy){
                   dey[i] = dey[i]-actspeed;
                      }else{
                   dey[i] = dey[i]+actspeed;
                          
                      }
                      
                        deynaname[i] = 0.8;
                
              }else if(daey[i]> atariy && Math.abs (daey[i] - atariy) > 20){
                dey[i] = dey[i]-actdev[i]; 
                     deynaname[i] = 1;
            }else if(daey[i]< atariy && Math.abs (daey[i] - atariy) > 20){
                dey[i] = dey[i]+actdev[i]; 
                 
                     deynaname[i] = 1;
            }else{
                  deynaname[i] = 0;
            }
                
                
            
            
            //追跡x軸
            if( Math.abs (atarix - daex[i]) < 40 && actdev[i]>=actspeed && lrk != "EMPTY"&& sx != 250 && sx != 884){//自分の方が遅いときの不自然なカクツキ防止
               
                      if(daex[i]> atarix){
                   dex[i] = dex[i]-actspeed;
                      }else{
                   dex[i] = dex[i]+actspeed;
                          
                      }
                      
                        dexnaname[i] = 0.8;
                
              }else if(daex[i]< atarix && Math.abs (daex[i] - atarix) > 20){
                dex[i] = dex[i]+actdev[i]; 
                       dexnaname[i] = 1;
            }else if(daex[i]> atarix && Math.abs (daex[i] - atarix) > 20){
                dex[i] = dex[i]-actdev[i]; 
                dexnaname[i] = 1;
            }else{
                dexnaname[i] = 0;
            }
                    }else{
 
                        //追跡解除
                        
    if (devec[i] == 1){
         dex[i] = dex[i]-dev;
        }else{
         dex[i] = dex[i]+dev; 
        }
                    
                      if( dex[i] < -100 || dex[i] > 1200+1 ){
                   dem[i] = 0;
  
   } 


                      dexnaname[i] = 0;
                }
                
               
                if(  deynaname[i] == 1 &&  dexnaname[i] == 1){ //斜め移動時、x方向とy方向の速度を落とす（ピタゴラスの定理より）
                actdev[i] = Math.sqrt(2)*dev*0.5;                    
                }else if(dexnaname[i] == 0.8 || deynaname[i] == 0.8){　//「自分の方が遅いときの不自然なカクツキ防止」状態での、もう一軸の速度を計算（ピタゴラスの定理より）
                    
                    actdev[i] = Math.sqrt(Math.pow(dev, 2)-Math.pow(actspeed, 2));
                    
                }else{ //真っすぐ移動する状態
                 actdev[i] = dev;       
                }
                
              

            }

            
              document.getElementById( "Denemy" + i ).style.left = dex[i];
   document.getElementById( "Denemy" + i ).style.top = dey[i];
            daey[i] = dey[i] +46;
            daex[i]= dex[i] +65 * 0.5;
            
            
           
          

                    for( bi = 0; bi < 4; bi++){
        
    if (((Math.abs (wax[bi] - daex[i]) < 30 && Math.abs (way[bi] - daey[i]) < 30) && weaponcatch[bi]==0 )&& dem[i] == 1 && scene == "game"){
    
       document.getElementById( "Denemy" + i ).innerHTML = "<img src = image/enemyD_anim.png>";
        
            sounddefeat.src = "mp3/defeat.mp3";
            sounddefeat.play();
        
         dem[i] = 2;
        
        p = p + 400 * chain;
        chain = chain + 1;
        
}
                    }
                        
                        if (((Math.abs (atarix - daex[i]) < 40 && Math.abs (atariy - daey[i])<40))&& dem[i] == 1 ){
                            
                            if(damage == 0){
                            damage = 1;
                            }
                          
                            
                            deate[i] = 1;
                        //    if(scene == "game"){
    // dem[i] = 2; //接触時敵を消滅させる場合はスラッシュを外す
  //    document.getElementById( "Denemy" + i ).innerHTML = "<img src = image/enemyD_anim.png>";
     //                       }
        
                            
  	
}
                        
                    if(dem[i] == 2){
                         dev[i] = 13;
            dey[i]=dey[i]-10;
                
            if( dey[i] < 0 ){
       dem[i] = 0;
   }     
                        
                        
                    }
    
        }
        
          //E ENEMY生成
    
    if(eenum != 0){        
    
        if(eem == 0){
               document.getElementById( "Eenemy" ).innerHTML = "";
   
        }
        
if(eem == 0 && Math.random( ) > eeratio){


       eex = Math.floor(Math.random( ) * 634 ) + 250;
           eem = 1;
       eey = 0;
    
    }
            
         
           document.getElementById( "Eenemy" ).style.left = eex;
   document.getElementById( "Eenemy" ).style.top = eey;
            eaey = eey +46;
            eaex= eex +65 * 0.5;

            
            if(eem == 1 && eey<100){
                    ecount = 0;
                  document.getElementById( "Eenemy" ).innerHTML = "<img src = image/EENEMY1.png>";
                eey = eey + 4;
            }
        
        if(eem == 1 && eey>=100){
                eem = 2;
            soundtwinkle.src = "mp3/twinkle_1.mp3";
            soundtwinkle.loop = true;
            soundtwinkle.play();
                            }
        
        if(eem == 2){
              document.getElementById( "Eenemy" ).innerHTML = "<img src = image/EENEMY.png>";
             ecount = ecount + 1;
        }
        
        if (ecount>=60){
            eem = 3;
        }
        
        if(eem == 3){
            ecount = 0;
            
            eevx = atarix - eaex;
                        eevy = atariy - eaey;
            
            
            //ピタゴラスの定理
            
            eev = Math.sqrt(Math.pow(eevx, 2) + Math.pow(eevy, 2));
            
            
            
              if (speed == 1.5){
                               eespeed = 10;
               }else if (speed < 3.5){
                            eespeed = 13;
              }else if (speed < 6.5){
                  eespeed = 17;
                   }  else{
          eespeed = 20; 
            }
            
            //角度だけを割り出す
            
             eevx = (eevx/eev)*eespeed;
                        eevy = (eevy/eev)*eespeed;
           
            if(eevx== 0 && eevy==0){
                eevy = eespeed;
            }

            
            
                  document.getElementById( "Eenemy" ).innerHTML = "<img src = image/EENEMY1.png>";
           
            eem = 4;
            
            
            soundtwinkle.src = "mp3/twinkle_2.mp3";
                        soundtwinkle.loop = false;
            soundtwinkle.play();
        }
        
         if(eem == 4 || eem == 5){
            eex = eevx + eex;
                         eey = eevy + eey;
           }
        
                
            if( eey > 800+1 || eex > 1200+1 || eex < -100){
                   eem = 0;
    } 

                
            
       
                    for( bi = 0; bi < 4; bi++){
        
    if (((Math.abs (wax[bi] - eaex) < 30 && Math.abs (way[bi] - eaey) < 30) && weaponcatch[bi]==0 )&& eem == 4){
       document.getElementById( "Eenemy" ).innerHTML = "<img src = image/EENEMY4.png>";
        eem = 5;
        
}
                    }
                        
                        if (((Math.abs (atarix - eaex) < 40 && Math.abs (atariy - eaey)<40))&& (eem == 4||eem ==5) && damage == 0){
                            
                            damage = 1;
        
        
  	
}
    }
                        
                
                        
                        
                    
    if(walk == 0 && attack == "EMPTY" && idol <200){
        idol = idol + 1
    }
        
        if (walk == 0 && idol == 200 && attack == "EMPTY"){
          document.getElementById( "player" ).innerHTML = "<img src = image/IDOL.png>";   
        }
        
        if(walk == 1 || attack == "ON"){
            idol = 0;
        }
    
    
        
        
        //damage処理
    
         //メモ
        //damage == 0　平常（唯一ダメージを受けるタイミング）
        //damage == 1　ダメージ
        //-60 <= damage <= -40 回転モーション（ミス）、終了後damage == 2へ
        //2 <= damage < 160 点滅
        
        if (damage == 1 && scene == "game"){
            
            if(life == 2){
            life = life - 1;
                damage = 2;
            }else if (stock > 0){
                
                voice.src = "voice/ita.mp3";
        voice.play();
                
                     if(fourway == 2)  {   
                fourway = 1.5;
                }if(fourway == 1)  {   
                fourway = 0;
                }
                                damage = -60;
                idol =0;
                stock = stock - 1;
            }else if (stock == 0){
                      
                   scene = "miss";
                                    BGM.src = "mp3/tooBAD.mp3";
        BGM.play();
                BGM.volume = 1.0;
        BGM.loop = false;
                
                voice.src = "voice/yarareta.mp3";
        voice.play();
                
                     }    
        }
        
       
        
        
              if(damage < 0){
                             document.getElementById( "player" ).style.opacity = 1;
                  document.getElementById( "player" ).innerHTML = "<img src = image/miss_anim.png>";
                  if(damage > -40){
                      damage = 2;
                      shottime = 0; //押しっぱなしで投げられないようにする
                 
                  }
            }if(damage > 160){
                damage = 0;
                             document.getElementById( "player" ).style.opacity = 1;
            }
            if(damage > 120){
                                                  if(damage%2 ==1){
                             document.getElementById( "player" ).style.opacity = 0.2;
            }else{
                             document.getElementById( "player" ).style.opacity = 0.5;
            }
            }if(damage > 0 && damage <= 120){
                
                                 if(damage%2 ==1){
                             document.getElementById( "player" ).style.opacity = 0.1;
            }else{
                             document.getElementById( "player" ).style.opacity = 1;
            }
            }if(damage == 1){
                                             document.getElementById( "player" ).style.opacity = 1;
            }
        
        if(damage != 0){
            damage = damage + 1;
         
        }
        
       if(scene == "miss"){
        
                                document.getElementById( "player" ).style.opacity = 1;

           wepopa = wepopa -0.02;
           
           for( i = 0; i < 4; i++){
                
                          document.getElementById( "buki"+i ).style.opacity = wepopa;
                    }
        
          
        
        misscount = misscount + 1;
        
           i = 0;

        if(misscount < 7){
        document.getElementById( "player" ).innerHTML = "<img src = image/missdown.png>";
        }else if(misscount < 49){
            i = Math.floor((misscount - 7)/7);
        document.getElementById( "player" ).innerHTML = "<img src = image/DEFEAT_PLAYER"+i+".png>";
        }else if(misscount < 60){
        document.getElementById( "player" ).innerHTML = "";
        }else{
            scene = "missTogameover";
        }
        
        
        
        
        
    }
        
        
    } //scene = game ここまで
    
    if (scene == "pause"){
        
        walk = 0;
 
        //ポーズ時座標確定ここから
        
               document.getElementById( "player" ).style.left = sx;
 document.getElementById( "player" ).style.top = sy;
        
                        for( bi = 0; bi < 4; bi++){
    
    document.getElementById( "buki" + bi ).style.left = wx[bi];
document.getElementById( "buki" + bi ).style.top = wy[bi];
                            
                        }
        
        for( i = 0; i < inum; i++){
    
                document.getElementById( "item" + i ).style.left = ix[i];
   document.getElementById( "item" + i ).style.top = iy[i];
            
        }
        
        for( i = 0; i < aenum; i++){
    
               document.getElementById( "Aenemy" + i ).style.left = aex[i];
   document.getElementById( "Aenemy" + i ).style.top = aey[i];
            
        }
        
        for( i = 0; i < benum; i++){
    
               document.getElementById( "Benemy" + i ).style.left = bex[i];
   document.getElementById( "Benemy" + i ).style.top = bey[i];
            
        }
        
        for( i = 0; i < cenum; i++){
    
               document.getElementById( "Cenemy" + i ).style.left = cex[i];
   document.getElementById( "Cenemy" + i ).style.top = cey[i];
            
        }
        for( i = 0; i < denum; i++){
    
               document.getElementById( "Denemy" + i ).style.left = dex[i];
   document.getElementById( "Denemy" + i ).style.top = dey[i];
            
        }
        
                       document.getElementById( "Eenemy" ).style.left = eex;
   document.getElementById( "Eenemy" ).style.top = eey;
 
        //ここまで
        
        document.getElementById( "TEN" ).innerHTML = p;
        
        document.getElementById( "HiTEN" ).innerHTML = hi;
        
        
                                     document.getElementById( "player" ).style.opacity = 1;
                        BGM.volume = 0;
        soundtwinkle.volume = 0;
        
        document.getElementById( "pause" ).innerHTML = "<img src = image/pause.png>";

    if (pausetime > 0){
            pausetime = pausetime - 1;
        }
        
        if (k == "SPACE" && pausetime == 0 && sizealert == 0){
            
            soundtwinkle.volume = 1;
                               BGM.volume = 0.5;
    soundpause.src = "mp3/pause.mp3";
                    soundpause.play();

            pausetime = 20;
            scene ="game";
        }
    if(damage >= 0){    
if (idol == 200){
          document.getElementById( "player" ).innerHTML = "<img src = image/IDOL1.png>";   
        }else{        
        if (vec == "down"){
 document.getElementById( "player" ).innerHTML = "<img src = image/down.png>";
    }if (vec == "up"){
 document.getElementById( "player" ).innerHTML = "<img src = image/up.png>" ; 
    }if (vec == "left"){
 document.getElementById( "player" ).innerHTML = "<img src = image/left.png>";  
    }if (vec == "right"){
 document.getElementById( "player" ).innerHTML = "<img src = image/right.png>" ; 
    }
        }
    }else{
        document.getElementById( "player" ).innerHTML = "<img src = image/missdown.png>" ;
    }
        
            for( i = 0; i < aenum; i++){
                            if(aem[i] == 1){
          document.getElementById( "Aenemy" + i ).innerHTML = "<img src = image/enemy.png>";
                            }
            }

         for( i = 0; i < benum; i++){
                            if(bem[i] == 1){
          document.getElementById( "Benemy" + i ).innerHTML = "<img src = image/BENEMY1.png>";
                            }
             
            }
        
        for( i = 0; i < cenum; i++){
                            if(cem[i] == 1 && cevec[i] == "left"){
          document.getElementById( "Cenemy" + i ).innerHTML = "<img src = image/CENEMY1.png>";
                            }
               if(cem[i] == 1 && cevec[i] == "right"){
          document.getElementById( "Cenemy" + i ).innerHTML = "<img src = image/CENEMY1R.png>";
                            }
             
            }

            for( i = 0; i < denum; i++){
                            if(dem[i] == 1){
          document.getElementById( "Denemy" + i ).innerHTML = "<img src = image/DENEMY1.png>";
                            }
             
            }
     
                     if(eem == 2){
                         document.getElementById( "Eenemy" ).innerHTML = "<img src = image/EENEMY1.png>";
              
                            }
        
    }//scene = pause　ここまで
    
     if(scene == "missTogameover"){
         
        
         
         document.getElementById( "player" ).innerHTML = "";
        misscount = 0;
                             damage = 0;
                     
        if(shift == 0){
            
            
            pausetime=0;
        
        blackout = blackout + shiftspeed;
            if(blackout > 1){
                
                soundtwinkle.pause();
                
                                //ここから敵・アイテム非表示
                  for( i = 0; i < aenum; i++){
                       aem[i]=0;
          document.getElementById( "Aenemy" + i ).innerHTML = "";
                            
            }

         for( i = 0; i < benum; i++){
             bem[i]=0;
                  document.getElementById( "Benemy" + i ).innerHTML = "";
                            
             
            }
        
        for( i = 0; i < cenum; i++){
            cem[i]=0;
                    cev[i]= 8;
          document.getElementById( "Cenemy" + i ).innerHTML = ""; 
            }

            for( i = 0; i < denum; i++){
                dem[i]=0;
                                     document.getElementById( "Denemy" + i ).innerHTML = "";
             
            }
     
                         document.getElementById( "Eenemy" ).innerHTML = "";
                eem=0;
              
                for(i = 0; i < inum;i++){
                    cont = 1;
             im[i] = 0;
       document.getElementById( "item" + i ).innerHTML = "";   
                }
                
                //ここまで敵・アイテム非表示
                
                 for( i = 0; i < 4; i++){
                
                        weaponcatch[i] = 1;
                          document.getElementById( "buki"+i ).innerHTML = "";
                     document.getElementById( "buki"+i ).style.opacity = 1;
                    }
                wepopa = 1;
                
                document.getElementById( "select" ).innerHTML = "<img src = image/weapon_anim.png width=30>";
                                            document.getElementById( "select" ).style.top = 332;
                      document.getElementById( "select" ).style.left = 170;
        
                shift = 1;
                document.getElementById( "maple" ).style.top = 0;
                document.getElementById( "haikei" ).innerHTML = "<img src = image/gameover_continue.jpg>";
                document.getElementById( "maple" ).innerHTML = "<img src = image/gameover_continue1.png>";
                        document.getElementById( "STOCK" ).innerHTML = "";
                document.getElementById( "STOCKS" ).innerHTML = "";
 document.getElementById( "stat" ).innerHTML = "";
        document.getElementById( "TEN" ).innerHTML = "";
        document.getElementById( "HiTEN" ).innerHTML = "";
            document.getElementById( "heart" ).innerHTML = "";
            }
            
            
    }
        
        if(shift == 1){
        
        blackout = blackout - shiftspeed;
            if(blackout <= 0){
                blackout = 0;

                scene ="gameover";
                BGM.src = "mp3/gameover.mp3";
        BGM.play();
                BGM.volume = 0.5;
        BGM.loop = true;
                
                }
            
            }
    }
    if(scene == "gameover"){
        shift = 0;
        
        
        if(sizealert == 0){
          if(udk =="UP"){
              if(cont == 0){
                  soundok.src = "mp3/select.mp3";
                        soundok.play();
              }
                         cont = 1;       
            }    if(udk =="DOWN"){
                
              if(cont == 1){
                  soundok.src = "mp3/select.mp3";
                        soundok.play();
              }
                          cont = 0;
            }
        
    }
          if(cont == 1){
                            document.getElementById( "select" ).style.top = 332;
        
        
            }    if(cont == 0){
                                            document.getElementById( "select" ).style.top = 397;
            }
   
       if(sizealert == 0){ 
        if(k =="ENTER" && cont == 1){
            scene = "continuescene"
            i = 0;
            sy = 0;
            soundok.src = "mp3/OK.mp3";
                        soundok.play();
        }
        if(k =="ENTER" && cont == 0){
            
            
                cheatC = 0;
                cheatF = 0;
            
            if(hi >= 500000 && credits == 0){
                scene ="credits";
                credits =1;
            }else{
                scene = "gameoverTotitle";
            }
            BGM.pause();
            soundok.src = "mp3/OK.mp3";
                        soundok.play();
        }
       }
    }
if(scene == "gameoverTotitle"){
                     
        if(shift == 0){
        
        blackout = blackout + shiftspeed; //少し遅めに
            if(blackout > 1){
                shift = 1;
                                        document.getElementById( "select" ).style.top = 465;
                      document.getElementById( "select" ).style.left = 240;
                document.getElementById( "select" ).innerHTML = "";
       
                                document.getElementById( "maple" ).innerHTML = "";
         //タイトル表示処理
    if(night ==0){
                            document.getElementById( "haikei" ).innerHTML = "<img src = image/title.jpg>";
                      document.getElementById( "maple" ).innerHTML = "<img src = image/maple.png>";
            
            } else{
                          document.getElementById( "haikei" ).innerHTML = "<img src = image/titlenight.jpg>";
                document.getElementById( "maple" ).innerHTML = "<img src = image/maple_night.png>";
            }
    document.getElementById( "logo" ).innerHTML = "<img src = image/logo.png>";
     
    //ここまで
        BGM.pause();


                      }
            
            
    }
    if(shift == 1){
        blacktime ++;
        if(blacktime >= 20){
                                               BGM.src = "mp3/title.mp3";
        BGM.play();
                BGM.volume = 0.5;
        BGM.loop = false;
shift = 2;
            blacktime = 0;
        }
    }
        
        if(shift == 2){
        
        blackout = blackout - shiftspeed;
            if(blackout <= 0){
                blackout = 0;
                scene ="title";
                
                }
            }
}
   

    if(scene == "title"){
        
         //タイトル表示処理
    if(night ==0){
                            document.getElementById( "haikei" ).innerHTML = "<img src = image/title.jpg>";
                      document.getElementById( "maple" ).innerHTML = "<img src = image/maple.png>";
            
            } else{
                          document.getElementById( "haikei" ).innerHTML = "<img src = image/titlenight.jpg>";
                document.getElementById( "maple" ).innerHTML = "<img src = image/maple_night.png>";
            }
    document.getElementById( "logo" ).innerHTML = "<img src = image/logo.png>";
     
    //ここまで
        
                          document.getElementById( "select" ).innerHTML = "<img src = image/weapon_anim.png width=30>";
        
        shift = 0;
        

        
        if(hi < soundp){

         document.getElementById( "mode" ).innerHTML = "<img src = image/mode_A.png>";
            
        }else{
         document.getElementById( "mode" ).innerHTML = "<img src = image/mode_B.png>";   
        }
        
        
        if(sizealert == 0){
        
                    if(udk == "UP" && pausetime == 0 ){
                        mode = mode-1;
                                          soundok.src = "mp3/select.mp3";
                        soundok.play();
                        pausetime = 1;
                    }else if(udk == "DOWN" && pausetime == 0 ){
                        soundok.src = "mp3/select.mp3";
                        soundok.play();
                        mode = mode + 1;
                                                pausetime = 1;
                    }
        
        }
        if(mode < 0 && hi < soundp){
            mode = 1;
            }else if(mode < 0 && hi >= soundp){
            mode = 2;
            }else if(mode > 1 && hi < soundp){
         mode = 0;   
        }else if(mode > 2 && hi>= soundp){
            mode = 0;
        }
        
        if (pausetime == 1 && udk =="EMPTY" && k == "EMPTY" && sizealert == 0){
            pausetime = 0;
        }
        
        document.getElementById( "enter" ).innerHTML = "<img src = image/PUSHENTER.png>";
        
        
        
        if (mode == 0){
                       document.getElementById( "select" ).style.top = 466;
        }  if (mode == 1){
                       document.getElementById( "select" ).style.top = 512;
        }  if (mode == 2){
                       document.getElementById( "select" ).style.top = 557;
        }
                
       if(sizealert == 0){ 
        
        //裏技1　タイトル画面で[4622]と入力すると、すべてのアイテムを持った状態でスタート。
        
        if ( num_k == "EMPTY" && (cheat == -1 || cheat == 0)){
            cheat = 0;
        }else if ( num_k == "4" && (cheat == 0 || cheat == 1)){
            cheat = 1;
        } else if ( num_k == "EMPTY" && (cheat == 1 || cheat == 2)){
            cheat = 2;
        }else if ( num_k == "6" && (cheat == 2 || cheat == 3)){
            cheat = 3;
        }else  if ( num_k == "EMPTY" && (cheat == 3 || cheat == 4)){
            cheat = 4;
        }else if ( num_k == "2" && (cheat == 4|| cheat == 5)){
            cheat = 5;
        }else if ( num_k == "EMPTY" && (cheat == 5|| cheat == 6)){
            cheat = 6;
        }else if ( num_k == "2" && (cheat == 6|| cheat == 7)){
            cheat = 7;
        }else if (cheat == 7 || cheat == 8){
         
        }else{
            if(cheatOK == 0){
            cheat = 0; //ミス入力時のリセット(「44622」などの頭重複は許可する)
            }
        }
        
        if(cheat == 7){
            cheatOK = 1;
            cheat = 8;
            sounditem.src = "mp3/item.mp3";
            sounditem.play();
if(cheatB < 14){
            cheatB =-1;
            }
               if(cheatC < 8){
            cheatC =-1;
            }
if(cheatF < 8){
            cheatF =-1;
            }
            
        }

               //裏技2　タイトル画面で[5656]と入力すると、残りメイプル数が9になる。(ゲームのルールにより、残りメイプル数が5以上のときは1UPしません。)
        
        
        if ( num_k == "EMPTY" && (cheatB == -1 || cheatB == 0)){
            cheatB = 0;
        }else if ( num_k == "5" && (cheatB == 0 || cheatB == 1)){
            cheatB = 1;
        } else if ( num_k == "EMPTY" && (cheatB == 1 || cheatB == 2)){
            cheatB = 2;
        }else if ( num_k == "6" && (cheatB == 2 || cheatB == 3)){
            cheatB = 3;
        }else  if ( num_k == "EMPTY" && (cheatB == 3 || cheatB == 4)){
            cheatB = 4;
        }else if ( num_k == "5" && (cheatB == 4|| cheatB == 5)){
            cheatB = 5;
        }else if ( num_k == "EMPTY" && (cheatB == 5|| cheatB == 6)){
            cheatB = 6;
        }else if ( num_k == "6" && (cheatB == 6|| cheatB == 7)){
            cheatB = 7;
        }else if (cheatB == 7 || cheatB == 14){
         
        }else{
            if(cheatOK == 0){
            cheatB = 0; //ミス入力時のリセット(「44622」などの頭重複は許可する)
            }
        }
        
        if(cheatB == 7){
                        cheatOK = 1;//裏技連続入力の無効化用処理
            cheatB = 14;
            sounditem.src = "mp3/1UP.mp3";
        sounditem.play();
            if(cheatC < 8){
            cheatC =-1;
            }

if(cheat < 8){
            cheat =-1;
            }
            if(cheatF < 8){
            cheatF =-1;
            }

            
        }
        
        //裏技3 タイトル画面で[1301]と入力すると、高難易度（ハードモード）でゲームがスタート（スピードが1段高い状態でスタート）。
        
        if ( num_k == "EMPTY" && (cheatC == -1 || cheatC == 0)){
            cheatC = 0;
        }else if ( num_k == "1" && (cheatC == 0 || cheatC == 1)){
            cheatC = 1;
        } else if ( num_k == "EMPTY" && (cheatC == 1 || cheatC == 2)){
            cheatC = 2;
        }else if ( num_k == "3" && (cheatC == 2 || cheatC == 3)){
            cheatC = 3;
        }else  if ( num_k == "EMPTY" && (cheatC == 3 || cheatC == 4)){
            cheatC = 4;
        }else if ( num_k == "0" && (cheatC == 4|| cheatC == 5)){
            cheatC = 5;
        }else if ( num_k == "EMPTY" && (cheatC == 5|| cheatC == 6)){
            cheatC = 6;
        }else if ( num_k == "1" && (cheatC == 6|| cheatC == 7)){
            cheatC = 7;
        }else if (cheatC == 7 || cheatC == 8){
         
        }else{
         if(cheatOK == 0){
            cheatC = 0;
            }
        }
        
        if(cheatC == 7){
                        cheatOK = 1;//裏技連続入力の無効化用処理
            cheatC = 8;
            soundpause.src = "mp3/pause.mp3";
            soundpause.play();
            if(cheat < 8){
            cheat =-1;
            }

if(cheatB < 14){
            cheatB =-1;
            }
            if(cheatF < 8){
            cheatF =-1;
            }
            
        }
        
        
        //裏技連続入力の無効化用処理、キーを離してリセット
        if(k  == "EMPTY"){
            cheatOK = 0;
        }
        
        //裏技4 タイトル画面でXキーを長押しすると、「夜モード」で遊べる（ビジュアル・音楽変化）。左右キーで切り替え可能。
        
        if(X_k == "X" && cheatD < 120){
            cheatD = cheatD + 1;
        }else if(cheatD ==120){
             cheatD = 140;
            soundpause.src = "mp3/pause.mp3";
            soundpause.play();
      night = 1;
        }else if(cheatD == 140){
             if(lrk =="LEFT"){
                          night = 0;
            }    if(lrk =="RIGHT"){
                          night = 1;
        }
        }else{
            cheatD = cheatD -6 ;
        }
        
        if(cheatD <= 0){
            cheatD = 0;
        }
        
           //裏技5 タイトル画面で[4989]と入力すると、いきなり最終段階（ファイナルモード）でゲームがスタート（裏技3併用不可、裏技1が自動で有効化、初期残り数3固定）。
        
        if ( num_k == "EMPTY" && (cheatF == -1 || cheatF == 0)){
            cheatF = 0;
        }else if ( num_k == "4" && (cheatF == 0 || cheatF == 1)){
            cheatF = 1;
        } else if ( num_k == "EMPTY" && (cheatF == 1 || cheatF == 2)){
            cheatF = 2;
        }else if ( num_k == "9" && (cheatF == 2 || cheatF == 3)){
            cheatF = 3;
        }else  if ( num_k == "EMPTY" && (cheatF == 3 || cheatF == 4)){
            cheatF = 4;
        }else if ( num_k == "8" && (cheatF == 4|| cheatF == 5)){
            cheatF = 5;
        }else if ( num_k == "EMPTY" && (cheatF == 5|| cheatF == 6)){
            cheatF = 6;
        }else if ( num_k == "9" && (cheatF == 6|| cheatF == 7)){
            cheatF = 7;
        }else if (cheatF == 7 || cheatF == 8){
         
        }else{
         if(cheatOK == 0){
            cheatF = 0;
            }
        }
        
        if(cheatF == 7){
            mode = 0;
                        cheatF = 8;
           cheat = 8;
            cheatB = 0;
            cheatC = 0;
                        soundok.src = "mp3/OK.mp3";
                        soundok.play();
               scene = "titleTogame";
        }
        
        
        //裏技連続入力の無効化用処理、キーを離してリセット
        if(k  == "EMPTY"){
            cheatOK = 0;
        }
        
        //裏技ここまで

       }
        
        
           if(k =="ENTER" && pausetime == 0 && sizealert == 0){
                              soundok.src = "mp3/OK.mp3";
                        soundok.play();
               
               if(mode == 0){

            scene = "titleTogame"
               }else if (mode == 1){
          
            i = 1;  
            scene = "titletomanual";
        }
                 if(mode == 2){
            scene = "Tosoundtest"
               }
        }
        
    }
        if(scene == "manual"){
            
            backup();
            
            if(pausetime == 1){
                blackout = blackout + shiftspeed;
                
                if(blackout >=1){
                    document.getElementById( "haikei" ).innerHTML = "<img src = image/page"+i+".jpg>";
                    
            
                    
                    blackout = 1;
                pausetime = 2 ;
                }
                }
            
             if(pausetime == 2){
                blackout = blackout - shiftspeed;
                
                if(blackout <=0){
                    blackout = 0;
                    pausetime = 0;
                }
                }
            
if(sizealert == 0){

    if(i != 100 && i != 101){
            if(lrk =="LEFT" && pausetime == 0&&i>1){
                soundok.src = "mp3/select.mp3";
                        soundok.play();
                pausetime = 1;
                i = i - 1;
                          
            }    if(lrk =="RIGHT"&&pausetime == 0&&i<page){
                soundok.src = "mp3/select.mp3";
                        soundok.play();
                pausetime = 1;
               i = i + 1;
            }if(k =="ESC" && blackout == 0){
                  soundok.src = "mp3/OK.mp3";
                        soundok.play();
                                        BGM.pause();
                scene = "manualtotitle";
                pausetime =0;
            }
            
}else{
    
    if(k == "ESC"){
        
        window.location.reload();
        
    }
    
}



}
            
         
            
        }
     if(scene == "soundtest"){
            
         if(sizealert == 0){
         
            if(pausetime == 1&& lrk == "EMPTY" && k == "EMPTY"){
                pausetime = 0;
            }
         
         //サウンドテスト条件×2(点)でボーナストラック、500000点でクレジットBGMをアンロック
       if(lrk =="LEFT" && pausetime == 0 && i == 0 && hi < soundp * 2){
                pausetime = 1;
                i = 14;
        }else if(lrk =="RIGHT"&&pausetime == 0&& i == 14 && hi < soundp * 2){
                pausetime = 1;
               i = 0;
            }else if(lrk =="LEFT" && pausetime == 0 && i == 0 && hi < 500000){
                pausetime = 1;
                i = 15;
        }else if(lrk =="RIGHT"&&pausetime == 0&& i == 15 && hi < 500000){
                pausetime = 1;
               i = 0;
            }else if(lrk =="LEFT" && pausetime == 0){
                pausetime = 1;
                i = i - 1;
            }else if(lrk =="RIGHT"&&pausetime == 0){
                pausetime = 1;
               i = i + 1;
            }
         
         }
             
         if(i > 16){
             i=0;
         }if(i < 0){
             i=16;
         }
         
         if(sizealert == 0){
        //スペシャル裏技　サウンドテストで「CREDITS」に合わせて「7777」と入力すると、クレジットを再生することができる。
         if(i == 16){
          if ( k == "EMPTY" && (cheatE == -1 || cheatE == 0)){
            cheatE = 0;
        }else if ( k == "7" && (cheatE == 0 || cheatE == 1)){
            cheatE = 1;
        } else if ( k == "EMPTY" && (cheatE == 1 || cheatE == 2)){
            cheatE = 2;
        }else if ( k == "7" && (cheatE == 2 || cheatE == 3)){
            cheatE = 3;
        }else  if ( k == "EMPTY" && (cheatE == 3 || cheatE == 4)){
            cheatE = 4;
        }else if ( k == "7" && (cheatE == 4|| cheatE == 5)){
            cheatE = 5;
        }else if ( k == "EMPTY" && (cheatE == 5|| cheatE == 6)){
            cheatE = 6;
        }else if ( k == "7" && (cheatE == 6|| cheatE == 7)){
            cheatE = 7;
        }else if (cheatE == 7 || cheatE == 8){
         
        }else{
         if(cheatOK == 0){
            cheatE = 0;
            }
        }
        
        if(cheatE == 7){
            cheatE = 8;
                
            scene = "credits";
            
        }
         }else{
         cheatE = -1;    
         }
             
         }
         
         if (i == 0){
                document.getElementById( "BGM" ).innerHTML = "TITLE";
         }
         if (i == 1){
                document.getElementById( "BGM" ).innerHTML = "MAIN THEME";
         }if (i == 2){
                document.getElementById( "BGM" ).innerHTML = "MAIN THEME 2";
            }if (i == 3){
                document.getElementById( "BGM" ).innerHTML = "HOW TO PLAY";
            }if (i == 4){
                document.getElementById( "BGM" ).innerHTML = "GAME OVER";
            }if (i == 5){
                document.getElementById( "BGM" ).innerHTML = "MISS";
            }if (i == 6){
                document.getElementById( "BGM" ).innerHTML = "SELECT";
            }if (i == 7){
                document.getElementById( "BGM" ).innerHTML = "DECIDE";
         }if (i == 8){
                document.getElementById( "BGM" ).innerHTML = "BOOMERANG";
            }if (i == 9){
                document.getElementById( "BGM" ).innerHTML = "ITEM GET";
            }if (i == 10){
                document.getElementById( "BGM" ).innerHTML = "DEFEAT";
            }if (i == 11){
                document.getElementById( "BGM" ).innerHTML = "1UP";
            }if (i == 12){
                document.getElementById( "BGM" ).innerHTML = "PAUSE";
            }if (i == 13){
                document.getElementById( "BGM" ).innerHTML = "TWINKLE 1";
            }if (i == 14){
                document.getElementById( "BGM" ).innerHTML = "TWINKLE 2";
            }if (i == 15 ){
                document.getElementById( "BGM" ).innerHTML = "MAIN THEME PIANO MIX";
            }if (i == 16 ){
                document.getElementById( "BGM" ).innerHTML = "CREDITS";
            }
                
       if(sizealert == 0){ 
         
         //再生
         if(k == "ENTER" && pausetime == 0){
                
             scene ="soundplay";
            
                pausetime = 1;
             
            }
         
         //ストップ
         if (k == "SPACE"){    
            BGM.pause();
       
        }
         
       }
    if(k =="ESC"){
                
                BGM.pause();
                scene = "manualtotitle";
                i = 0;
                pausetime =0;
            }
        }
    if(scene == "soundplay"){
        //曲目
         if (i == 0){
                       BGM.src = "mp3/title.mp3";
                    BGM.volume = 0.5;
        BGM.loop = false;
                }
                if (i == 1){
                       BGM.src = "mp3/mainBGM.mp3";
                    BGM.volume = 0.5;
        BGM.loop = true;
                }if (i == 2){
                       BGM.src = "mp3/mainBGM2.mp3";
                      BGM.volume = 0.5;
        BGM.loop = true;
                }if (i == 3){       
                    BGM.src = "mp3/manual.mp3";
            BGM.volume = 0.6;
        BGM.loop = true;
        }if (i == 4){       
                    BGM.src = "mp3/gameover.mp3";
            BGM.volume = 0.5;
        BGM.loop = true;
        }if (i == 5){       
                    BGM.src = "mp3/TooBAD.mp3";
            BGM.volume = 1.0;
        BGM.loop = false;
        }if (i == 6){       
                    BGM.src = "mp3/SELECT.mp3";
            BGM.volume = 1.0;
        BGM.loop = false;
        }if (i == 7){       
                    BGM.src = "mp3/OK.mp3";
            BGM.volume = 1.0;
        BGM.loop = false;
        }if (i == 8){       
                    BGM.src = "mp3/throw.mp3";
            BGM.volume = 1.0;
        BGM.loop = false;
        }if (i == 9){       
                    BGM.src = "mp3/item.mp3";
            BGM.volume = 1.0;
        BGM.loop = false;
        }if (i == 10){       
                    BGM.src = "mp3/defeat.mp3";
            BGM.volume = 1.0;
        BGM.loop = false;
        }if (i == 11){       
                    BGM.src = "mp3/1UP.mp3";
            BGM.volume = 1.0;
        BGM.loop = false;
        }if (i == 12){       
                    BGM.src = "mp3/pause.mp3";
            BGM.volume = 1.0;
        BGM.loop = false;
        }if (i == 13){       
                    BGM.src = "mp3/twinkle_1.mp3";
            BGM.volume = 1.0;
        BGM.loop = true;
        }if (i == 14){       
                    BGM.src = "mp3/twinkle_2.mp3";
            BGM.volume = 1.0;
        BGM.loop = false;
        }if (i == 15){    
               BGM.src = "mp3/Bonus.mp3";
            BGM.volume = 1.0;
        BGM.loop = true;
       }if (i == 16){    
               BGM.src = "mp3/credits.mp3";
            BGM.volume = 1.0;
        BGM.loop = false;
       
        }
        
        BGM.play();

        scene ="soundtest";
    }
if(scene == "titleTogame"){
                     
        if(shift == 0){
        
        blackout = blackout + shiftspeed;//少し遅めに
            if(blackout > 1){
                shift = 1;
                
                        document.getElementById( "enter" ).innerHTML = "";
                  document.getElementById( "select" ).innerHTML = "";
                
                     document.getElementById( "mode" ).innerHTML = "";
                document.getElementById( "maple" ).innerHTML = "";
    document.getElementById( "logo" ).innerHTML = "";
     
                BGM.pause ();
                
                //調整
                
                
                p = firstp;
                
                bonus = 1;
damage=0;
                
vec = "down";
                
if (cheat == 8){
    fourway = 2;
life = 2;   
speed = 8.5;
    attackup = 8;
}else{
        fourway = 0;
life = 1;         
speed = 1.5;
attackup = 0;    
}
                
                if (cheatB == 14){
stock = 9;   
                }else{
    
stock = 2;   
                }
                if(cheatF == 8){
                    time = 500;
                        stock = 3;
                }else{
                    
                    if(speed <= 2.5　&& cheatC == 8){
                        speed=2.5
                    }
                    
    if(cheatC != 8){
        cheatC = 0;
    }
                    
                cheatF = 0;
 time = firsttime;  
                }
                
                
                    damage = 2;
            cheat = 0;
                cheatB = 0;

                ktime = 0;
    
sx = 600-charax;
sy = 600;
walk = 0;
                            idol = 0;
                
                    document.getElementById( "player" ).style.left = sx;
 document.getElementById( "player" ).style.top = sy;
 
         document.getElementById( "stat" ).innerHTML = "<img src = image/status.png>";   
    
weapon = 1;
           
shottime = 0;
    

   document.getElementById( "STOCK" ).innerHTML = stock;
                document.getElementById( "STOCKS" ).innerHTML = stock;
                
                
                
                document.getElementById( "player" ).innerHTML = "<img src = image/down.png>";            
    if(night == 0){
 document.getElementById( "haikei" ).innerHTML = "<img src = image/background.jpg>";
    }else{
         document.getElementById( "haikei" ).innerHTML = "<img src = image/backgroundnight.jpg>";
    }
    
 
        
        document.getElementById( "TEN" ).innerHTML = p;
        
        document.getElementById( "HiTEN" ).innerHTML = hi;
                      }
                   
    }
    
    if(shift == 1){
        blacktime++;
        
        if(blacktime >= 30){
            shift = 2;
            blacktime = 0;
        }
        
    }
        
        if(shift == 2){
        
        blackout = blackout - shiftspeed;
            if(blackout <= 0){
                blackout = 0;
                scene ="game";
                if(night == 0){
                        BGM.src = "mp3/mainBGM.mp3";
                    BGM.play();
                BGM.volume = 0.5;
        BGM.loop = true;
                }else{
                       BGM.src = "mp3/mainBGM2.mp3";
                    BGM.play();
                BGM.volume = 0.5;
        BGM.loop = true;
                }
        
                
                }
            }
}
   
     if(scene == "continuescene"){
         
         i = i + 1;
         
         if(i>15){
                document.getElementById( "maple" ).innerHTML = "<img src = image/gameover_continue2.png>";
         sy = sy-20;
         }else{
                document.getElementById( "maple" ).innerHTML = "<img src = image/gameover_continue3.png>";
         }
         
      
         
         document.getElementById( "maple" ).style.top = sy;
         
         if(sy<-800){
          scene = "continue";   
         }
     }
    
    if(scene == "continue"){
                     
        if(shift == 0){
        
        blackout = blackout + shiftspeed;
            if(blackout > 1){
                shift = 1;
                            BGM.pause();
                
                document.getElementById( "maple" ).innerHTML = "";
                
                document.getElementById( "select" ).innerHTML = "";
                
                //調整
                
                
                if(p < 90000){
                    p = Math.floor((2/3) * p);
                p = p - (p % 10);               
                              }else{
                                  p = p - 30000;
                              }
                
                bonus = Math.floor(p * (1/50000))+1;
                
damage=2;
                
vec = "down";
                
        fourway = 0;
life = 1;    
                attackup = attackup - 2;
                
                if(attackup<=0){
                    attackup = 0;
                }
                if(speed <= 2.5){
                        speed=2.5
                    }//スピードを少しオマケ
    
stock = 2;   

                ktime = 0;
    
sx = 600;
sy = 600;
walk = 0;
                            idol = 0;
                
                    document.getElementById( "player" ).style.left = sx;
 document.getElementById( "player" ).style.top = sy;
 
weapon = 1;
           
shottime = 0;
    

   document.getElementById( "STOCK" ).innerHTML = stock;
                document.getElementById( "STOCKS" ).innerHTML = stock;
                
                document.getElementById( "player" ).innerHTML = "<img src = image/down.png>";            
    if(night == 0){
 document.getElementById( "haikei" ).innerHTML = "<img src = image/background.jpg>";
    }else{
         document.getElementById( "haikei" ).innerHTML = "<img src = image/backgroundnight.jpg>";
    }
    
 document.getElementById( "stat" ).innerHTML = "<img src = image/status.png>";
        
        document.getElementById( "TEN" ).innerHTML = p;
        
        document.getElementById( "HiTEN" ).innerHTML = hi;
                      }
                   
    }
        
        if(shift == 1){
        
        blackout = blackout - shiftspeed;
            if(blackout <= 0){
                blackout = 0;
                scene ="game";
                if(night == 0){
                        BGM.src = "mp3/mainBGM.mp3";
                    BGM.play();
                BGM.volume = 0.5;
        BGM.loop = true;
                }else{
                       BGM.src = "mp3/mainBGM2.mp3";
                    BGM.play();
                BGM.volume = 0.5;
        BGM.loop = true;
                }
        
                
                }
            }
}
if(scene == "load"){ //ゲームスタート、タイトル表示演出
    
    
                                            document.getElementById( "select" ).style.top = 465;
                      document.getElementById( "select" ).style.left = 240;  
      
    
    //タイトル表示処理
    if(night ==0){
                            document.getElementById( "haikei" ).innerHTML = "<img src = image/title.jpg>";
                      document.getElementById( "maple" ).innerHTML = "<img src = image/maple.png>";
            
            } else{
                          document.getElementById( "haikei" ).innerHTML = "<img src = image/titlenight.jpg>";
                document.getElementById( "maple" ).innerHTML = "<img src = image/maple_night.png>";
            }
    document.getElementById( "logo" ).innerHTML = "<img src = image/logo.png>";
     
    //ここまで
    
    if(shift == 0){
        
        blackout = blackout - shiftspeed;
            if(blackout <= 0){
                blackout = 0;
                shift = 1;
            }
    }
    
    if(shift == 1){
        
         
           if(sy >= 0){
                        sy = 0;
            
            
               ktime = ktime + 1

            
        }else{
          sy = sy + 16;
         
        }
        
        if(ktime>=10){
          
               sx = sx + 36;
            
        }
        
        if(sizealert == 0){
        
        if(k == "EMPTY"){
            pausetime = 0;
        }
        
           if(sx >= 0 || (k == "ENTER" && pausetime == 0)){
            
            sx = 0;
                        sy = 0;
            
            
            scene = "title";
            
            shift = 0;
            ktime = 0;
               
               pausetime = 1;
            
        }
        
        }
        
    }
    
//sxは主人公イラスト、syはロゴ
        document.getElementById( "maple" ).style.left = sx;
      document.getElementById( "logo" ).style.top = sy;


    
     
    }

    if(scene == "alert"){    //一番最初のシーン
        
        sx = -1440;
        sy = -320; //タイトル準備、sxは主人公イラスト、syはロゴ
        
         document.getElementById( "maple" ).style.left = sx;
      document.getElementById( "logo" ).style.top = sy;

        
        if (shift == 0){
            document.getElementById( "haikei" ).innerHTML = "<img src = image/alert.jpg>";
     blackout = blackout - shiftspeed;
            if(blackout <= 0){
                blackout = 0;
                shift = 1;
            }
        }
        if(shift == 1){
        document.getElementById( "enter" ).innerHTML = "<img src = image/enteralert.png>";
            if(k == "ENTER" && sizealert == 0){
                 shift = 2; 
              //  soundok.src = "mp3/OK.mp3";
              //          soundok.play();
              }
            if(k == "SPACE" && sizealert == 0){
            
                erase++;
            
            }
            
            if(erase >= 180){
                shift = 3;
            }
            
        }
                
                      
         if (shift == 2 || shift == 3){
     blackout = blackout + shiftspeed;
            if(blackout >= 1){
                blackout = 1;
                document.getElementById( "enter" ).style.left = 200;
document.getElementById( "enter" ).style.top = 390;
                blacktime = blacktime + 1;
            }
        }
        
        if(blacktime >= 20){
                    document.getElementById( "enter" ).innerHTML = "";
            blacktime = 0;
            
            pausetime = 1;
            if(shift == 2){
            scene = "load";
            
                           BGM.src = "mp3/title.mp3";
        BGM.play();
                BGM.volume = 0.5;
        BGM.loop = false;
            }else{
                
                 scene = "erase";
           
                
            }
            
                shift = 0;
                
        }
            
    
        
    
        
       
}
    
    if(scene == "erase"){

                    document.getElementById( "haikei" ).innerHTML = "<img src = image/erase_screen.jpg>";
        
       
        
        
          if (shift == 0){
       
     blackout = blackout - shiftspeed;
            if(blackout <= 0){
                blackout = 0;
                shift = 1;
            }
        }
        if(shift == 1){
       
        if(lrk == "LEFT"){
            e_select = 0;
                  
            if(soundok.paused){
            soundok.src = "mp3/select.mp3";
                        soundok.play();
            }
        }if(lrk == "RIGHT"){
            e_select = 1;
                        if(soundok.paused){
            soundok.src = "mp3/select.mp3";
                        soundok.play();
            }
        }
        
            if(k == "ENTER"){
              
                if(e_select == 0){
                    shift = 2;
                }
                if(e_select == 1){
                    shift = 3;
                          localStorage.setItem("BOOMERANG_SURVIVOR_saveTEN", 10000);
          
                }
            }
            
        }
        
        if(shift == 2){
             blackout = blackout + shiftspeed;
            if(blackout >= 1){
                blackout = 1;
                shift = -100;
            }
        }
    
            if(shift <= -100){
                shift --;
                
                if(shift <-125){
                window.location.reload();
                   
                   }
                
            }
            
        
        
        if(shift >= 3){
            
            if(shift == 3){
                          soundok.src = "mp3/OK.mp3";
                        soundok.play();
          
            }
            
            shift++;
            
            if(shift >= 50){
        document.getElementById( "erase2" ).style.visibility = "visible";
            }
            if(shift >= 150){
                shift = 2;
            }
            
        }
        
     for(let i = 0; i < 3; i++){
        
            document.getElementById( "erase"+i ).innerHTML = "<img src = image/erase_"+i+".png>";
        
         if(i != 2){
         if(i == e_select){
             document.getElementById( "erase"+i ).style.visibility = "visible";
         }else{
             document.getElementById( "erase"+i ).style.visibility = "hidden";
         }
         }
         
        
        }    
       
    
    }
        
       if(scene == "titletomanual"){
                     
        if(shift == 0){
        
        blackout = blackout + shiftspeed;
            if(blackout > 1){

                shift = 1;
                                        document.getElementById( "enter" ).innerHTML = "";
                 document.getElementById( "haikei" ).innerHTML = "<img src = image/page1.jpg>";
                    
                
                document.getElementById( "select" ).innerHTML = "";
                
                     document.getElementById( "mode" ).innerHTML = "";
                document.getElementById( "maple" ).innerHTML = "";
    document.getElementById( "logo" ).innerHTML = "";
                
          
        BGM.pause();
shift = 1;    
     
                      }
            
            
    }
           
           if(shift == 1){
              
               blacktime++;
               
               if(blacktime >= 20){
                    BGM.src = "mp3/manual.mp3";
                  BGM.volume = 0.6;
        BGM.loop = true;
            
        BGM.play();
shift = 2;
                   blacktime = 0;
               }
               
           }
        
        if(shift == 2){
        
        blackout = blackout - shiftspeed;
            if(blackout <= 0){
                blackout = 0;
                scene ="manual";
                shift= 0;
                
                }
            }
}
    
       if(scene == "manualtotitle"){
                     
        if(shift == 0){
        
        blackout = blackout + shiftspeed;
            if(blackout > 1){

                shift = 1;

                //サウンドテストも同時に処理
                   document.getElementById( "BGM" ).innerHTML = "";
                i = 0;
                
        BGM.pause();
                
                
                
 //タイトル表示処理
    if(night ==0){
                            document.getElementById( "haikei" ).innerHTML = "<img src = image/title.jpg>";
                      document.getElementById( "maple" ).innerHTML = "<img src = image/maple.png>";
            
            } else{
                          document.getElementById( "haikei" ).innerHTML = "<img src = image/titlenight.jpg>";
                document.getElementById( "maple" ).innerHTML = "<img src = image/maple_night.png>";
            }
    document.getElementById( "logo" ).innerHTML = "<img src = image/logo.png>";
     
    //ここまで
                      }
            
            
    }
           
           if(shift ==1){
               blacktime++;
               
                  if(blacktime >= 20){
                        BGM.src = "mp3/title.mp3";
        BGM.play();
                BGM.volume = 0.5;
        BGM.loop = false;
shift = 2;
                   blacktime = 0;
               }
               
           }
        
        if(shift == 2){
        
        blackout = blackout - shiftspeed;
            if(blackout <= 0){
                blackout = 0;
                scene ="title";
                shiftn= 0;
                
                }
            }
}
    
          if(scene == "Tosoundtest"){
                     
              if(k == "ENTER" && sizealert == 0){
                  pausetime = 1;
              }
              
        if(shift == 0){
        
        blackout = blackout + shiftspeed; //少し遅めに
            if(blackout > 1){

                shift = 1;
                                        document.getElementById( "enter" ).innerHTML = "";
                 document.getElementById( "haikei" ).innerHTML = "<img src = image/sound.jpg>";
  document.getElementById( "select" ).innerHTML = "";
                                 document.getElementById( "BGM" ).innerHTML = "TITLE";
                i = 0;
                     document.getElementById( "mode" ).innerHTML = "";
                document.getElementById( "maple" ).innerHTML = "";
    document.getElementById( "logo" ).innerHTML = "";
                
                BGM.pause();
     
                      }
            
            
    }
              
              if(shift == 1){
                  blacktime++;
                  if(blacktime >= 20){
                      blacktime = 0;
                      shift = 2;
                  }
              }
        
        if(shift == 2){
        
        blackout = blackout - shiftspeed;
            if(blackout <= 0){
                blackout = 0;
                scene ="soundtest";
                shift= 0;
                
                }
            }
}
    
    if(scene == "credits"){
         
        //ブラックイン
        if(shift == 0){
        
            
document.getElementById( "credit" ).style.fontFamily =　sg;
            
        blackout = blackout + shiftspeed;
            if(blackout >= 1){
                
            document.getElementById( "BGM" ).innerHTML = "";
                
                shift = 1;
                textout = 0;
                blackout = 1;
                      document.getElementById( "haikei" ).innerHTML = "<img src = image/credits.jpg>";
                
                                    document.getElementById( "select" ).innerHTML = "";
       
                                document.getElementById( "maple" ).innerHTML = "";
                                    
    

document.getElementById( "credit" ).style.left = "50%";
document.getElementById( "credit" ).style.top = 340;
                
        }

                      }
        
        if(shift == 1){
            blacktime++
            if(blacktime >= 20){
                blacktime = 0;
                BGM.pause();
                shift = 2;
            }
        }
        
                //ブラックアウト
        if(shift == 2){
        
            
            
        blackout = blackout - shiftspeed;
            if(blackout <= 0){
                
                             BGM.src = "mp3/credits.mp3";
            BGM.volume = 1.0;
        BGM.loop = false;
                                BGM.play();
                time = 0;
                ktime = 0;
                shift = 3;
                blackout = 0;
               
        }

                      }
        
             
        
        //クレジット
        if(shift == 3){
            
                 document.getElementById( "credit" ).style.opacity =　textout;
            
            if (k == "ENTER" && sizealert == 0){
            shift=4;    
            }
            
            if(textout <= 0){
                textout = 0;
            }
            if(textout >= 1){
                textout = 1;
            }
            
            if(time>=0){
        ktime = ktime + 1;
        if (ktime >= 60){
            time = time + 1;
            ktime = 0;
        }
            }
            
            
        if (time >=85){
     shift = 4;
        }else if (time >=83){
     textout = textout + (0.5 * shiftspeed);
            
            document.getElementById( "credit" ).style.left = "50%";
document.getElementById( "credit" ).style.top = 290;
document.getElementById( "credit" ).style.fontFamily =　"Higashi";
            document.getElementById( "credit" ).innerHTML = "<nobr>タイトル画面で<br>Xキーを押しつづけると…？</nobr>";
        }else if (time >=81){
     textout = textout - (0.5 * shiftspeed);      
        }else if (time >=66){
     textout = textout + shiftspeed
            document.getElementById( "credit" ).style.left = "50%";
document.getElementById( "credit" ).style.top = 340;
            document.getElementById( "credit" ).innerHTML = "<nobr>©2022 RAMUNE SPARK</nobr>";
        }else if (time >=64){
     textout = textout - (0.5 * shiftspeed);      
        }else if (time >=60){
     textout = textout + (0.5 * shiftspeed);
            document.getElementById( "credit" ).innerHTML = "<nobr>Director<br>RAMUNE '01</nobr>";
        }else if (time >=58){
     textout = textout - (0.5 * shiftspeed);      
        }else if (time >=54){
     textout = textout + (0.5 * shiftspeed);
            document.getElementById( "credit" ).innerHTML = "<nobr>Manual<br>RAMUNE '01</nobr>";
        }else if (time >=52){
     textout = textout - (0.5 * shiftspeed);      
        }else if (time >=48){
     textout = textout + (0.5 * shiftspeed);
            document.getElementById( "credit" ).innerHTML = "<nobr>Voice<br>RAMUNE '01<br>(VOICE CHANGER)</nobr>";
        }else if (time >=46){
     textout = textout - (0.5 * shiftspeed);      
        } else if (time >=42){
     textout = textout + (0.5 * shiftspeed);
            document.getElementById( "credit" ).innerHTML = "<nobr>Sound FX<br>RAMUNE '01</nobr>";
        }else if (time >=40){
     textout = textout - (0.5 * shiftspeed);      
        }  else if (time >=36){
     textout = textout + (0.5 * shiftspeed);
            document.getElementById( "credit" ).innerHTML = "<nobr>Music Composer<br>RAMUNE '01</nobr>";
        }else if (time >=34){
     textout = textout - (0.5 * shiftspeed);      
        }else if (time >=30){
     textout = textout + (0.5 * shiftspeed);
            document.getElementById( "credit" ).innerHTML = "<nobr>Sprite Design<br>RAMUNE '01</nobr>";
        }else if (time >=28){
     textout = textout - (0.5 * shiftspeed);      
        }else if (time >=24){
     textout = textout + (0.5 * shiftspeed);
            document.getElementById( "credit" ).innerHTML = "<nobr>Art / Character Design<br>RAMUNE '01</nobr>";
        }else if (time >=22){
     textout = textout - (0.5 * shiftspeed);      
        }else if (time >=18){
     textout = textout + (0.5 * shiftspeed);
            document.getElementById( "credit" ).innerHTML = "<nobr>Programmer<br>RAMUNE '01</nobr>";
        }else if (time >=16){
     textout = textout - (0.5 * shiftspeed);    
        }else if (time >=12){
     textout = textout + (0.5 * shiftspeed);      
document.getElementById( "credit" ).innerHTML = "<nobr>Game Designer<br>RAMUNE '01</nobr>";
          
document.getElementById( "credit" ).style.left = "50%";
document.getElementById( "credit" ).style.top = 290;
        }  else if (time >=10){
     textout = textout - (0.5 * shiftspeed);      
        }else if (time >=7){
     textout = textout + (0.5 * shiftspeed);      
document.getElementById( "credit" ).innerHTML = "<nobr>BOOMERANG SURVIVOR CREDITS</nobr>";
        }
              }
            
                 //ブラックイン
        if(shift == 4){
        
            
        blackout = blackout + shiftspeed;
          
            sx = 1-blackout;
            
            if(sx >= 0){
                            BGM.volume = sx;
            }else{
                sx = 0;
            }
                
                if(blackout >= 1){
                shift = 5;
                textout = 0;
                 document.getElementById( "credit" ).innerHTML = "";
                blackout = 1;
                     if (cheatE == 8){//サウンドテストの裏技から入った時
                    i = 16;
                         document.getElementById( "haikei" ).innerHTML = "<img src = image/sound.jpg>";
                     document.getElementById( "BGM" ).innerHTML = "CREDITS";
                }else{
                    
             //タイトル表示処理
    if(night ==0){
                            document.getElementById( "haikei" ).innerHTML = "<img src = image/title.jpg>";
                      document.getElementById( "maple" ).innerHTML = "<img src = image/maple.png>";
            
            } else{
                          document.getElementById( "haikei" ).innerHTML = "<img src = image/titlenight.jpg>";
                document.getElementById( "maple" ).innerHTML = "<img src = image/maple_night.png>";
            }
    document.getElementById( "logo" ).innerHTML = "<img src = image/logo.png>";
     
    //ここまで
                    
                                         document.getElementById( "select" ).style.top = 465;
                      document.getElementById( "select" ).style.left = 240;  
       
                }
                
                                            BGM.pause();
                    BGM.volume = 1;
                
        }
                

                      }
   
        if(shift == 5){
            blacktime++
            if(blacktime >= 20){
                blacktime = 0;
                shift = 6;
                if(cheatE != 8){
                 BGM.src = "mp3/title.mp3";
        BGM.play();
                BGM.volume = 0.5;
        BGM.loop = false;
                }
            }
        }
    
        
        if(shift == 6){
              
          
            
        blackout = blackout - shiftspeed;
            if(blackout <= 0){
                blackout = 0;
                if (cheatE == 8){
                scene ="soundtest";  
                    cheatE = 0;
                   }else{
                scene ="title";
                }
                shift =0;
                
                }
            
}
    }

    
    document.getElementById( "black" ).style.opacity = blackout;
    
    //console.log(PadType);
    
}


 document.onkeydown = key_down;
 function key_down( e ){

 e.preventDefault( );
 let key = e.keyCode;

     if(keyboard == "OK"){

 if( key == 37 || key == 65 ){
   lrk = "LEFT";
 }
 if( key == 39 || key == 68 ){
   lrk = "RIGHT";
 }
 if( key == 38 || key == 87 ){
   udk = "UP";
 }
 if( key == 40 || key == 83 ){
   udk = "DOWN";
 }  
if( key == 13 ){
   k = "ENTER";
 }
      if( key == 13 || key == 90){
   attack = "ON";
 }  
 if( key == 32 ){
   k = "SPACE";
 }  
            if( key == 27 ){
   k = "ESC";
 }
        if( key == 88 ){
   x_k = "X";
 }
     }
 if( key == 48 ){
   num_k = "0";
 }  
 if( key == 49 ){
   num_k = "1";
 }    
 if( key == 50 ){
   num_k = "2";
 }
      if( key == 51 ){
   num_k = "3";
 }  

 if( key == 52 ){
   num_k = "4";
 }
     if( key == 53 ){
   num_k = "5";
 }
 if( key == 54 ){
   num_k = "6";
 }
     if( key == 55 ){
   num_k = "7";
 }
     if( key == 56 ){
   num_k = "8";
 }
     if( key == 57 ){
   num_k = "9";
 }
  
     
    
     }


document.onkeyup = key_up;

function key_up( e ){

 e.preventDefault( );
 let key = e.keyCode;
     
if(keyboard == "OK"){

 if( ( key == 37 || key == 65 ) && lrk == "LEFT" ){
   lrk = "EMPTY";
 }
 if( ( key == 39 || key == 68 ) && lrk == "RIGHT" ){
   lrk = "EMPTY";
 }
 if( ( key == 38 || key == 87 ) && udk == "UP" ){
   udk = "EMPTY";
 }
 if( ( key == 40 || key == 83 ) && udk == "DOWN"){
   udk = "EMPTY";
 }
 if( key == 13 && k == "ENTER" ){
   k = "EMPTY";
 }  
if( ( key == 13 || key == 90) && attack == "ON" ){
   attack = "EMPTY";
 }  

    if( key == 32 && k == "SPACE" ){
   k = "EMPTY";
 }
    
  if( key == 27 && k == "ESC"){
   k = "EMPTY";
 }
     if( key == 88 && X_k == "X"){
   k = "EMPTY";
 }
}
    if( key == 48 && num_k == "0"){
   num_k = "EMPTY";
 } 
         if( key == 49 && num_k == "1"){
   num_k = "EMPTY";
 } 
        if( key == 50 && num_k == "2"){
   num_k = "EMPTY";
 }  
     if( key == 51 && num_k == "3"){
   num_k = "EMPTY";
 }  
     if( key == 52 && num_k == "4" ){
   num_k = "EMPTY";
 }  
     if( key == 53 && num_k == "5" ){
   num_k = "EMPTY";
 }  
     if( key == 54 && num_k == "6"){
   num_k = "EMPTY";
 }
     if( key == 55 && num_k == "7"){
   num_k = "EMPTY";
 }
      if( key == 56 && num_k == "8"){
   num_k = "EMPTY";
 }
      if( key == 57 && num_k == "9"){
   num_k = "EMPTY";
 }


   
    
 }


//ゲームパッド

let connectedGamepadIndex;
let loopID;

let keyboard = "OK";
let padsc = "";

let PadType;

addEventListener("gamepadconnected", (e) => {
    connectedGamepadIndex = e.gamepad.index;
setTimeout(()=>{
        
    PadType = e.gamepad.id;
   
           loopID = requestAnimationFrame(loop);    
        console.log(PadType.substr( 0, 12 ));
    },1200);
});

addEventListener("gamepaddisconnected", (e) => {
    connectedGamepadIndex = null;
    cancelAnimationFrame(loopID);
    keyboard = "OK";
    padsc = "";
});

// standardタイプのコントローラのマッピングです。
const BUTTON_A_INDEX     = 1;
const BUTTON_B_INDEX     = 0;
const BUTTON_X_INDEX     = 3;
const BUTTON_Y_INDEX     = 2;
const BUTTON_SELECT_INDEX  = 8;
const BUTTON_START_INDEX = 9;
const BUTTON_UP_INDEX    = 12;
const BUTTON_DOWN_INDEX  = 13;
const BUTTON_LEFT_INDEX  = 14;
const BUTTON_RIGHT_INDEX = 15;
const BUTTON_HOME_INDEX  = 16;

function loop(e) {
    

    
    // ゲームパッドの入力情報を毎フレーム取得します。
    let gamepads = navigator.getGamepads();
    let gp = gamepads[connectedGamepadIndex];

    
 
    
    // ボタンが押されているかどうかを取得します。
    
    
    let aButton = gp.buttons[BUTTON_A_INDEX];
    let bButton = gp.buttons[BUTTON_B_INDEX];
    let xButton = gp.buttons[BUTTON_X_INDEX];
    let yButton = gp.buttons[BUTTON_Y_INDEX];
    let sButton = gp.buttons[BUTTON_START_INDEX];
    let seButton = gp.buttons[BUTTON_SELECT_INDEX];
    let upButton = gp.buttons[BUTTON_UP_INDEX];
    let downButton = gp.buttons[BUTTON_DOWN_INDEX];
    let leftButton = gp.buttons[BUTTON_LEFT_INDEX];
    let rightButton = gp.buttons[BUTTON_RIGHT_INDEX];
   

    
   
 if(keyboard == "NG" &&PadType.substr( 0, 12 ) == "PCEngine PAD"){　//PCE mini
     
      if(yButton.value == 1.0) { //1ボタン
        k = "ENTER";
        attack = "ON";
        }else if(aButton.value == 1.0){ //2ボタン
         X_k = "X";
        k = "ESC";
    }else if(sButton.value == 1.0){
         k = "SPACE";
    }else{
     k = "EMPTY";   
        X_k = "EMPTY";
    }
     
     if(yButton.value == 0.0){//1ボタン
     attack = "EMPTY";
    }
     
     
     
   //PCE方向キー　かなり処理が独特です！
     
    let pkey = Math.floor(gp.axes[9] * 1000);
 
                                if(pkey == 3285){udk = "EMPTY"; lrk = "EMPTY";}
                                if(pkey == -1000){udk = "UP"; lrk = "EMPTY";} 
                                if(pkey == 1000){udk = "UP"; lrk = "LEFT";} 
                                if(pkey == 714){udk = "EMPTY"; lrk = "LEFT";} 
                                if(pkey == 428){udk = "DOWN"; lrk = "LEFT";} 
                                if(pkey == 142){udk = "DOWN"; lrk = "EMPTY";} 
                                if(pkey == -143){udk = "DOWN"; lrk = "RIGHT";} 
                                if(pkey == -429){udk = "EMPTY"; lrk = "RIGHT";} 
                                if(pkey == -715){udk = "UP"; lrk = "RIGHT";} 
     
 }else if(keyboard == "NG" && phone == false){ //PC
        if(aButton.value == 1.0) {
        k = "ENTER";
        attack = "ON";
        }else if(bButton.value == 1.0) {
        k = "ESC";
        }else if(xButton.value == 1.0){
         x_k = "X";
    }else if(sButton.value == 1.0){
         k = "SPACE";
    }else{
     k = "EMPTY";   
    }
    
    
    if(aButton.value == 0.0){
     attack = "EMPTY";
    }
    
        if(leftButton.value == 1.0){
         lrk = "LEFT";
    }else if(rightButton.value == 1.0){
         lrk = "RIGHT";
    }else{
           lrk = "EMPTY";
    }
    
        if(upButton.value == 1.0){
         udk = "UP";
    }else if(downButton.value == 1.0){
         udk = "DOWN";
    }else{
           udk = "EMPTY";
    }
    }else if(keyboard == "NG" && phone){ //スマートフォン
        if(bButton.value == 1.0) {
        k = "ENTER";
        attack = "ON";
        }else if(aButton.value == 1.0) {
        k = "ESC";
        }else if(yButton.value == 1.0){
         X_k = "X";
    }else if(sButton.value == 1.0){
         k = "SPACE";
    }else{
     k = "EMPTY";   
                X_k = "EMPTY";
    }
    
    
    if(bButton.value == 0.0){
     attack = "EMPTY";
    }
    
        if(leftButton.value == 1.0){
         lrk = "LEFT";
    }else if(rightButton.value == 1.0){
         lrk = "RIGHT";
    }else{
           lrk = "EMPTY";
    }
    
        if(upButton.value == 1.0){
         udk = "UP";
    }else if(downButton.value == 1.0){
         udk = "DOWN";
    }else{
           udk = "EMPTY";
    }
    }else{
           keyboard = "NG";
            padsc = "_PAD";
    k = "EMPTY";
        udk = "EMPTY";
        lrk = "EMPTY";
        
   
    }


    
     requestAnimationFrame(loop);

}

//拡大無効
 document.body.addEventListener('touchmove', (e) => {
  if (e.touches.length > 1) {
    e.preventDefault();
  }
}, {passive: false});

     //長タップ禁止
 

    window.oncontextmenu = function(e) {
     e.stopPropagation();
     return false;
};
    
//このプログラムは、ラムネ'01が在籍の大学にて2022年2月に提出したものとなりますが、当時の提出内容とは一部内容に差異があります。
    
//COPYRIGHT 2022 RAMUNE SPARK
    