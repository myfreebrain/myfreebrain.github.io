
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
var letterA = new Array();
var wordLen = 6;
var oldTime = 3;
var fullWord = "";
var stopNowFlag = false;
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
	treeXA[i]=Math.random()*canvW;
        //treeX2=Math.random()*canvW;
        //houseX=Math.random()*canvW;
        //personX=Math.random()*canvW;
}
/*
              treeX=Math.random()*canvW;
              treeX2=Math.random()*canvW;
              houseX=Math.random()*canvW;
              personX=Math.random()*canvW;
*/
/*
tree_d = Math.random()*canvH3;
tree_r = 30*(canvH3-tree_d)/canvH3;
tree_d2 = Math.random()*canvH3;
tree_r2 = 30*(canvH3-tree_d2)/canvH3;
*/
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
/*
//***TREE TOP2
ctx.beginPath();
ctx.lineWidth = "1";
ctx.fillStyle = "green";
ctx.arc(canvW/4*3+treeX2, canvH/2-tree_d2, tree_r2, 0, 2 * Math.PI);
ctx.fill();
//**TREE TRUNK
ctx.beginPath();
//ctx.setLineDash([]);
ctx.lineWidth = "1";
ctx.fillStyle = "brown";
ctx.rect(canvW/4*3-tree_r2/8+treeX2, canvH/2-tree_d2+tree_r2, tree_r2/4, tree_r2);
ctx.fill();
*/
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
        //newQflag = false;

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

function findWord(){
	var letNow = "";
	fullWord = "";
	for(j=0; j<wordLen; j++){
		letNow = Math.floor(Math.random()*10);
		letterA[j] = letNow;
		fullWord=fullWord+letNow;
	}
	//fullWord=fullWord+"!";
	if(letterA[1]==letterA[wordLen-2]){
		stopNowFlag=true;//stop!
	}

}

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
	letNow = "";
	fullWord = "";
    oldTime = 3;
	stopNowFlag=false;
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

  //if(treeX+mirrorLXMove-mirrorLXMax*50<-10){treeX=Math.random()*canvW+canvW;}
  //if(treeX2+mirrorLXMove-mirrorLXMax*50<-10){treeX2=Math.random()*canvW+canvW;}

    time = time+deltaTime/1000;
	if(Math.floor(time)>oldTime){
		oldTime=Math.floor(time);
		if(!stopNowFlag){findWord();}
		}

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
                /*for(e=mirrorLX-5+mirrorLXMove; e<mirrorRX+1;e=e+25){
                ctx.moveTo(e, (mirrorLY+mirrorRY)/2);
                ctx.lineTo(e, (mirrorLY+mirrorRY)/2+10);
                ctx.stroke();}*/
                //for(e=(mirrorLX+mirrorRX)/2+mirrorLXMove; e<mirrorRX+1;e=e+50){
                for(e=0+mirrorLXMove; e<mirrorRX+1;e=e+50){
                ctx.moveTo(e, (mirrorLY+mirrorRY)/2);
                ctx.lineTo(e, (mirrorLY+mirrorRY)/2+10);
                ctx.stroke();}

              for(f=-8;f<8;f++){
                //ctx.fillText((f+distMoved)*5-(distMoved*40),((mirrorLX+mirrorRX)/2-8+mirrorLXMove)+(f*50)-400, ((mirrorLY+mirrorRY)/2+25));
                ctx.fillText(""+(f+distMoved)*5,((mirrorLX+mirrorRX)/2-6+mirrorLXMove)+(f*50), ((mirrorLY+mirrorRY)/2+25));
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

//**stopping and time routines***************

          ctx.fillText("t = "+time.toFixed(2),30, 50);
	if(time>3&&!brakeFlag&&!thinkFlag){//fire 'stop!'
		if(stopNowFlag){
			firstTime = Date.now();
			ctx.fillText(""+fullWord,canvW/2-50, 50);
			thinkFlag=true;
			}
		else if(Math.random()<0){
			firstTime = Date.now();
			ctx.fillText("STOP!",canvW/2, 50);
			thinkFlag=true;
			}

		else{
			ctx.fillText(""+fullWord,canvW/2-50, 50);
			}
	}
	else{
			ctx.fillText(""+fullWord,canvW/2-50, 50);
			}

	if(thinkFlag&&!stopNowFlag){
		ctx.fillText("STOP!",canvW/2, 50);
		}
	//else if(stopNowFlag){
		//ctx.fillText("",canvW/2, 50);
		//}
	if(brakeFlag){
		ctx.fillText("T="+thinkTime/1000+ "s",canvW/5*4, 50);
      document.getElementById("dummy1").innerHTML=""+ thinkTimeList;
		brakeFlag=false;
		}

  }


  function changeNM(){
    //n2 = parseInt(document.getElementById("myRange2").value)/100;//valueAsNumber(slider2.value);
    objMass = parseInt(document.getElementById("myRangeM").value);//valueAsNumber(slider2.value);
    objMass = objMass/10;//Math.round(objMass/100)*10;
    document.getElementById("dummyM").innerHTML="m = "+objMass;
    document.getElementById("dummy3").innerHTML="m = "+objMass+" kg<br>k = "+springK+" N/m<br>";
    //plotNewMoveQ()
  }


    function changeNK(){
      //n2 = parseInt(document.getElementById("myRange2").value)/100;//valueAsNumber(slider2.value);
      springK = parseInt(document.getElementById("myRangeK").value);//valueAsNumber(slider2.value);
      //var n210 = Math.round(Math.pow(10, n2)*10)/10;
      document.getElementById("dummyK").innerHTML="k = "+springK;
      document.getElementById("dummy3").innerHTML="m = "+objMass+" kg<br>k = "+springK+" N/m<br>";
      //plotNewMoveQ()
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

function changeD(n){
  var diff = n;
    //clearTimeout(myTimer1);
    dampPerc = dampPerc+diff;
  if(dampPerc<0){dampPerc = 0;}
    //restart();
      //shakeDriver
  document.getElementById("dummy1").innerHTML="driver period = "+Math.round(driverT*10)/10+" s<br>drive freq = "+(Math.round(1/driverT*10000)/10000).toFixed(3)+" Hz<br>damping = "+Math.round(dampPerc*10)/10+" %";
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
  //**right marker
  /*    ctx.beginPath();
      ctx.setLineDash([10, 10]);
      ctx.lineWidth = "1";
      ctx.strokeStyle = "blue";
      ctx.moveTo(canvW/2+50, 50);
      ctx.lineTo(canvW/2+50, canvH-50);
      ctx.stroke();*/

      document.getElementById("dummy2").innerHTML="max Amp<br><br>"+ Math.round(maxA/5*10)/10+ " mm";;//"max Amp = "+ Math.round(maxA/5*10)/10+ " mm";
      document.getElementById("dummy1").innerHTML="driver period = "+Math.round(driverT*10)/10+" s<br>drive freq = "+(Math.round(1/driverT*10000)/10000).toFixed(3)+" Hz<br>damping = "+Math.round(dampPerc*10)/10+" %";
      document.getElementById("dummy3").innerHTML="m = "+objMass+" kg<br>k = "+springK+" N/m<br>";


}

function moveQ(events, points){
                          var context = events.getContext();
                          var drawingPos = events.getMousePos();

                          if (drawingPos !== null) {
                              Qx = drawingPos.x;
                              Qy = drawingPos.y;

                        //check if touching which part of mirror line
                        if(moveMirror){
                        if(Qy<mirrorRY+touchRadius && Qy>mirrorRY-touchRadius && Qx<mirrorRX+touchRadius && Qx>mirrorRX-touchRadius){//check if touching right edge
                          //changeX = false;
                          mirrorRY = Qy;
                          if(Qy>=maxY){
                            mirrorRY = maxY;
                            changeX = true;}
                          else if(Qy<=minY){
                            mirrorRY = minY;
                            changeX = true;}
                          if(Qy<maxY-5&&Qy>minY+5){changeX = false;}
                          touchFlag = "right";
                          plotNewMoveQ();
                          //else{newQflag==false}
                        }
                        else if(Qy<mirrorLY+touchRadius && Qy>mirrorLY-touchRadius && Qx<mirrorLX+touchRadius && Qx>mirrorLX-touchRadius){//check if touching right edge
                          mirrorLY = Qy;
                          //changeX = false;
                            mirrorLY = Qy;
                            if(Qy>=maxY){
                              mirrorLY = maxY;
                              changeX = true;}
                            else if(Qy<=minY){
                              mirrorLY = minY;
                              changeX = true;}
                            if(Qy<maxY-5&&Qy>minY+5){changeX = false;}
                          touchFlag = "left";
                          plotNewMoveQ();
                          //else{newQflag==false}
                        }
                        else if(Qy<mirrorMY+touchRadius*3 && Qy>mirrorMY-touchRadius*3 && Qx<mirrorMX+touchRadius*3 && Qx>mirrorMX-touchRadius*3){//check if touching centre
                        mirrorAngle = Math.atan((mirrorRY-mirrorLY)/(mirrorRX-mirrorLX));
                          mirrorDX = mirrorRX-mirrorLX;
                          mirrorDY = mirrorRY-mirrorLY;
                          mirrorLY = Qy - mirrorDY/2;
                          if(mirrorLY>=maxY){mirrorLY=maxY;changeX=true}
                          if(mirrorLY<=minY){mirrorLY=minY;changeX=true}
                          mirrorRY = Qy + mirrorDY/2;
                          if(mirrorRY>=maxY){mirrorRY=maxY;changeX=true}
                          if(mirrorRY<=minY){mirrorRY=minY;changeX=true}
                        if(Qy<maxY-5&&Qy>minY+5){changeX = false;}
                        mirrorLY = Qy;
                        mirrorRY = Qy;
                        mirrorLX = minX;
                        mirrorRX = maxX;
                      touchFlag = "centre";
                      plotNewMoveQ();
                  }
                }
                  //touching ray
                  if(moveRay){
                  if(Qy<rayRY+touchRadiusRay && Qy>rayRY-touchRadiusRay && Qx<rayRX+touchRadiusRay && Qx>rayRX-touchRadiusRay){//check if touching ray bottom
                    //changeX = false;
                    rayRX = Qx;
                    if(Qx>=maxX){
                      rayRX = maxX;
                      changeXRay = true;
                    }
                    else if(Qx<=minX){
                      rayRX = minX;
                      changeXRay = true;
                    }
                    if(Qx<maxX-5&&Qx>minX+5){changeXRay = false;}
                    touchFlagRay = "bottom";
                    plotNewMoveQ();
                    //else{newQflag==false}
                  }
                  else if(Qy<rayLY+touchRadiusRay && Qy>rayLY-touchRadiusRay && Qx<rayLX+touchRadiusRay && Qx>rayLX-touchRadiusRay){//check if touching ray top
                    rayLX = Qx;
                    //changeX = false;
                      rayLX = Qx;
                      if(Qx>=maxX){
                        rayLX = maxX;
                        changeXRay = true;}
                      else if(Qx<=minX){
                        rayLX = minX;
                        changeXRay = true;}
                      if(Qx<maxX-5&&Qx>minX+5){changeXRay = false;}
                      rayTX = rayLX - 25;
                    touchFlagRay = "top";
                    plotNewMoveQ();
                    //else{newQflag==false}
                  }
                }
                }
              }

  function moveArr(events, points){
        var context = events.getContext();
        var drawingPos = events.getMousePos();

          if (drawingPos !== null) {
              Qx = drawingPos.x;
              Qy = drawingPos.y;

              noOfArr++;
              findFieldXY(Qx, Qy, noOfArr);
              plotNewArrow();

              }
      }

function plotNewMoveQ(){

      var c = document.getElementById("myCanvas");
      var ctx = c.getContext("2d");

      ctx.clearRect(0, 0, canvW, canvH);//ctx.clearRect(30, 30, canvW-60, canvH-60);//

      // Green rectangle
      ctx.beginPath();
      ctx.lineWidth = "1";
      ctx.strokeStyle = "black";
      ctx.rect(30, 30, canvW-60, canvH-60);
      ctx.stroke();

if(touchFlagRay=="top"&&!moveMirror){
              if(changeXRay){
                rayLY = Qy;
                if(Qy>maxY){rayLY = maxY;}
                else if(Qy<minY){rayLY = minY;}
              }
              else{
                rayLX = Qx;
                rayLY = Qy;
              }
            //if(Qy<maxY-2&&Qy>minY+2){mirrorRX = maxX;}
        }

if(touchFlag=="right"){
        if(changeX){
          mirrorRX = Qx;
          if(Qx>maxX){mirrorRX = maxX;}
          else if(Qx<minX){mirrorRX = minX;}
        }
        else{
          mirrorRY = Qy;
          mirrorRX = maxX;
        }
      if(Qy<maxY-2&&Qy>minY+2){mirrorRX = maxX;}
  }
  else if(touchFlag=="left"){
          if(changeX){
            mirrorLX = Qx;
            if(Qx>maxX){mirrorLX = maxX;}
            else if(Qx<minX){mirrorLX = minX;}
          }
          else{
            mirrorLY = Qy;
            mirrorLX = minX;
          //plotActualPict();
        }
      if(Qy<maxY-2&&Qy>minY+2){mirrorLX = minX;}

    }
    else if(touchFlag=="centre"){
            if(changeX){
              var dispY = mirrorMY+mirrorDY/2-maxY;
              mirrorLX = dispY/(Math.tan(mirrorAngle));
              if(mirrorLX<minX){mirrorLX=minX;}
                dispY = minY-mirrorMY-mirrorDY/2;
                mirrorRX = dispY/tan(mirrorAngle);
                if(mirrorRX<maxX){mirrorRX=maxX;}
              if(Qx>maxX){mirrorLX = maxX;}
              else if(Qx<minX){mirrorLX = minX;}
            }
            else{
              mirrorLY = Qy;
              mirrorLX = minX;
              mirrorRX = maxX;
            //plotActualPict();
          }
        if(Qy<maxY-2&&Qy>minY+2){mirrorLX = minX;}
    }
else{
//plotActualPict();
  }
  if(mirrorRX<mirrorLX){var dummyX=mirrorRX;
    var dummyY = mirrorRY;
    mirrorRX=mirrorLX;
    mirrorRY=mirrorLY;
    mirrorLX=dummyX;
    mirrorLY=dummyY;
  }
  if((mirrorRX-mirrorLX)!=0){
  mirrorAngle = Math.atan((mirrorRY-mirrorLY)/(mirrorRX-mirrorLX));
  if(mirrorAngle<0){mirrorAngle=Math.PI+mirrorAngle;}
  }
  else{
    mirrorAngle = Math.PI/2;
  }
  //if(rayLY<rayRY){
  if((rayRX-rayLX)!=0){
  rayAngle = Math.atan((rayRY-rayLY)/(rayRX-rayLX));
  if(rayLY>rayRY){rayAngle = Math.PI+rayAngle;}
  if(rayAngle<0){rayAngle=Math.PI+rayAngle;}
  }
  else{
    rayAngle = Math.PI/2;
  }
/*}
  else{//rayLY>rayRY - In ray below horizontal
  //if((rayRX-rayLX)!=0)
if(true){
  rayAngle = Math.atan((rayLY-rayRY)/(rayRX-rayLX));

  if(rayAngle<0){rayAngle=Math.PI+rayAngle;}
  }
  else{
    rayAngle = Math.PI/2;
  }

}*/


  angle2[0] = rayAngle+3*Math.PI/4;
  if(angle2[0]>Math.PI){angle2[0]=angle2[0]-(2*Math.PI);}
  angle3[0] = rayAngle-3*Math.PI/4
  if(angle3[0]<-Math.PI){angle3[0]=angle3[0]+(2*Math.PI);}
  sin2[0] = headL*Math.sin(angle2[0]);
  sin3[0] = headL*Math.sin(angle3[0]);
  cos2[0] = headL*Math.cos(angle2[0]);
  cos3[0] = headL*Math.cos(angle3[0]);


  meetAngle = rayAngle-mirrorAngle;
  incAngle = meetAngle - Math.PI/2;//Math.abs(Math.PI/2 - meetAngle);

  reflAngle = mirrorAngle - (Math.PI - meetAngle) - 2*incAngle;
  /*if(mirrorAngle<0){
  reflAngle = - Math.PI + mirrorAngle + meetAngle - 2*incAngle;}
  else{
  reflAngle = - Math.PI + mirrorAngle + meetAngle + 2*incAngle;}*/

  //reflAngle =  - mirrorAngle - meetAngle - 2*incAngle;//half works
  //reflAngle = - Math.PI - incAngle;//Math.PI
  //reflAngle = Math.PI + mirrorAngle + incAngle;

  mirrorGrad = -((mirrorLY-mirrorRY)/(mirrorRX-mirrorLX));
  mirrorC = mirrorRY-mirrorGrad*mirrorRX;
  if(rayAngle!=Math.PI/2&&true){
  rayGrad = - Math.tan(-rayAngle);
  rayC = rayLY - rayGrad*rayLX;
  if(rayGrad!=mirrorGrad){
  rayRX = (mirrorC-rayC)/(rayGrad-mirrorGrad);
  rayRY = rayGrad*rayRX+rayC;}
  }
  else{
    var delX = (rayLX-mirrorLX);
  var delY = mirrorGrad*delX;
  rayRY = mirrorLY + delY;}

  rayMX = (rayLX+rayRX)/2;
  rayMY = (rayLY+rayRY)/2;

  /*if(touchFlag=="left"||touchFlag=="right"||touchFlag=="centre")
  {var delX = (rayLX-mirrorLX);
  var delY = mirrorGrad*delX;
  rayRY = mirrorLY + delY;}*/

  var angCos = Math.cos(mirrorAngle);
  var angSin = Math.sin(mirrorAngle);

  //rayRY = mirrorGrad*(rayRX - mirrorLX);

  normLX = rayRX - angSin*normL;//rayRX = normMX
  normRX = rayRX + angSin*normL;
  normLY = rayRY + angCos*normL;
  normRY = rayRY - angCos*normL;
  normTX = normMX - Math.abs(angSin*normL/2)-5;
  normTY = normMY + Math.abs(angCos*normL/2)+5;
  reflLX = rayRX;
  reflLY = rayRY;
  //code R1***
  if(reflAngle!=Math.PI/2&&true){
  reflGrad = - Math.tan(-reflAngle);
  reflC = reflLY - reflGrad*reflLX;
  }
  //end code R1****
  //code R2****
  reflRX = reflLX+reflL*Math.cos(reflAngle);// code R 2 can work on its own without code R1
  reflRY = reflLY+reflL*Math.sin(reflAngle);
  //end code R2***
  //code R1b
  if(reflRY<minY){
    reflRY=minY;
    reflRX = (reflRY-reflC)/reflGrad;
  }
  else if(reflRY>maxY){
    reflRY=maxY;
    reflRX = (reflRY-reflC)/reflGrad;
  }
  else{}
  if(reflRX<minX){
    reflRX=minX;
    reflRY = reflGrad*reflRX+reflC;
  }
  else if(reflRX>maxX){
    reflRX=maxX;
    reflRY = reflGrad*reflRX+reflC;
  }
  else{}


  //if(reflRX>canvW-60){reflRX=canvW-60;}
  //if(reflRX<30){reflRX=30;}
  //if(reflRY>canvH-30){reflRY=canvH-30;}
  //if(reflRY<30){reflRY=30;}
  rayTX = (rayLX+rayRX)/2-25;//position of ray Text
  rayTY = (rayLY+rayRY)/2-25;
  reflTX = (reflLX+reflRX)/2-25;//position of refl Text
  reflTY = (reflLY+reflRY)/2-25;

    angle2[1] = reflAngle+3*Math.PI/4;
    if(angle2[1]>Math.PI){angle2[1]=angle2[1]-(2*Math.PI);}
    angle3[1] = reflAngle-3*Math.PI/4
    if(angle3[1]<-Math.PI){angle3[1]=angle3[1]+(2*Math.PI);}
    sin2[1] = headL*Math.sin(angle2[1]);
    sin3[1] = headL*Math.sin(angle3[1]);
    cos2[1] = headL*Math.cos(angle2[1]);
    cos3[1] = headL*Math.cos(angle3[1]);

      reflMX = (reflLX+reflRX)/2;
      reflMY = (reflLY+reflRY)/2;

//***************************************************
//2nd RAY
  rayLX2 = rayLX;
  rayLY2 = rayLY;
rayRX2 = mirrorMX;
if((rayRX2-rayLX2)!=0){
rayAngle2 = Math.atan((rayRY2-rayLY2)/(rayRX2-rayLX2));
if(rayLY2>rayRY2){rayAngle2 = Math.PI+rayAngle2;}
if(rayAngle2<0){rayAngle2=Math.PI+rayAngle2;}
}
else{
  rayAngle2 = Math.PI/2;
}

angle2[2] = rayAngle2+3*Math.PI/4;
if(angle2[2]>Math.PI){angle2[2]=angle2[2]-(2*Math.PI);}
angle3[2] = rayAngle2-3*Math.PI/4
if(angle3[2]<-Math.PI){angle3[2]=angle3[2]+(2*Math.PI);}
sin2[2] = headL*Math.sin(angle2[2]);
sin3[2] = headL*Math.sin(angle3[2]);
cos2[2] = headL*Math.cos(angle2[2]);
cos3[2] = headL*Math.cos(angle3[2]);


meetAngle = rayAngle2-mirrorAngle;
incAngle = meetAngle - Math.PI/2;

reflAngle2 = mirrorAngle - (Math.PI - meetAngle) - 2*incAngle;

mirrorGrad = -((mirrorLY-mirrorRY)/(mirrorRX-mirrorLX));
mirrorC = mirrorRY-mirrorGrad*mirrorRX;
if(rayAngle2!=Math.PI/2&&true){
rayGrad = - Math.tan(-rayAngle2);
rayC = rayLY2 - rayGrad*rayLX2;
if(rayGrad!=mirrorGrad){
rayRX2 = (mirrorC-rayC)/(rayGrad-mirrorGrad);
rayRY2 = rayGrad*rayRX2+rayC;}
}
else{
  var delX = (rayLX2-mirrorLX);
var delY = mirrorGrad*delX;
rayRY2 = mirrorLY + delY;}

rayMX2 = (rayLX2+rayRX2)/2;
rayMY2 = (rayLY2+rayRY2)/2;


var angCos = Math.cos(mirrorAngle);
var angSin = Math.sin(mirrorAngle);

normLX = rayRX - angSin*normL;//rayRX = normMX
normRX = rayRX + angSin*normL;
normLY = rayRY + angCos*normL;
normRY = rayRY - angCos*normL;
normTX = normMX - Math.abs(angSin*normL/2)-5;
normTY = normMY + Math.abs(angCos*normL/2)+5;
reflLX2 = rayRX2;
reflLY2 = rayRY2;
//code R1***
if(reflAngle2!=Math.PI/2&&true){
reflGrad = - Math.tan(-reflAngle2);
reflC = reflLY2 - reflGrad*reflLX2;
}

reflRX2 = reflLX2+reflL*Math.cos(reflAngle2);
reflRY2 = reflLY2+reflL*Math.sin(reflAngle2);
if(reflRY2<minY){
  reflRY2=minY;
  reflRX2 = (reflRY2-reflC)/reflGrad;
}
else if(reflRY2>maxY){
  reflRY2=maxY;
  reflRX2 = (reflRY2-reflC)/reflGrad;
}
else{}
if(reflRX2<minX){
  reflRX2=minX;
  reflRY2 = reflGrad*reflRX2+reflC;
}
else if(reflRX2>maxX){
  reflRX2=maxX;
  reflRY2 = reflGrad*reflRX2+reflC;
}
else{}

rayTX = (rayLX+rayRX)/2-25;//position of ray Text
rayTY = (rayLY+rayRY)/2-25;
reflTX = (reflLX+reflRX)/2-25;//position of refl Text
reflTY = (reflLY+reflRY)/2-25;

  angle2[3] = reflAngle2+3*Math.PI/4;
  if(angle2[3]>Math.PI){angle2[3]=angle2[3]-(2*Math.PI);}
  angle3[3] = reflAngle2-3*Math.PI/4
  if(angle3[3]<-Math.PI){angle3[3]=angle3[3]+(2*Math.PI);}
  sin2[3] = headL*Math.sin(angle2[3]);
  sin3[3] = headL*Math.sin(angle3[3]);
  cos2[3] = headL*Math.cos(angle2[3]);
  cos3[3] = headL*Math.cos(angle3[3]);

    reflMX2 = (reflLX2+reflRX2)/2;
    reflMY2 = (reflLY2+reflRY2)/2;

//finding image point - with flat mirror
reflLXI = reflLX;
reflLYI = reflLY;
reflRXI = rayLX;
reflRYI = 2*mirrorMY-rayLY;

//finding image in any mirror
var p1 = rayLX;
var q1 = rayLY;
var a1 = 1;
var b1 = -1*mirrorGrad;
var c1 = -1*mirrorC;
var imgX = p1-2*b1*(b1*p1+a1*q1+c1)/(a1*a1+b1*b1);
var imgY = q1-2*a1*(b1*p1+a1*q1+c1)/(a1*a1+b1*b1);
reflRXI = imgX;
reflRYI = imgY;

//***************************************************
plotActualPict();
}

function plotActualPict(){


        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
                ctx.beginPath();
                ctx.lineWidth = "1";
                ctx.strokeStyle = "black";
                ctx.moveTo(mirrorLX, mirrorLY);
                ctx.lineTo(mirrorRX, mirrorRY);//mirrorRY);
                ctx.stroke();

                mirrorTX = mirrorLX+25;
                mirrorTY = (9*mirrorLY+mirrorRY)/10+25;//mirrorLY+25;//

                  if(textFlag){
                ctx.beginPath();//draw mirror
                ctx.font = "30px Arial";
                ctx.fillStyle = "black";
                ctx.fillText("M", mirrorTX, mirrorTY);
                }

                mirrorMX = (mirrorLX+mirrorRX)/2;
                mirrorMY = (mirrorLY+mirrorRY)/2;
  /*
                ctx.beginPath();
                ctx.lineWidth = "1";
                ctx.arc(mirrorMX, mirrorMY, 10, 0, 2 * Math.PI);//(x, y, r, start arc, end arc)
                ctx.stroke();
                ctx.fillStyle = "black";
                ctx.fill();
*/

                        ctx.beginPath();//draw I ray
                        ctx.lineWidth = "1";
                        ctx.strokeStyle = "blue";
                        ctx.moveTo(rayLX, rayLY);
                        ctx.lineTo(rayRX, rayRY);
                        ctx.stroke();

                              ctx.beginPath();//draw arrows
                              ctx.moveTo(rayMX, rayMY);
                              ctx.lineTo(rayMX-sin2[0], rayMY+cos2[0]);
                              ctx.stroke();

                              ctx.beginPath();
                              ctx.moveTo(rayMX, rayMY);
                              ctx.lineTo(rayMX+sin3[0], rayMY-cos3[0]);
                              ctx.stroke();

                        ctx.beginPath();//draw 2nd I ray from object
                        ctx.lineWidth = "1";
                        ctx.strokeStyle = "green";
                        ctx.moveTo(rayLX2, rayLY2);
                        ctx.lineTo(rayRX2, rayRY2);//mirrorMX
                        ctx.stroke();

                                      ctx.beginPath();//draw arrows
                                      ctx.moveTo(rayMX2, rayMY2);
                                      ctx.lineTo(rayMX2-sin2[2], rayMY2+cos2[2]);
                                      ctx.stroke();

                                      ctx.beginPath();
                                      ctx.moveTo(rayMX2, rayMY2);
                                      ctx.lineTo(rayMX2+sin3[2], rayMY2-cos3[2]);
                                      ctx.stroke();

                        if(textFlag){
                        ctx.beginPath();
                        ctx.font = "30px serif";
                        ctx.fillStyle = "blue";
                        ctx.fillText("O", rayLX, rayLY);
                        }
                         ctx.beginPath();
                         ctx.lineWidth = "1";
                         ctx.arc(rayLX, rayLY, 2, 0, 2 * Math.PI);//(x, y, r, start arc, end arc)
                         ctx.stroke();
                         ctx.fillStyle = "black";
                         ctx.fill();


                        ctx.setLineDash([5, 5]);/*dashes are 5px and spaces are 3px*/
                        ctx.beginPath();
                        ctx.lineWidth = "1";
                        ctx.strokeStyle = "black";
                        ctx.moveTo(rayRX, rayRY);
                        ctx.lineTo(normLX, normLY);
                        ctx.stroke();
                        ctx.beginPath();
                        ctx.lineWidth = "1";
                        ctx.strokeStyle = "black";
                        ctx.moveTo(rayRX, rayRY);
                        ctx.lineTo(normRX, normRY);
                        ctx.stroke();
                        ctx.setLineDash([]);/*stop dashes*/

//plot norm N text after calc mirror inclination
                        /*ctx.beginPath();
                        ctx.font = "20px serif";
                        ctx.fillStyle = "black";
                        //ctx.fillText("N", normTX, normTY);
                        ctx.fillText("N", rayRX-3, rayRY+50);
                        */

                        ctx.beginPath();//1st reflected ray
                        ctx.lineWidth = "1";
                        ctx.strokeStyle = "blue";
                        ctx.moveTo(reflLX, reflLY);
                        ctx.lineTo(reflRX, reflRY);
                        ctx.stroke();

                                        ctx.beginPath();
                                        ctx.moveTo(reflMX, reflMY);
                                        ctx.lineTo(reflMX-sin2[1], reflMY+cos2[1]);
                                        ctx.stroke();

                                        ctx.beginPath();
                                        ctx.moveTo(reflMX, reflMY);
                                        ctx.lineTo(reflMX+sin3[1], reflMY-cos3[1]);
                                        ctx.stroke();

                        ctx.beginPath();//2nd reflected ray
                        ctx.lineWidth = "1";
                        ctx.strokeStyle = "green";
                        ctx.moveTo(reflLX2, reflLY2);
                        ctx.lineTo(reflRX2, reflRY2);
                        ctx.stroke();

                                        ctx.beginPath();
                                        ctx.moveTo(reflMX2, reflMY2);
                                        ctx.lineTo(reflMX2-sin2[3], reflMY2+cos2[3]);
                                        ctx.stroke();

                                        ctx.beginPath();
                                        ctx.moveTo(reflMX2, reflMY2);
                                        ctx.lineTo(reflMX2+sin3[3], reflMY2-cos3[3]);
                                        ctx.stroke();


                        ctx.beginPath();//1st projected ray
                        ctx.lineWidth = "1";
                        ctx.strokeStyle = "red";
                        ctx.moveTo(reflLX, reflLY);
                        ctx.lineTo(reflRXI, reflRYI);
                        ctx.stroke();

                        ctx.beginPath();//2nd projected ray
                        ctx.lineWidth = "1";
                        ctx.strokeStyle = "red";
                        ctx.moveTo(reflLX2, reflLY2);
                        ctx.lineTo(reflRXI, reflRYI);
                        ctx.stroke();


                        if(textFlag){
                        ctx.beginPath();
                        ctx.font = "30px serif";
                        ctx.fillStyle = "red";
                        ctx.fillText("I", reflRXI-13, reflRYI+23);
                        }

                         ctx.beginPath();
                         ctx.lineWidth = "1";
                         ctx.arc(reflRXI, reflRYI, 2, 0, 2 * Math.PI);//(x, y, r, start arc, end arc)
                         ctx.stroke();
                         ctx.fillStyle = "black";
                         ctx.fill();
                      /*  if(textFlag){
                        ctx.beginPath();
                        ctx.font = "30px serif";
                        ctx.fillStyle = "blue";
                        ctx.fillText("R", reflTX, reflTY);
                      }*/

                        ctx.beginPath();
                        ctx.strokeStyle = "black";//colour of lines
                        ctx.fillStyle = "black";//colour of text
                        ctx.lineWidth = "1";
                        ctx.lineWidth = "1";
                        //top ridge
                        ctx.moveTo(minX, minY);
                        ctx.lineTo(minX, minY-14);
                        for(e=xmin; e<xmax;e=e+10){
                        ctx.moveTo(e, minY);
                        ctx.lineTo(e, minY-6);
                        ctx.stroke();}
                        for(e=xmin; e<xmax;e=e+50){
                        ctx.moveTo(e, minY);
                        ctx.lineTo(e, minY-10);
                        ctx.stroke();}
                        //bottom ridge
                      /*  ctx.moveTo(minX, maxY);
                        ctx.lineTo(minX, maxY+14);
                        for(e=xmin; e<xmax+1;e=e+10){
                        ctx.moveTo(e, maxY);
                        ctx.lineTo(e, maxY+6);
                        ctx.stroke();}
                        for(e=xmin; e<xmax;e=e+50){
                        ctx.moveTo(e, maxY);
                        ctx.lineTo(e, maxY+10);
                        ctx.stroke();}*/

                        //left ridge - EMPTY
                        ctx.moveTo(minX, minY);
                        ctx.lineTo(minX-14, minY);
                        for(e=minY; e<maxY;e=e+10){
                        ctx.moveTo(minX, e);
                        ctx.lineTo(minX-6, e);
                        ctx.stroke();}
                        for(e=minY; e<maxY;e=e+50){
                        ctx.moveTo(minX, e);
                        ctx.lineTo(minX-10, e);
                        ctx.stroke();}
                        //right ridge

                        ctx.font = "10px Arial";
                        bigD = Math.abs(rayRY-minY);
                        littleD = Math.abs(rayRX-maxX);
                        var f=12.6;
                        while(f<61){
                          if(f<15&&mirrorLY>=5*50+minY){f=f+0.2;}
                          else if(f<13&&mirrorLY<5*50+minY){f=f+0.4;}
                          else if(f<18&&mirrorLY>=5*50+minY){f=f+0.5;}
                          else if(f<18&&mirrorLY<5*50+minY){f++;}
                          //if(rayRX>8*50+minX)
                          else if(f>=20&&f<30&&rayRX<=8*50+minX){f=f+2;}
                          else if(f>=20&&f<30&&rayRX>8*50+minX){f=f+5;}
                          else if(f>=30&&mirrorLY<3*50+minY){ f=f+10;}
                          else if(f>=30&&f<39&&rayRX<=8*50+minX){ f=f+5;}
                          else if(f>=30&&f<39&&rayRX>8*50+minX){ f=f+10;}
                          else if(f>=30&&mirrorLY<3*50+minY){ f=f+10;}
                          else if(f>=40&&f<59&&rayRX<=8*50+minX){ f=f+10;}
                          else if(f>=40&&f<59&&rayRX>8*50+minX){ f=f+20;}
                          else if(f>=60){ f=f+20;}
                          else{f++;}
                          actualD=f*50-rayRX+minX;
                          //projAng = Math.atan(actualD/bigD);
                          projX = actualD - littleD;
                          projY = projX*bigD/actualD;
                          //ctx.moveTo(maxX, minY+projY);
                          //ctx.lineTo(maxX+10, minY+projY);
                          f = Math.round(f*10)/10;
                          var testF = f % 1;
                          //if(mirrorLY<5*50+minY){alert(""+f+" "+testF);}
                          if(testF==0){
                          ctx.moveTo(maxX, minY+projY);
                          ctx.lineTo(maxX+10, minY+projY);
                          ctx.fillText(""+f,maxX+18, minY+projY+4);}
                          else{
                            ctx.moveTo(maxX, minY+projY);
                            ctx.lineTo(maxX+6, minY+projY);
                          }
                        }
                        /*
                        ctx.moveTo(maxX, maxY);
                        ctx.lineTo(maxX+14, maxY);
                        for(e=maxY; e>ymin;e=e-10){
                        ctx.moveTo(maxX, e);
                        ctx.lineTo(maxX+6, e);
                        ctx.stroke();}
                        for(e=maxY; e>ymin;e=e-50){
                        ctx.moveTo(maxX, e);
                        ctx.lineTo(maxX+10, e);
                        ctx.stroke();}*/

                        //add numbers to edges
                        ctx.font = "10px Arial";
                        //ctx.fillText("0",minX-3, minY-20);
                        //ctx.fillText("0",minX-3, maxY+25);
                        //ctx.fillText("0",minX-22, minY+4);
                        //ctx.fillText("0",maxX+18, minY+4);
                        var ridgeCount = 0;
                        for(e=minX; e<xmax;e=e+50){
                        ctx.fillText(""+ridgeCount,e-3, minY-20);
                        ridgeCount++;}

                        //left ridge
                        ridgeCount = 0;
                        for(e=minY; e<ymax-10;e=e+50){
                        ctx.fillText(""+ridgeCount,minX-22, e+4);
                        ridgeCount++;}
                        //bottom ridge
                      /*  ridgeCount = 0;
                        for(e=minX; e<xmax;e=e+50){
                        ctx.fillText(""+ridgeCount,e-3, maxY+25);
                        ridgeCount++;}
                        //left ridge
                        ridgeCount = 0;
                        for(e=maxY; e>ymin;e=e-50){
                        ctx.fillText(""+ridgeCount,minX-22, e+4);
                        ridgeCount++;}
                        //right ridge
                        ridgeCount = 0;
                        for(e=maxY; e>ymin;e=e-50){
                        ctx.fillText(""+ridgeCount,maxX+18, e+4);
                        ridgeCount++;}*/


          //calc angles for mirror ticks
          if(mirrorRY>mirrorLY){//bent down to right
            var xAng = Math.sin(mirrorAngle);
            var yAng = Math.cos(mirrorAngle);
          }
          else if(mirrorRY<mirrorLY){
            var xAng = - Math.sin(mirrorAngle);//Math.sin(mirrorAngle-Math.PI/2);
            var yAng = - Math.cos(mirrorAngle);//Math.cos(mirrorAngle-Math.PI/2);
          }
          else{
            var xAng = 0;
            var yAng = 1;
          }
          var xAng2 = Math.PI+xAng;
          var yAng2 = Math.PI+yAng;

          var lengthMLine = (mirrorRX-mirrorLX)**2 + (mirrorRY-mirrorLY)**2;
          lengthMLine = Math.pow(lengthMLine, 0.5);//actual length of mirror lines
          var divM = (canvW-60)/lengthMLine;
          var noOfDivs = lengthMLine/divM/2;//half the number of divs
                        //markings on mirror line
                        ctx.moveTo((mirrorLX+mirrorRX)/2, (mirrorLY+mirrorRY)/2);
                        ctx.lineTo((mirrorLX+mirrorRX)/2-14*xAng, (mirrorLY+mirrorRY)/2+14*yAng);
                        /*for(e=mirrorLX; e<mirrorRX+1;e=e+10){
                        ctx.moveTo(e, (mirrorLY+mirrorRY)/2);
                        ctx.lineTo(e, (mirrorLY+mirrorRY)/2+6);
                        ctx.stroke();}*/
                        for(e=50; e<lengthMLine/2;e=e+50){
                        ctx.moveTo((mirrorLX+mirrorRX)/2-e*yAng, (mirrorLY+mirrorRY)/2-e*xAng);
                        ctx.lineTo((mirrorLX+mirrorRX)/2-e*yAng-10*xAng, (mirrorLY+mirrorRY)/2-e*xAng+10*yAng);
                        ctx.stroke();}
                        for(e=50; e<lengthMLine/2;e=e+50){//(e=lengthMLine; e>lengthMLine/2;e=e-50){
                        ctx.moveTo((mirrorLX+mirrorRX)/2+e*yAng, (mirrorLY+mirrorRY)/2+e*xAng);
                        ctx.lineTo((mirrorLX+mirrorRX)/2+e*yAng-10*xAng, (mirrorLY+mirrorRY)/2+e*xAng+10*yAng);
                        ctx.stroke();}
                        /*for(e=(mirrorLX+mirrorRX)/2; e<mirrorRX+1;e=e+50){
                        ctx.moveTo(e+, (mirrorLY+mirrorRY)/2);
                        ctx.lineTo(e, (mirrorLY+mirrorRY)/2+10);
                        ctx.stroke();}
                        for(e=(mirrorLX+mirrorRX)/2; e>mirrorLX-1;e=e-50){
                        ctx.moveTo(e, (mirrorLY+mirrorRY)/2);
                        ctx.lineTo(e, (mirrorLY+mirrorRY)/2+10);
                        ctx.stroke();}*/
                        ctx.fillText("0",(mirrorLX+mirrorRX)/2-3, (mirrorLY+mirrorRY)/2+25);
                        for(f=1;f<6;f++){
                        ctx.fillText("-"+f,((mirrorLX+mirrorRX)/2-3)-(f*50)*yAng, ((mirrorLY+mirrorRY)/2+25)-(f*50)*xAng);
                        ctx.fillText("+"+f,((mirrorLX+mirrorRX)/2-3)+(f*50)*yAng, ((mirrorLY+mirrorRY)/2+25)+(f*50)*xAng);
                        }
                        //ctx.fillText("-5",(mirrorLX+mirrorRX)/2-250*yAng-3, (mirrorLY+mirrorRY)/2-250*xAng+25);
                        //ctx.fillText("+5",(mirrorLX+mirrorRX)/2+250*yAng-3, (mirrorLY+mirrorRY)/2+250*xAng+25);

                        if(textFlag){
                          ctx.beginPath();
                          ctx.font = "20px serif";
                          ctx.fillStyle = "black";
                          //ctx.fillText("N", normTX, normTY);
                          ctx.fillText("N", rayRX-normL*xAng-5, rayRY+(20+normL)*yAng);
                          //ctx.fillText("0",(mirrorLX+mirrorRX)/2-3, (mirrorLY+mirrorRY)/2+25);
                          }


  ctx.closePath;

  var data1s = mirrorAngle.toFixed(2)+" rad";
  var data2s = rayAngle.toFixed(2)+" rad";
  var data3 = mirrorAngle*180/Math.PI;
  var data3s = data3.toFixed(0)+" deg";
  var data4 = rayAngle*180/Math.PI;
  var data4s = data4.toFixed(0)+" deg";
  var data5 = meetAngle*180/Math.PI;
  var data5s = data5.toFixed(0)+" deg";
  var data6 = incAngle*180/Math.PI;
  var data6s = data6.toFixed(0)+" deg";
  var data7 = reflAngle*180/Math.PI;
  var data7s = data7.toFixed(0)+" deg";
  var data8s = " rayRX="+rayRX;
  var data9s = " rayRY="+rayRY;
        //document.getElementById("dummy1").innerHTML="x="+Qx + ", y="+Qy+", M="+data3s+", In="+data4s+", A="+data5s+", I="+data6s+", R="+data7s+", ";
        //document.getElementById("dummy2").innerHTML=" MG="+mirrorGrad+", MC="+mirrorC+", RG="+rayGrad+", RC="+rayC+data8s+", "+data9s+", ";
      //document.getElementById("dummy1").innerHTML="x="+Qx + ", y="+Qy+", "+data1s+", "+data2s+", "+data3s+", "+data4s;
      //alert(""+mirrorAngle+" "+rayAngle+" "+mirrorAngle*180/Math.PI+" "+rayAngle*180/Math.PI+" ");
      data3 = Math.PI-mirrorAngle;
      data3 = data3*180/Math.PI;
      if(data3>90){data3=data3-180;}
      var data32 = -1*data3;
      data3s = data3.toFixed(0)+" deg";
      var data32s = data32.toFixed(0)+" deg";
      data6 = Math.abs(incAngle*180/Math.PI);
      if(data3>0){data6=Math.abs(data6-180);}
      data6s = data6.toFixed(0)+" deg";


      document.getElementById("dummy2").innerHTML="angle of mirror<br>to the horizontal<br>="+data3s;
      document.getElementById("dummy1").innerHTML="angle of incidence<br>="+data6s+"<br><br>angle of reflection<br>="+data6s;
      document.getElementById("dummy3").innerHTML="m = "+objMass+" kg<br>k = "+springK+" N/m<br>";

}

function plotNewArrow(){

      var c = document.getElementById("myCanvas");
      var ctx = c.getContext("2d");

      ctx.clearRect(0, 0, canvW, canvH);

      // Green rectangle
      ctx.beginPath();
      ctx.lineWidth = "4";
      ctx.strokeStyle = "green";
      ctx.rect(30, 30, canvW-60, canvH-60);
      ctx.stroke();

      ctx.beginPath();
      ctx.lineWidth = "1";
      ctx.arc(200, 30, 10, 0, 2 * Math.PI);//(x, y, r, start arc, end arc)
      ctx.stroke();
      ctx.fillStyle = "blue";
      ctx.fill();

      ctx.beginPath();
      ctx.lineWidth = "1";
      ctx.arc(400, 30, 10, 0, 2 * Math.PI);//(x, y, r, start arc, end arc)
      ctx.stroke();
      ctx.fillStyle = "red";
      ctx.fill();

      for(i=0;i<noOfArr+1;i++){
        //if(oldQchosen==i && oldQflag){}
        //else{

        //dot in centre
              ctx.beginPath();
              ctx.lineWidth = "1";
              ctx.arc(arrXA[i], arrYA[i], 2, 0, 2 * Math.PI);//(x, y, r, start arc, end arc)
              ctx.stroke();
              ctx.fillStyle = "black";
              ctx.fill();

              //findFieldXY(arrXA[i], arrYA[i], i);
              var arr2Length = arrNewLength[i];
                  //arr2Length = arrLength;
              var xHead = arrXA[i] + arr2Length*Math.cos(arrAngle[i]);
              var yHead = arrYA[i] + arr2Length*Math.sin(arrAngle[i]);
              var xTail = arrXA[i] - arr2Length*Math.cos(arrAngle[i]);
              var yTail = arrYA[i] - arr2Length*Math.sin(arrAngle[i]);
              //var xHead = arrXA[i] + arrLength*Math.sin(arrAngle[i]);
              //var yHead = arrYA[i] + arrLength*Math.cos(arrAngle[i]);
              //var xTail = arrXA[i] - arrLength*Math.cos(arrAngle[i]);
              //var yTail = arrYA[i] - arrLength*Math.sin(arrAngle[i]);


              ctx.beginPath();
              ctx.lineWidth = "1";
              ctx.moveTo(xTail, yTail);
              ctx.lineTo(xHead, yHead);
              ctx.stroke();

        //    }

    }

      for(i=0;i<noOfQ+1;i++){
        if(oldQchosen==i && oldQflag){}
        else{
              ctx.beginPath();
              ctx.lineWidth = "1";
              ctx.arc(QxA[i], QyA[i], 10, 0, 2 * Math.PI);//(x, y, r, start arc, end arc)
              ctx.stroke();
              ctx.fillStyle = QcolA[i];//Qcolor;//"green";
              ctx.fill();
            }

    }
   if(newQflag){
    ctx.beginPath();
    ctx.lineWidth = "1";
    ctx.arc(Qx, Qy, 10, 0, 2 * Math.PI);//(x, y, r, start arc, end arc)
    ctx.stroke();
    ctx.fillStyle = QcolA[noOfQ];//"green";
    ctx.fill();
  }
 if(oldQflag){
  ctx.beginPath();
  ctx.lineWidth = "1";
  ctx.arc(Qx, Qy, 10, 0, 2 * Math.PI);//(x, y, r, start arc, end arc)
  ctx.stroke();
  ctx.fillStyle = QcolA[oldQchosen];//"green";
  ctx.fill();
}


      ctx.closePath;

            document.getElementById("dummy1").innerHTML=""+Qx + " "+Qy;
}


function changeDrag(){
    if(moveMirror){
      moveMirror=false;
      moveRay=true;
      document.getElementById("dragB").value="move ray";
    }
    else if(moveRay){
      moveRay=false;
      document.getElementById("dragB").value="LOCKED";
    }
    else{
          moveMirror=true;
          document.getElementById("dragB").value="move mirror";
        }

}

function changeText(){
  if(textFlag){
    textFlag=false;
    document.getElementById("textB").value="text hidden";
    plotNewMoveQ()
  }
  else{
    textFlag=true;
    document.getElementById("textB").value="text shown";
    plotNewMoveQ()
  }
}
