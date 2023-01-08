
var canvW=700;
var canvH=350;
var timeGap=250;
var carMove=0;
var carMoveMax=3;
var carMoveDir=1;
var wheelMoveY=0;
var wheelMoveX=0;
var wheelMoveY2=0;
var wheelMoveX2=0;
var wheelMoveMax=4;
var mirrorLXMove=0;//moving objects across screen - negative numbers
var mirrorLXMax=-50;//every 50*50 pixels reset the motion
var treeXA = new Array();
var tree_dA = new Array();
var tree_rA = new Array();
var noOfTrees = 6;
var treeSize=40;
var treeX=0;
var houseX=0;
var treeX2=0;
var personX=0;
var distMoved=0;
var tree_d=0;
var tree_r=40;
var tree_d2=0;
var tree_r2=40;
var firstTime=0;
var secondTime=0;
var thinkTime=0;
var brakeFlag=false;//turns true when driver reacts
var thinkFlag=false;//turns true when stop appears
var penalty = 0;
var thinkTimeList = "Reaction Times:<br>";

var driverT=1;//seconds
var deltaTime=100;//millisec
var time = 0;
var timeMax = 20;//seconds
var driverAmp = 50;//pixels
var driverDisp = 0;
var myTimer1;
var maxL = canvW/2;
var maxR = canvH/2;
var maxA = 0;
var objForce = 0;
var springK = 1;
var objDisp = 0;
var driverDisp = 0;
var drIntensity = 0.5;
var objAcc = 0;
var objMass= 1;
var objVel = 0;
var moveData = "";
var objDispMax = 1000000;
var dampPerc = 0.04;
var goFlag = false;
//var objScale = 0.2;
var edge = 30;
var xmin = 30;
var xmax = canvW-xmin;
var ymin = 30;
var ymax = canvH-ymin/2;
var midValX = (xmin+xmax)/2;
var midValY = (ymin+ymax)/2;
var Qx = 0;
var Qy = 0;
var Qarray = new Array();
var noOfQ = -1;
var QxA = new Array();
var QyA = new Array();
var QcolA = new Array();
var newQflag = false;//adding new charge to display
var oldQflag = false;//trying to move an old charge
var oldQchosen = -1;
var moveMirror = true;//false;//true;
var moveF = true;
var moveRay = false;
var arrXA = new Array();//hold x pos of arrow centre
var arrYA = new Array();
var noOfArr = 0;
var arrFXA = new Array();//hold x comp of force at arrow position
var arrFYA = new Array();
var arrAngle = new Array();//hold angle of arrow
var arrLength = 10;//half length of arrow
var arrNewLength = new Array();
var mirrorLX = 0;
var mirrorLY = canvH-100;
var mirrorRX = canvW-0;
var mirrorRY = canvH-100;
var mirrorMX = canvW/2;//canvH-30 + 30 /2
var mirrorMY = canvH-120;
var mirrorTX = mirrorLX+25;//position of mirror Text
var mirrorTY = mirrorLY+25;
var touchRadius = 20;
var touchFlag = "no";
var minX = 30;
var minY = 30;
var maxX = canvW-30;
var maxY = canvH-30;
var changeX = false;//moving mirror along top or bottom if TRUE
var mirrorAngle = 0;
var mirrorDX = canvW-60;
var mirrorDY = 0;
var mirrorGrad = 0;
var mirrorC = mirrorLY;
var rayLX = 140;
var rayLY = minY;
var rayRX = 140;
var rayRY = canvH-120;
var rayMX = 140;//canvH-30 + 30 /2
var rayMY = minY;
var rayLX2 = 140;
var rayLY2 = minY;
var rayRX2 = 140;
var rayRY2 = canvH-120;
var rayMX2 = 140;//canvH-30 + 30 /2
var rayMY2 = minY;
var rayTX = rayLX+25;//position of mirror Text
var rayTY = rayLY+25;
var touchRadiusRay = 20;
var touchFlagRay = "no";
var changeXRay = false;//moving mirror along top or bottom if TRUE
var rayAngle = Math.PI;
var rayDX = 0;
var rayDY = 0;
var rayGrad = 0;
var rayC = 0;
var normLX = 0;
var normLY = 0;
var normRX = 0;
var normRY = 0;
var normMX = 0;//
var normMY = 0;
var normTX = normLX+25;//position of N Text
var normTY = normLY+25;
var touchRadiusNorm = 20;
var touchFlagNorm = "no";
var changeXNorm = false;//moving mirror along top or bottom if TRUE
var normAngle = Math.PI;
var normDX = 0;
var normDY = 0;
var normGrad = 0;
var normC = 0;
var normL = 50;//half-length of normal;
var reflLX = 0;
var reflLY = 0;
var reflRX = 0;
var reflRY = 0;
var reflMX = 0;//
var reflMY2 = 0;
var reflLX2 = 0;
var reflLY2 = 0;
var reflRX2 = 0;
var reflRY2 = 0;
var reflMX2 = 0;//
var reflMY2 = 0;
var reflLXI = 0;
var reflLYI = 0;
var reflRXI = 0;
var reflRYI = 0;
var reflTX = reflLX+25;//position of mirror Text
var reflTY = reflLY+25;
var touchRadiusRefl = 20;
var touchFlagRefl = "no";
var changeXRefl = false;//moving mirror along top or bottom if TRUE
var reflAngle = Math.PI;
var reflAngle2 = Math.PI;
var reflDX = 0;
var reflDY = 0;
var reflGrad = 0;
var reflC = 0;
var reflL = canvW;//max length of reflected ray;
var meetAngle = 0;
var incAngle = 0;
var reflAngle = 0;
var refrAngle = 0;
var angle2 = new Array();
var angle3 = new Array();
var sin2 = new Array();
var sin3 = new Array();
var cos2 = new Array();
var cos3 = new Array();
var headL = 10;//length of arrow heads
var textFlag = true;
var bigD = Math.abs(rayRY-rayLY);
var actualD = 0;
var littleD = Math.abs(rayRX-maxX);
var projX =0;
var projY = 0;
var projAng = 0;

window.onload = function(){
    var events = new Events("myCanvas");
    var canvas = events.getCanvas();
    var context = events.getContext();
    var isMouseDown = false;
    var canvasImg = getCanvasImg(canvas);
    var points = [];
    //etElementById(myCanvas).width=canvW;
    //getElementById(myCanvas).height=canvH;
    //findVector();

for(i=0; i<noOfTrees; i++){
	treeXA[i] = 0;
	tree_dA[i] = 0;
	tree_rA[i] = treeSize;
}



    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.canvas.width = canvW;
    ctx.canvas.height = canvH;
  /*  // Green rectangle
    ctx.beginPath();
    ctx.setLineDash([]);
    ctx.lineWidth = "1";
    ctx.strokeStyle = "black";
    ctx.rect(25, 30, canvW-50, canvH-60);
    ctx.stroke();*/

          ctx.lineWidth = "1";

          //markings on mirror line
          ctx.moveTo((mirrorLX+mirrorRX)/2, (mirrorLY+mirrorRY)/2);
          ctx.lineTo((mirrorLX+mirrorRX)/2, (mirrorLY+mirrorRY)/2+10);
          for(e=mirrorLX; e<mirrorRX+1;e=e+10){
          ctx.moveTo(e, (mirrorLY+mirrorRY)/2);
          ctx.lineTo(e, (mirrorLY+mirrorRY)/2+5);
          ctx.stroke();}
        /*  for(e=mirrorLX-5; e<mirrorRX+1;e=e+25){
          ctx.moveTo(e, (mirrorLY+mirrorRY)/2);
          ctx.lineTo(e, (mirrorLY+mirrorRY)/2+15);
          ctx.stroke();}*/
          for(e=0; e<mirrorRX+1;e=e+50){
          ctx.moveTo(e, (mirrorLY+mirrorRY)/2);
          ctx.lineTo(e, (mirrorLY+mirrorRY)/2+10);
          ctx.stroke();}
/*
          for(e=(mirrorLX+mirrorRX)/2; e>mirrorLX-1;e=e-50){
          ctx.moveTo(e, (mirrorLY+mirrorRY)/2);
          ctx.lineTo(e, (mirrorLY+mirrorRY)/2+10);
          ctx.stroke();}
*/
          //ctx.fillText("0",(mirrorLX+mirrorRX)/2-3, (mirrorLY+mirrorRY)/2+25);
          for(f=-8;f<8;f++){
          //ctx.fillText("-"+f*5-35,((mirrorLX+mirrorRX)/2-6)-(f*50)+350, ((mirrorLY+mirrorRY)/2+25));
          ctx.fillText(""+f*5,((mirrorLX+mirrorRX)/2-6)+(f*50), ((mirrorLY+mirrorRY)/2+25));
          }

          //ctx.setLineDash([5, 3]);/*dashes are 5px and spaces are 3px*/
              ctx.beginPath();
              ctx.lineWidth = "1";
              ctx.strokeStyle = "black";
              ctx.moveTo(mirrorLX, mirrorLY);
              ctx.lineTo(mirrorRX, mirrorRY);
              //ctx.moveTo(30, canvH-120);
              //ctx.lineTo(canvW-60, canvH-120);
              ctx.stroke();

for(i=0; i<noOfTrees; i++){
treeXA[i]=Math.random()*canvW;}
var canvH3 = canvH/3;
var canvH4 = canvH/4;
for(i=0; i<noOfTrees; i++){
	tree_dA[i] = Math.random()*canvH4;
//alert(""+tree_dA[i]);
	tree_rA[i] = treeSize*(canvH4-tree_dA[i])/canvH4;
	tree_dA[i]=tree_dA[i]+20;
}
//alert("canvH3="+canvH3+" d1="+tree_dA[0]+" r1="+tree_rA[0]);

for(i=0; i<noOfTrees; i++){
//***TREE TOP
    ctx.beginPath();
    ctx.lineWidth = "1";
    ctx.fillStyle = "green";
    ctx.arc(canvW/4+treeXA[i], canvH/2-tree_dA[i], tree_rA[i], 0, 2 * Math.PI);
    ctx.fill();
//**TREE TRUNK
    ctx.beginPath();
    //ctx.setLineDash([]);
    ctx.lineWidth = "1";
    ctx.fillStyle = "brown";
    ctx.rect(canvW/4+treeXA[i], canvH/2-tree_dA[i]+tree_rA[i], tree_rA[i]/4, tree_rA[i]);//-tree_rA[i]/8
    ctx.fill();
}

//**CAR BODY
    ctx.beginPath();
    //ctx.setLineDash([]);
    ctx.lineWidth = "1";
    ctx.fillStyle = "silver";
    ctx.rect(canvW/2-25, canvH/2+25, 50, 25);
    ctx.fill();
//***CAR WHEEL 1
        ctx.beginPath();
        ctx.lineWidth = "1";
        ctx.fillStyle = "black";
        ctx.arc(canvW/2-25+40, canvH/2+54, 7, 0, 2 * Math.PI);
        ctx.fill();

        //***CAR WHEEL 2
            ctx.beginPath();
            ctx.lineWidth = "1";
            ctx.fillStyle = "black";
            ctx.arc(canvW/2-25+10, canvH/2+54, 7, 0, 2 * Math.PI);
            ctx.fill();


          ctx.fillText("t = "+time.toFixed(2),30, 50);


    document.getElementById("saveButton").addEventListener("click", function(evt){
        // open new window with saved image so user
        // can right click and save to their computer
        window.open(canvas.toDataURL());
    }, false);

    canvas.addEventListener("mousedown", function(){
        var drawingPos = events.getMousePos();
        isMouseDown = true;
    }, false);

   canvas.addEventListener("mouseup", function(){
        var drawingPos = events.getMousePos();
        isMouseDown = false;
        touchFlag = "no";

       if (drawingPos !== null) {
              //points.push(drawingPos);
              Qx = drawingPos.x;
              Qy = drawingPos.y;
            }

        moveF=true;
        canvasImg = getCanvasImg(this);
    }, false);

    canvas.addEventListener("mouseout", function(){
        if (document.createEvent) {
            var evt = document.createEvent('MouseEvents');
            evt.initEvent("mouseup", true, false);
            this.dispatchEvent(evt);
        }
        else {
            this.fireEvent("onmouseup");
        }
    }, false);

    events.setStage(function(){
        if (isMouseDown) {
	 if(thinkFlag){
           secondTime = Date.now();
	   thinkTime = secondTime-firstTime;
	   thinkTime = thinkTime + penalty;
	   thinkTimeList = thinkTimeList +"<br>"+thinkTime/1000+ " s";
	   brakeFlag=true;
	   thinkFlag=false;
	   stopDriver();
	   plotDriver();
            }
	else{//penalty
	   penalty = penalty+100;
	    }
        }
    });
    shakeDriver();
};

function plotNewFrame(){

}

function getCanvasImg(canvas){
    var img = new Image();
    img.src = canvas.toDataURL();
    return img;
}

function shakeDriver(){
  //time = 0;
  if(!goFlag){
  goFlag = true;
  myTimer1 =  setInterval(plotDriver, deltaTime)}
}


function zeroDriver(){
	distMoved=0;
	firstTime=0;
	secondTime=0;
	thinkTime=0;
	brakeFlag=false;//turns true when driver reacts
	thinkFlag=false;//turns true when stop appears
	penalty = 0;
  time = 0;
  if(!goFlag){
  goFlag = true;
  myTimer1 =  setInterval(plotDriver, deltaTime)}
}

function plotDriver(){

    if(carMoveDir>0){
      carMove++;
      if(carMove>carMoveMax){carMoveDir=-1;}
      }
    else{
      carMove--;
      if(carMove<-carMoveMax){carMoveDir=1;}
      }
    wheelMoveX = Math.random()*wheelMoveMax-2;
    wheelMoveY = Math.random()*wheelMoveMax-2;
  wheelMoveX2 = Math.random()*wheelMoveMax-2;
  wheelMoveY2 = Math.random()*wheelMoveMax-2;

  mirrorLXMove--;
  if(mirrorLXMove==mirrorLXMax){
    mirrorLXMove=0;
    distMoved++;
  }

var canvH3 = canvH/3;
var canvH4 = canvH/4;
for(i=0; i<noOfTrees; i++){
	if(canvW/4+treeXA[i]+mirrorLXMove-distMoved*50<-10)
	{treeXA[i]=Math.random()*canvW+canvW+distMoved*50;
	tree_dA[i] = Math.random()*canvH4;
	tree_rA[i] = treeSize*(canvH4-tree_dA[i])/canvH4;//divide by divide gives times
	tree_dA[i]=tree_dA[i]+20;
}
}

    time = time+deltaTime/1000;
		


          var c = document.getElementById("myCanvas");
          var ctx = c.getContext("2d");
          ctx.canvas.width = canvW;
          ctx.canvas.height = canvH;
   
                ctx.lineWidth = "1";

                //markings on mirror line
                ctx.moveTo((mirrorLX+mirrorRX)/2+mirrorLXMove, (mirrorLY+mirrorRY)/2);
                ctx.lineTo((mirrorLX+mirrorRX)/2+mirrorLXMove, (mirrorLY+mirrorRY)/2+10);
                for(e=mirrorLX+mirrorLXMove; e<mirrorRX+1;e=e+10){
                ctx.moveTo(e, (mirrorLY+mirrorRY)/2);
                ctx.lineTo(e, (mirrorLY+mirrorRY)/2+5);
                ctx.stroke();}
                for(e=0+mirrorLXMove; e<mirrorRX+1;e=e+50){
                ctx.moveTo(e, (mirrorLY+mirrorRY)/2);
                ctx.lineTo(e, (mirrorLY+mirrorRY)/2+10);
                ctx.stroke();}
		
                
                for(f=-8;f<8;f++){
                ctx.fillText(""+(f+distMoved)*5,((mirrorLX+mirrorRX)/2-6+mirrorLXMove)+(f*50), ((mirrorLY+mirrorRY)/2+25));
                }

                //ctx.setLineDash([5, 3]);/*dashes are 5px and spaces are 3px*/
                    ctx.beginPath();
                    ctx.lineWidth = "1";
                    ctx.strokeStyle = "black";
                    ctx.moveTo(mirrorLX, mirrorLY);
                    ctx.lineTo(mirrorRX, mirrorRY);
                    ctx.stroke();


		for(i=0; i<noOfTrees; i++){
                    //***TREE TOP
                        ctx.beginPath();
                        ctx.lineWidth = "1";
                        ctx.fillStyle = "green";
                        ctx.arc(canvW/4+mirrorLXMove-distMoved*50+treeXA[i], canvH/2-tree_dA[i], tree_rA[i], 0, 2 * Math.PI);
                        ctx.fill();
                    //**TREE TRUNK
                        ctx.beginPath();
                        //ctx.setLineDash([]);
                        ctx.lineWidth = "1";
                        ctx.fillStyle = "brown";
                        ctx.rect(canvW/4+mirrorLXMove-distMoved*50+treeXA[i], canvH/2-tree_dA[i]+tree_rA[i], tree_rA[i]/4, tree_rA[i]);//-tree_r/8
                        ctx.fill();
		}

                    //**CAR BODY
                        ctx.beginPath();
                        //ctx.setLineDash([]);
                        ctx.lineWidth = "1";
                        ctx.fillStyle = "silver";
                        ctx.rect(canvW/2-25, canvH/2+25+carMove, 50, 25);
                        ctx.fill();
                    //***CAR WHEEL 1
                            ctx.beginPath();
                            ctx.lineWidth = "1";
                            ctx.fillStyle = "black";
                            ctx.arc(canvW/2-25+40+wheelMoveX, canvH/2+54+wheelMoveY, 7, 0, 2 * Math.PI);
                            ctx.fill();

                            //***CAR WHEEL 2
                                ctx.beginPath();
                                ctx.lineWidth = "1";
                                ctx.fillStyle = "black";
                                ctx.arc(canvW/2-25+10+wheelMoveX2, canvH/2+54+wheelMoveY2, 7, 0, 2 * Math.PI);
                                ctx.fill();

                ctx.font = "30px Arial";
                ctx.fillStyle = "black";
          ctx.fillText("t = "+time.toFixed(2),30, 50);
	if(time>5&&!brakeFlag){//fire 'stop!'
		if(Math.random()<0.01){
			firstTime = Date.now();
			ctx.fillText("STOP!",canvW/2, 50);
			thinkFlag=true;
			}
		}
	if(thinkFlag){
		ctx.fillText("STOP!",canvW/2, 50);
		}
	else{
		ctx.fillText("",canvW/2, 50);
		}
	if(brakeFlag){
		ctx.fillText("T="+thinkTime/1000+ "s",canvW/2, 50);
      document.getElementById("dummy1").innerHTML=""+ thinkTimeList;
   		brakeFlag=false;
		}

  }


  function stopDriver(){
  clearTimeout(myTimer1);
  goFlag = false;
  //alert("stop");
  //alert("stop: "+moveData);
}

function changeT(n){
  var diff = n;
    clearTimeout(myTimer1);
    goFlag = false;
    driverT = driverT+diff;
  if(driverT<0.3){driverT = 0.3;}
    zeroStart();
    restart();
      shakeDriver();
}

function zeroStart(){

    /*driverT=5;//seconds
    driverAmp = 50;//pixels
    objForce = 0;
    springK = 1;
    objMass= 1;*/
    deltaTime=100;//millisec
    time = 0;
    maxA = 0;
    timeMax = 20;//seconds
    driverDisp = 0;
    maxL = canvW/2;
    maxR = canvH/2;
    objDisp = 0;
    driverDisp = 0;
    drIntensity = 0.5;
    objAcc = 0;
    objVel = 0;
    moveData = "";
    //objDispMax = 320;
}

function restart(){

      var events = new Events("myCanvas");
      var canvas = events.getCanvas();
      var context = events.getContext();
      var isMouseDown = false;
      var canvasImg = getCanvasImg(canvas);
      var points = [];
      //etElementById(myCanvas).width=canvW;
      //getElementById(myCanvas).height=canvH;
      //findVector();

      var c = document.getElementById("myCanvas");
      var ctx = c.getContext("2d");
      ctx.canvas.width = canvW;
      ctx.canvas.height = canvH;
      // Green rectangle
      ctx.beginPath();
      ctx.setLineDash([]);
      ctx.lineWidth = "1";
      ctx.strokeStyle = "black";
      ctx.rect(25, 30, canvW-50, canvH-60);
      ctx.stroke();

            ctx.lineWidth = "1";

            //markings on mirror line
            ctx.moveTo((mirrorLX+mirrorRX)/2, (mirrorLY+mirrorRY)/2);
            ctx.lineTo((mirrorLX+mirrorRX)/2, (mirrorLY+mirrorRY)/2+14);
            for(e=mirrorLX; e<mirrorRX+1;e=e+5){
            ctx.moveTo(e, (mirrorLY+mirrorRY)/2);
            ctx.lineTo(e, (mirrorLY+mirrorRY)/2+5);
            ctx.stroke();}
            for(e=mirrorLX-5; e<mirrorRX+1;e=e+25){
            ctx.moveTo(e, (mirrorLY+mirrorRY)/2);
            ctx.lineTo(e, (mirrorLY+mirrorRY)/2+10);
            ctx.stroke();}
            for(e=(mirrorLX+mirrorRX)/2; e<mirrorRX+1;e=e+50){
            ctx.moveTo(e, (mirrorLY+mirrorRY)/2);
            ctx.lineTo(e, (mirrorLY+mirrorRY)/2+15);
            ctx.stroke();}
            for(e=(mirrorLX+mirrorRX)/2; e>mirrorLX-1;e=e-50){
            ctx.moveTo(e, (mirrorLY+mirrorRY)/2);
            ctx.lineTo(e, (mirrorLY+mirrorRY)/2+15);
            ctx.stroke();}
            ctx.fillText("0",(mirrorLX+mirrorRX)/2-3, (mirrorLY+mirrorRY)/2+25);
            for(f=-7;f<7;f++){
            //ctx.fillText("-"+f*10,((mirrorLX+mirrorRX)/2-8)-(f*50), ((mirrorLY+mirrorRY)/2+25));
            ctx.fillText("+"+f*10,((mirrorLX+mirrorRX)/2-8)+(f*50), ((mirrorLY+mirrorRY)/2+25));
            }

            //ctx.setLineDash([5, 3]);/*dashes are 5px and spaces are 3px*/
                ctx.beginPath();
                ctx.lineWidth = "1";
                ctx.strokeStyle = "black";
                ctx.moveTo(mirrorLX, mirrorLY);
                ctx.lineTo(mirrorRX, mirrorRY);
                //ctx.moveTo(30, canvH-120);
                //ctx.lineTo(canvW-60, canvH-120);
                ctx.stroke();
  //***OBJECT
      ctx.beginPath();
      ctx.lineWidth = "1";
      ctx.fillStyle = "brown";
      ctx.arc(canvW/2, canvH/2, 50, 0, 2 * Math.PI);
      ctx.fill();
  //***OBJECT centre
          ctx.beginPath();
          ctx.lineWidth = "1";
          ctx.fillStyle = "black";
          ctx.arc(canvW/2, canvH/2, 2, 0, 2 * Math.PI);
          ctx.fill();

  //***DRIVER
      ctx.beginPath();
      ctx.lineWidth = "1";
      ctx.fillStyle = "yellow";
      ctx.arc(canvW/2, canvH/2, 5, 0, 2 * Math.PI);
      ctx.fill();

  //**centre marker
      ctx.beginPath();
      ctx.setLineDash([10, 10]);
      ctx.lineWidth = "1";
      ctx.strokeStyle = "red";
      ctx.moveTo(canvW/2, 50);
      ctx.lineTo(canvW/2, canvH-50);
      ctx.stroke();
  
      //document.getElementById("dummy2").innerHTML="max Amp<br><br>"+ Math.round(maxA/5*10)/10+ " mm";;//"max Amp = "+ Math.round(maxA/5*10)/10+ " mm";
      //document.getElementById("dummy1").innerHTML="driver period = "+Math.round(driverT*10)/10+" s<br>drive freq = "+(Math.round(1/driverT*10000)/10000).toFixed(3)+" Hz<br>damping = "+Math.round(dampPerc*10)/10+" %";
      //document.getElementById("dummy3").innerHTML="m = "+objMass+" kg<br>k = "+springK+" N/m<br>";


}

