
var canvW=650;
var canvH=350;
var driverT=1;//seconds
var deltaTime=2;//millisec
var time = 0;
var timeMax = 20;//seconds
var objMassA= 100;
var objMassAx = 1;//mass multiplier --> x
var objMassB= 100;
var objMassBx = 1;
var objMassAxU = 1;//unit multiplier
var objMassBxU = 1;
var objVelA = 20;
var objVelB = -20;
var objVelAstart = 20;
var objVelBstart = -20;
var objVelAx = 1;
var objVelBx = 1;
var objVelAxU = 1;
var objVelBxU = 1;
var oldVelA = 20;
var oldVelB = -20;
var velAA = new Array();
var velBA = new Array();
var posAA = new Array();
var posBA = new Array();
var velScale = 0.1;
var objRadA = 10*Math.pow(objMassA, 0.2);
var objRadB = 10*Math.pow(objMassB, 0.2);
var objRadaA = objRadA;
var objRadaB = objRadB;
var objRadaAold = objRadA;
var objRadaBold = objRadB;
var objRadbA = objRadA;
var objRadbB = objRadB;
var objPosA = canvW/4;
var objPosB = canvW*3/4;
var endPos = (objPosA+objPosB)/2;
var centreA = objPosA;
var centreB = objPosB;
var springK = 10;
var springX = 0;
var objDispA = 0;
var objDispB = 0;
var objBumpA = 0;//the squash applied to each ball
var objBumpB = 0;
var bumpScale = 1;
var springForce = 0;
var forceA = new Array();
var velAMaxMinA = new Array();
var objAccA = 0;
var objAccB = 0;
var collisionFlag = false;
var makeChangesFlag=true;
var afterCollFlag = false;
var oneMoreFlag = false;
var flagAonB = true;
var collTime = 0;
var springMax = 0;
var forceMax = 0;
var forceTot = 0;
var forceAve = 0;
var forceTime = 0;
var velAMax = -10000000;
var velAMin = 10000000;
var impulse = 0;
var springT0 = 0;
var springT1 = 0;
var springT2 = 1e6;
var turn = 0;
var springTr0 = 0;
var springTr1 = 0;
var springTr2 = 1e6;
var elasticity = 1;
var percComp = 0;//percComp^2 + elasticity^2 = 1;
var compNow = 2;
var decompressFlag=false;
var forceUnits = "kN";
var timeUnits = "ms";
var impulseUnits = "Ns";
var massUnits = "kg";
var speedUnits = "m/s";
var massUnitsA = "kg";
var speedUnitsA = "m/s";
var massUnitsB = "kg";
var speedUnitsB = "m/s";
var mvUnits = "Ns";
var keUnits = "kJ";
var muA = 0;
var muB = 0;
var muT = 0;
var mvA = 0;
var mvB = 0;
var mvT = 0;
var keA1 = 0;
var keA2 = 0;
var keT1 = 0;
var keB1 = 0;
var keB2 = 0;
var keT2 = 0;
var arrowSc = 4;
var arrLenA = 0;
var arrLenB = 0;
var arrAsign = 1;
var arrBsign = -1;

var driverAmp = 50;//pixels
var driverDisp = 0;
var myTimer1;
var maxL = canvW/2;
var maxR = canvH/2;
var maxA = 0;
//var objForce = 0;
//var springK = 1;
//var objDisp = 0;
var driverDisp = 0;
var drIntensity = 0.5;
var objAcc = 0;
var objMass= 10;
var objVel = 5;
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
var mirrorLX = 30;
var mirrorLY = canvH-100;
var mirrorRX = canvW-30;
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

    var dummyE1 = Math.pow(elasticity,2);
    var dummyE2 = 1-dummyE1;
    percComp = Math.pow(dummyE2, 0.5);
    //alert(""+percComp);

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
          for(f=1;f<6;f++){
          ctx.fillText("-"+f*10,((mirrorLX+mirrorRX)/2-8)-(f*50), ((mirrorLY+mirrorRY)/2+25));
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

              //***MASS A
                  ctx.beginPath();
                  ctx.lineWidth = "4";
                  ctx.strokeStyle = "black";
                  //ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle)
                  ctx.ellipse(objPosA, canvH/2, objRadaA, objRadbA, 0, 0, 2 * Math.PI);
                  //ctx.arc(objPosA, canvH/2, objRadA, 0, 2 * Math.PI);
                  ctx.stroke();
                  ctx.beginPath();
                  ctx.lineWidth = "4";
                  ctx.fillStyle = "blue";
                  //ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle)
                  ctx.ellipse(objPosA, canvH/2, objRadaA-2, objRadbA-2, 0, 0, 2 * Math.PI);
                  //ctx.arc(objPosA, canvH/2, objRadA, 0, 2 * Math.PI);
                  ctx.fill();
                  ctx.beginPath();
                  ctx.fillStyle = "white";
                  //ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle)
                  ctx.ellipse(objPosA+objRadaA/2.5, canvH/2-objRadbA/2.5, objRadaA/5, objRadbA/5, 0, 0, 2 * Math.PI);
                  //ctx.arc(objPosA, canvH/2, objRadA, 0, 2 * Math.PI);
                  ctx.fill();
              //***MASS B
                  ctx.beginPath();
                  ctx.lineWidth = "4";
                  ctx.strokeStyle = "black";
                  ctx.ellipse(objPosB, canvH/2, objRadaB, objRadbB, 0, 0, 2 * Math.PI);
                  //ctx.arc(objPosB, canvH/2, objRadB, 0, 2 * Math.PI);
                  ctx.stroke();
                  ctx.beginPath();
                      ctx.lineWidth = "4";
                      ctx.fillStyle = "red";
                      ctx.ellipse(objPosB, canvH/2, objRadaB-2, objRadbB-2, 0, 0, 2 * Math.PI);
                      //ctx.arc(objPosB, canvH/2, objRadB, 0, 2 * Math.PI);
                      ctx.fill();
                      ctx.beginPath();
                      ctx.fillStyle = "white";
                      //ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle)
                      ctx.ellipse(objPosB+objRadaB/2.5, canvH/2-objRadbB/2.5, objRadaB/5, objRadbB/5, 0, 0, 2 * Math.PI);
                      //ctx.arc(objPosA, canvH/2, objRadA, 0, 2 * Math.PI);
                      ctx.fill();
                  //ARROW A
                      ctx.beginPath();
                      ctx.lineWidth = "2";
                      ctx.strokeStyle = "blue";
                      ctx.moveTo(centreA, canvH/2,);
                      if(objVelA<0){arrAsign=-1;}
                      else{arrAsign=1;}
                      arrLenA = Math.pow(objVelA*arrAsign*1000,0.3);
                      ctx.lineTo(centreA+arrLenA*arrowSc*arrAsign, canvH/2-1);
                      ctx.stroke();
                    if(Math.abs(objVelA)>0.01){
                      var arrowA = 5*arrAsign;//arrLenA*arrAsign;
                      /*if(objVelA>10){arrowA = objVelA/arrowSc;}
                      else if(objVelA<-10){arrowA = objVelA/arrowSc;}
                      else if(objVelA<0){arrowA = -5;}*/
                        ctx.beginPath();
                        ctx.lineWidth = "2";
                        ctx.strokeStyle = "blue";
                        ctx.moveTo(centreA+arrLenA*arrowSc*arrAsign, canvH/2-1);
                        ctx.lineTo(centreA+arrLenA*arrowSc*arrAsign-arrowA, canvH/2-1-arrowA);
                        ctx.stroke();
                            ctx.beginPath();
                            ctx.lineWidth = "2";
                            ctx.strokeStyle = "blue";
                            ctx.moveTo(centreA+arrLenA*arrowSc*arrAsign, canvH/2-1);
                            ctx.lineTo(centreA+arrLenA*arrowSc*arrAsign-arrowA, canvH/2-1+arrowA);
                            ctx.stroke();}
                            //ARROW A - top
                            ctx.beginPath();
                            ctx.lineWidth = "2";
                            ctx.strokeStyle = "blue";
                            ctx.moveTo(centreA, 40);
                            if(objVelA<0){arrAsign=-1;}
                            else{arrAsign=1;}
                            arrLenA = Math.pow(objVelA*arrAsign*1000,0.3);
                            ctx.lineTo(centreA+arrLenA*arrowSc*arrAsign, 40,);
                            ctx.stroke();
                            if(Math.abs(objVelA)>0.01){
                            var arrowA = 5*arrAsign;//arrLenA*arrAsign;
                            /*if(objVelA>10){arrowA = objVelA/arrowSc;}
                            else if(objVelA<-10){arrowA = objVelA/arrowSc;}
                            else if(objVelA<0){arrowA = -5;}*/
                            ctx.beginPath();
                            ctx.lineWidth = "2";
                            ctx.strokeStyle = "blue";
                            ctx.moveTo(centreA+arrLenA*arrowSc*arrAsign, 40);
                            ctx.lineTo(centreA+arrLenA*arrowSc*arrAsign-arrowA, 40-arrowA);
                            ctx.stroke();
                            ctx.beginPath();
                            ctx.lineWidth = "2";
                            ctx.strokeStyle = "blue";
                            ctx.moveTo(centreA+arrLenA*arrowSc*arrAsign, 40);
                            ctx.lineTo(centreA+arrLenA*arrowSc*arrAsign-arrowA, 40+arrowA);
                            ctx.stroke();}
                            //ARROW B
                          ctx.beginPath();
                          ctx.lineWidth = "2";
                          ctx.strokeStyle = "red";
                          ctx.moveTo(centreB, canvH/2,);
                          if(objVelB<0){arrBsign=-1;}
                          else{arrBsign=1;}
                          arrLenB = Math.pow(objVelB*arrBsign*1000,0.3);
                          ctx.lineTo(centreB+arrLenB*arrowSc*arrBsign, canvH/2+1);
                          ctx.stroke();
                          if(Math.abs(objVelB)>0.01){
                          var arrowB = 5*arrBsign;//arrLenA*arrAsign;
                                /*if(objVelA>10){arrowA = objVelA/arrowSc;}
                                else if(objVelA<-10){arrowA = objVelA/arrowSc;}
                                else if(objVelA<0){arrowA = -5;}*/
                          ctx.beginPath();
                          ctx.lineWidth = "2";
                          ctx.strokeStyle = "red";
                          ctx.moveTo(centreB+arrLenB*arrowSc*arrBsign, canvH/2+1);
                          ctx.lineTo(centreB+arrLenB*arrowSc*arrBsign-arrowB, canvH/2+1-arrowB);
                          ctx.stroke();
                          ctx.beginPath();
                          ctx.lineWidth = "2";
                          ctx.strokeStyle = "red";
                          ctx.moveTo(centreB+arrLenB*arrowSc*arrBsign, canvH/2+1);
                          ctx.lineTo(centreB+arrLenB*arrowSc*arrBsign-arrowB, canvH/2+1+arrowB);
                          ctx.stroke();}
                          //ARROW B - bottom
                        ctx.beginPath();
                        ctx.lineWidth = "2";
                        ctx.strokeStyle = "red";
                        ctx.moveTo(centreB, 50);
                        if(objVelB<0){arrBsign=-1;}
                        else{arrBsign=1;}
                        arrLenB = Math.pow(objVelB*arrBsign*1000,0.3);
                        ctx.lineTo(centreB+arrLenB*arrowSc*arrBsign, 50);
                        ctx.stroke();
                        if(Math.abs(objVelB)>0.01){
                        var arrowB = 5*arrBsign;//arrLenA*arrAsign;
                              /*if(objVelA>10){arrowA = objVelA/arrowSc;}
                              else if(objVelA<-10){arrowA = objVelA/arrowSc;}
                              else if(objVelA<0){arrowA = -5;}*/
                        ctx.beginPath();
                        ctx.lineWidth = "2";
                        ctx.strokeStyle = "red";
                        ctx.moveTo(centreB+arrLenB*arrowSc*arrBsign, 50);
                        ctx.lineTo(centreB+arrLenB*arrowSc*arrBsign-arrowB, 50-arrowB);
                        ctx.stroke();
                        ctx.beginPath();
                        ctx.lineWidth = "2";
                        ctx.strokeStyle = "red";
                        ctx.moveTo(centreB+arrLenB*arrowSc*arrBsign, 50);
                        ctx.lineTo(centreB+arrLenB*arrowSc*arrBsign-arrowB, 50+arrowB);
                        ctx.stroke();}
//**centre marker
/*
    ctx.beginPath();
    ctx.setLineDash([10, 10]);
    ctx.lineWidth = "1";
    ctx.strokeStyle = "red";
    ctx.moveTo(canvW/2, 50);
    ctx.lineTo(canvW/2, canvH-50);
    ctx.stroke();
    */

    //document.getElementById("myRangeMA").value=objMassA;
    //document.getElementById("myRangeUA").value=objVelA+100;
    //document.getElementById("myRangeMB").value=objMassB;
    //document.getElementById("myRangeUB").value=objVelB+100;
    document.getElementById("myRangeE").value=elasticity*100;
    document.getElementById("myRangeAS").value=3;
    //document.getElementById("massUAkg").checked=true;
    //document.getElementById("speedUAm").checked=true;
    //document.getElementById("massUBkg").checked=true;
    //document.getElementById("speedUBm").checked=true;
    //document.getElementById("radMA1").checked=true;
    //document.getElementById("radUA1").checked=true;
    //document.getElementById("radMB1").checked=true;
    //document.getElementById("radUB1").checked=true;

    muA = objMassA*objVelA;//*objMassAx*objVelAx;
    muB = objMassB*objVelB;//*objMassBx*objVelBx;
    muT = muA+muB;
    keA1 = 0.5*objMassA*Math.pow(objVelA, 2);
    keB1 = 0.5*objMassB*Math.pow(objVelB, 2);
    keT1 = keA1+keB1;



    //document.getElementById("dummy2").innerHTML="max Amp<br><br>"+ Math.round(maxA/5*10)/10+ " mm";;//"max Amp = "+ Math.round(maxA/5*10)/10+ " mm";
    //document.getElementById("dummy1").innerHTML="driver period = "+Math.round(driverT*10)/10+" s<br>drive freq = "+(Math.round(1/driverT*10000)/10000).toFixed(3)+" Hz<br>damping = "+Math.round(dampPerc*10)/10+" %";
    //document.getElementById("dummy3").innerHTML="m = "+objMass+" kg<br>k = "+springK+" N/m<br>";


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
        }
    });
    //shakeDriver();
};

function plotNewFrame(){

}

function getCanvasImg(canvas){
    var img = new Image();
    img.src = canvas.toDataURL();
    return img;
}

function shakeDriver(){
  time = 0;
  makeChangesFlag = false;
  if(!goFlag){
  goFlag = true;
    if(Math.abs(objVelA)>Math.abs(objVelB)){
      flagAonB=true;}
    else if(Math.abs(objVelA)<Math.abs(objVelB)){
      flagAonB=false;}
  myTimer1 =  setInterval(plotDriver, deltaTime)}
}

function calcCollisionBonA(){
  objDispB=objVelB*deltaTime/1000;///objVelAxU;
  //var oldSpringX = springX;
  springX=springX-objDispB;
  if(springX>springMax){
    springMax=springX;
    springT1=time;
    springTr1=turn;}
  else if(springX<springMax){
    decompressFlag=true;
  }
  //var springXave = (springX+oldSpringX)/2;
  springForce=springK*springX;//*springXave;
  if(springForce>forceMax){
    forceMax=springForce;
    }
  if(-1*objVelB>velAMax){
    velAMax=-1*objVelB;
  }
if(-1*objVelB<velAMin){
  velAMin=-1*objVelB;
}
    document.getElementById("dummy3").innerHTML="<br>force = "
    + printNumber(springForce)+forceUnits+" <br>contact time = "+ forceTime+" "+timeUnits
    +" <br>v<sub>A</sub> = "+ printNumber(objVelA)
    +" <br>v<sub>B</sub> = "+ printNumber(objVelB);
  forceTot = forceTot+springForce;
  forceTime++;
  forceAve = forceTot/forceTime;
  forceA[turn]=springForce;
  velAMaxMinA[turn]=objVelA;
  impulse = impulse+springForce;
  objAccA=springForce/objMassA;
  objAccB=springForce/objMassB;
  objVelA=objVelA-objAccA;
  objVelB=objVelB+objAccB;
  //***rounding to 2 dp
  //objVelA=Math.round(objVelA*100)/100;
  //objVelB=Math.round(objVelB*100)/100;
  objDispA=objVelA*deltaTime/1000;///objVelBxU;
  springX=springX+objDispA;
if(decompressFlag){
  objRadaA = objRadaAold/0.9995;
  objRadaB = objRadaBold/0.9995;
  objRadaAold = objRadaA;
  objRadaBold = objRadaB;
}
else{
  objRadaA = objRadaAold*0.9995;
  objRadaB = objRadaBold*0.9995;
  objRadaAold = objRadaA;
  objRadaBold = objRadaB;}

  if(decompressFlag){
    compNow = springX/springMax;
    //alert(""+compNow);
  }
 //if(springX<0){
 if(compNow<=percComp){
    //oneMoreFlag=true;
    collisionFlag = false;
    afterCollFlag = true;
    objBumpA= 0;
    objBumpB= 0;
    objRadaA = objRadaAold;//objRadA - objBumpA;
    objRadaB = objRadaBold;//objRadB - objBumpB;
    springT2=time;
    springTr2=turn;
    objVelA=velAA[turn-2];//oldVelA;
    objVelB=velBA[turn-2];//oldVelB;
    //deltaTime=deltaTime*10;
  }
  else{
    oldVelA=objVelA;
    oldVelB=objVelB;
    velAA[turn]=objVelA;
    velBA[turn]=objVelB;
  }
}

function calcCollisionAonB(){

  objDispA=objVelA*deltaTime/1000;///objVelAxU;
  //var oldSpringX = springX;
  springX=springX+objDispA;
  if(springX>springMax){
    springMax=springX;
    springT1=time;
    springTr1=turn;}
  else if(springX<springMax){
    decompressFlag=true;
  }
  //var springXave = (springX+oldSpringX)/2;
  springForce=springK*springX;//*springXave;
  if(springForce>forceMax){
    forceMax=springForce;
    }
  if(objVelA>velAMax){
    velAMax=objVelA;
  }
if(objVelA<velAMin){
  velAMin=objVelA;
}
  /*  document.getElementById("dummy3").innerHTML="<br>force = "
    + printNumber(springForce)+forceUnits+" <br>contact time = "+ forceTime+" "+timeUnits
    +" <br>compression = "+ printNumber(springX)
    +" <br>v<sub>A</sub> = "+ printNumber(objVelA)
    +" <br>v<sub>B</sub> = "+ printNumber(objVelB);*/
    document.getElementById("dummy3").innerHTML="<br>force = "
    + printNumber(springForce)+forceUnits+" <br>contact time = "+ forceTime+" "+timeUnits
    +" <br>v<sub>A</sub> = "+ printNumber(objVelA)
    +" <br>v<sub>B</sub> = "+ printNumber(objVelB);
  forceTot = forceTot+springForce;
  forceTime++;
  forceAve = forceTot/forceTime;
  forceA[turn]=springForce;
  velAMaxMinA[turn]=objVelA;
  impulse = impulse+springForce;
  objAccA=springForce/objMassA;
  objAccB=springForce/objMassB;
  objVelA=objVelA-objAccA;
  objVelB=objVelB+objAccB;
  //***rounding to 2 dp
  //objVelA=Math.round(objVelA*100)/100;
  //objVelB=Math.round(objVelB*100)/100;
  objDispB=objVelB*deltaTime/1000;///objVelBxU;
  springX=springX-objDispB;
if(decompressFlag){
  objRadaA = objRadaAold/0.9995;
  objRadaB = objRadaBold/0.9995;
  objRadaAold = objRadaA;
  objRadaBold = objRadaB;
}
else{
  objRadaA = objRadaAold*0.9995;
  objRadaB = objRadaBold*0.9995;
  objRadaAold = objRadaA;
  objRadaBold = objRadaB;}
/*
  bumpScale = 3;
  objBumpA= springX*bumpScale/(Math.pow(forceTime, 0.5)/10+1);//springX*Math.abs(objVelA);//objBumpA+objDispA;//springX*bumpScale;
  objBumpB= springX*bumpScale/(Math.pow(forceTime, 0.5)/10+1);//springX*Math.abs(objVelB);//objBumpB+objDispB;//springX*bumpScale;
  //alert("objDispA="+objDispA+" objDispB="+objDispB+"<br>springX="+springX);
  objRadaA = objRadA - objBumpA;
  //if(objRadaA<objRadA/3){objRadaA=objRadA/3;}
  objRadaB = objRadB - objBumpB;*/
  //if(objRadaB<objRadB/3){objRadaB=objRadB/3;}

  if(decompressFlag){
    compNow = springX/springMax;
    //alert(""+compNow);
  }
 //if(springX<0){
 if(compNow<=percComp){
    //oneMoreFlag=true;
    collisionFlag = false;
    afterCollFlag = true;
    objBumpA= 0;
    objBumpB= 0;
    objRadaA = objRadaAold;//objRadA - objBumpA;
    objRadaB = objRadaBold;//objRadB - objBumpB;
    springT2=time;
    springTr2=turn;
    objVelA=velAA[turn-2];//oldVelA;
    objVelB=velBA[turn-2];//oldVelB;
    //deltaTime=deltaTime*10;
  }
  else{
    oldVelA=objVelA;
    oldVelB=objVelB;
    velAA[turn]=objVelA;
    velBA[turn]=objVelB;
  }
}

function plotDriver(){

    time = time+deltaTime/1000;
    turn++;

  //  if(time>timeMax){
      //alert("timemax");
  //    stopDriver();}
//** driver osc
if(goFlag){
  var ballDiff = Math.abs(objPosB - objPosA);
  var collisionDist = objRadA+objRadB;
  if(ballDiff<=collisionDist&&!afterCollFlag){
    collisionFlag = true;
    if(springT0==0){
      springT0=time;
        springTr0=turn;
          endPos = (objPosA+objPosB)/2;}
    //deltaTime=deltaTime/10;
  }
    endPos = (objPosA+objPosB)/2;

  /*
  if(collisionFlag&&oneMoreFlag){
      calcCollisionAonB();
        collisionFlag = false;
        afterCollFlag = true;
        objBumpA= 0;
        objBumpB= 0;
        objRadaA = objRadA - objBumpA;
        objRadaB = objRadB - objBumpB;
        oneMoreFlag=false;
  }*/
    if(collisionFlag){//&&!oneMoreFlag&&springX>=0
      if(flagAonB){
        calcCollisionAonB();}
      else {
        calcCollisionBonA();}
    }
    else{
      /*
    collisionFlag = false;
    afterCollFlag = true;
    objBumpA= 0;
    objBumpB= 0;
    objRadaA = objRadA - objBumpA;
    objRadaB = objRadB - objBumpB;
*/
    }
    if(!collisionFlag){
    objPosA = centreA + objVelA*velScale;//objPosA + objVelA*velScale;
    objPosB = centreB + objVelB*velScale;//objPosB + objVelB*velScale;
      centreA=objPosA;
      centreB=objPosB;}
      if(collisionFlag){
        centreA=endPos-objRadaA;
        centreB=endPos+objRadaB;
        //objPosA=centreA-objRadA;//+objRadaA;
        //objPosB=centreB+objRadB;//-objRadaB;
      }
      //if(turn>springT1&&turn<springT2+10){
  //posAA[turn]=centreA;
  //posBA[turn]=centreB;
//}
    if(objPosA<-(canvW+objRadA*2)){
      stopDriver();
    }
    if(objPosA>2*canvW+objRadA*2){
      stopDriver();
    }
    if(objPosB<-(canvW+objRadB*2)){
      stopDriver();
    }
    if(objPosB>2*canvW+objRadB*2){
      stopDriver();
    }
    if(turn>springTr2+50){
      //alert("turn="+turn+" springTr2="+springTr2);
      stopDriver();
    }
    if(!afterCollFlag&&!collisionFlag&&objVelB>=objVelA){
      //no contact possible
        document.getElementById("dummy2").innerHTML="No contact possible!";
        stopDriver();
    }
//} //goflag end bracket

    if(afterCollFlag){
        mvA = objMassA*objVelA;
        mvB = objMassB*objVelB;
        mvT = mvA+mvB;
        keA2 = 0.5*objMassA*Math.pow(objVelA, 2);
        keB2 = 0.5*objMassB*Math.pow(objVelB, 2);
        keT2 = keA2+keB2;
        /*if(objVelA<0.1){
        objVelA=0;}
        else{}
        if(objVelB<0.1){
        objVelB=0;}
        else{}*/
      document.getElementById("dummy2").innerHTML="v<sub>A</sub> = "+ printNumber(objVelA)+" "+speedUnits+";  v<sub>B</sub> = "+ printNumber(objVelB)
      +" "+speedUnits+"<br>p'<sub>A</sub> = "+ printNumber(mvA)+" "+mvUnits+ ";<br>  p'<sub>B</sub> = "+ printNumber(mvB)
      +" "+mvUnits+"<br>ke'<sub>A</sub> = "+ printNumber(keA2/1000)+" "+keUnits+ ";<br>  ke'<sub>B</sub> = "+ printNumber(keB2/1000)+" "+keUnits;
      /*document.getElementById("dummy3").innerHTML="max compression = "+ springMax+"<br>max force = "
      + forceMax+"<br>impulse = "+ impulse+ " <br><br>time0 = "
      + springT0+ " <br>time1 = "+ springT1+ " <br>time2 = "+ springT2
      + " <br><br>turn0 = "+ springTr0+ " <br>turn1 = "+ springTr1+ " <br>turn2 = "+ springTr2;
      */
      document.getElementById("dummy3").innerHTML="<br>max force = "
      + printNumber(forceMax)+forceUnits+"<br>ave force = "
      + printNumber(forceAve)+" "+forceUnits+"<br>impulse = "+ printNumber(impulse)
      + " "+impulseUnits+" <br>contact time = "+ (springTr2-springTr0)+" "+timeUnits;


      document.getElementById("dummy4").innerHTML="<br>total mu = "
      + printNumber(muT)+" "+mvUnits+"<br>total mv = "
      + printNumber(mvT)+" "+mvUnits+"<br>total KE = "
      + printNumber(keT1/1000)+" "+keUnits+"<br>total KE' = "
      + printNumber(keT2/1000)+" "+keUnits;
    }
}//goFlag end
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
                for(f=1;f<6;f++){
                ctx.fillText("-"+f*10,((mirrorLX+mirrorRX)/2-8)-(f*50), ((mirrorLY+mirrorRY)/2+25));
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

                    //***MASS A
                        ctx.beginPath();
                        ctx.lineWidth = "4";
                        ctx.strokeStyle = "black";
                        //ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle)
                        ctx.ellipse(centreA, canvH/2, objRadaA, objRadbA, 0, 0, 2 * Math.PI);
                        //ctx.arc(objPosA, canvH/2, objRadA, 0, 2 * Math.PI);
                        ctx.stroke();
                        ctx.beginPath();
                        ctx.lineWidth = "4";
                        ctx.fillStyle = "blue";
                        //ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle)
                        ctx.ellipse(centreA, canvH/2, objRadaA-2, objRadbA-2, 0, 0, 2 * Math.PI);
                        //ctx.arc(objPosA, canvH/2, objRadA, 0, 2 * Math.PI);
                        ctx.fill();
                        ctx.beginPath();
                        ctx.fillStyle = "white";
                        //ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle)
                        ctx.ellipse(centreA+objRadaA/2.5, canvH/2-objRadbA/2.5, objRadaA/5, objRadbA/5, 0, 0, 2 * Math.PI);
                        //ctx.arc(objPosA, canvH/2, objRadA, 0, 2 * Math.PI);
                        ctx.fill();
                    //***MASS B
                        ctx.beginPath();
                        ctx.lineWidth = "4";
                        ctx.strokeStyle = "black";
                        ctx.ellipse(centreB, canvH/2, objRadaB, objRadbB, 0, 0, 2 * Math.PI);
                        //ctx.arc(objPosB, canvH/2, objRadB, 0, 2 * Math.PI);
                        ctx.stroke();
                        ctx.beginPath();
                            ctx.lineWidth = "4";
                            ctx.fillStyle = "red";
                            ctx.ellipse(centreB, canvH/2, objRadaB-2, objRadbB-2, 0, 0, 2 * Math.PI);
                            //ctx.arc(objPosB, canvH/2, objRadB, 0, 2 * Math.PI);
                            ctx.fill();
                            ctx.beginPath();
                            ctx.fillStyle = "white";
                            //ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle)
                            ctx.ellipse(centreB+objRadaB/2.5, canvH/2-objRadbB/2.5, objRadaB/5, objRadbB/5, 0, 0, 2 * Math.PI);
                            //ctx.arc(objPosA, canvH/2, objRadA, 0, 2 * Math.PI);
                            ctx.fill();
                                                //ARROW A - centre
                                          ctx.beginPath();
                                          ctx.lineWidth = "2";
                                          ctx.strokeStyle = "blue";
                                          ctx.moveTo(centreA, canvH/2,);
                                          if(objVelA<0){arrAsign=-1;}
                                          else{arrAsign=1;}
                                          arrLenA = Math.pow(objVelA*arrAsign*1000,0.3);
                                          ctx.lineTo(centreA+arrLenA*arrowSc*arrAsign, canvH/2-1);
                                          ctx.stroke();
                                          if(Math.abs(objVelA)>0.01){
                                          var arrowA = 5*arrAsign;//arrLenA*arrAsign;
                                          /*if(objVelA>10){arrowA = objVelA/arrowSc;}
                                          else if(objVelA<-10){arrowA = objVelA/arrowSc;}
                                          else if(objVelA<0){arrowA = -5;}*/
                                          ctx.beginPath();
                                          ctx.lineWidth = "2";
                                          ctx.strokeStyle = "blue";
                                          ctx.moveTo(centreA+arrLenA*arrowSc*arrAsign, canvH/2-1);
                                          ctx.lineTo(centreA+arrLenA*arrowSc*arrAsign-arrowA, canvH/2-1-arrowA);
                                          ctx.stroke();
                                          ctx.beginPath();
                                          ctx.lineWidth = "2";
                                          ctx.strokeStyle = "blue";
                                          ctx.moveTo(centreA+arrLenA*arrowSc*arrAsign, canvH/2-1);
                                          ctx.lineTo(centreA+arrLenA*arrowSc*arrAsign-arrowA, canvH/2-1+arrowA);
                                          ctx.stroke();}
                                          //ARROW A - top
                                    ctx.beginPath();
                                    ctx.lineWidth = "2";
                                    ctx.strokeStyle = "blue";
                                    ctx.moveTo(centreA, 40);
                                    if(objVelA<0){arrAsign=-1;}
                                    else{arrAsign=1;}
                                    arrLenA = Math.pow(objVelA*arrAsign*1000,0.3);
                                    ctx.lineTo(centreA+arrLenA*arrowSc*arrAsign, 40,);
                                    ctx.stroke();
                                    if(Math.abs(objVelA)>0.01){
                                    var arrowA = 5*arrAsign;//arrLenA*arrAsign;
                                    /*if(objVelA>10){arrowA = objVelA/arrowSc;}
                                    else if(objVelA<-10){arrowA = objVelA/arrowSc;}
                                    else if(objVelA<0){arrowA = -5;}*/
                                    ctx.beginPath();
                                    ctx.lineWidth = "2";
                                    ctx.strokeStyle = "blue";
                                    ctx.moveTo(centreA+arrLenA*arrowSc*arrAsign, 40);
                                    ctx.lineTo(centreA+arrLenA*arrowSc*arrAsign-arrowA, 40-arrowA);
                                    ctx.stroke();
                                    ctx.beginPath();
                                    ctx.lineWidth = "2";
                                    ctx.strokeStyle = "blue";
                                    ctx.moveTo(centreA+arrLenA*arrowSc*arrAsign, 40);
                                    ctx.lineTo(centreA+arrLenA*arrowSc*arrAsign-arrowA, 40+arrowA);
                                    ctx.stroke();}
                                          //ARROW B
                                          ctx.beginPath();
                                          ctx.lineWidth = "2";
                                          ctx.strokeStyle = "red";
                                          ctx.moveTo(centreB, canvH/2,);
                                          if(objVelB<0){arrBsign=-1;}
                                          else{arrBsign=1;}
                                          arrLenB = Math.pow(objVelB*arrBsign*1000,0.3);
                                          ctx.lineTo(centreB+arrLenB*arrowSc*arrBsign, canvH/2+1);
                                          ctx.stroke();
                                          if(Math.abs(objVelB)>0.01){
                                          var arrowB = 5*arrBsign;//arrLenA*arrAsign;
                                          /*if(objVelA>10){arrowA = objVelA/arrowSc;}
                                          else if(objVelA<-10){arrowA = objVelA/arrowSc;}
                                          else if(objVelA<0){arrowA = -5;}*/
                                          ctx.beginPath();
                                          ctx.lineWidth = "2";
                                          ctx.strokeStyle = "red";
                                          ctx.moveTo(centreB+arrLenB*arrowSc*arrBsign, canvH/2+1);
                                          ctx.lineTo(centreB+arrLenB*arrowSc*arrBsign-arrowB, canvH/2+1-arrowB);
                                          ctx.stroke();
                                          ctx.beginPath();
                                          ctx.lineWidth = "2";
                                          ctx.strokeStyle = "red";
                                          ctx.moveTo(centreB+arrLenB*arrowSc*arrBsign, canvH/2+1);
                                          ctx.lineTo(centreB+arrLenB*arrowSc*arrBsign-arrowB, canvH/2+1+arrowB);
                                          ctx.stroke();}
                                          //ARROW B - bottom
                                        ctx.beginPath();
                                        ctx.lineWidth = "2";
                                        ctx.strokeStyle = "red";
                                        ctx.moveTo(centreB, 50);
                                        if(objVelB<0){arrBsign=-1;}
                                        else{arrBsign=1;}
                                        arrLenB = Math.pow(objVelB*arrBsign*1000,0.3);
                                        ctx.lineTo(centreB+arrLenB*arrowSc*arrBsign, 50);
                                        ctx.stroke();
                                        if(Math.abs(objVelB)>0.01){
                                        var arrowB = 5*arrBsign;//arrLenA*arrAsign;
                                              /*if(objVelA>10){arrowA = objVelA/arrowSc;}
                                              else if(objVelA<-10){arrowA = objVelA/arrowSc;}
                                              else if(objVelA<0){arrowA = -5;}*/
                                        ctx.beginPath();
                                        ctx.lineWidth = "2";
                                        ctx.strokeStyle = "red";
                                        ctx.moveTo(centreB+arrLenB*arrowSc*arrBsign, 50);
                                        ctx.lineTo(centreB+arrLenB*arrowSc*arrBsign-arrowB, 50-arrowB);
                                        ctx.stroke();
                                        ctx.beginPath();
                                        ctx.lineWidth = "2";
                                        ctx.strokeStyle = "red";
                                        ctx.moveTo(centreB+arrLenB*arrowSc*arrBsign, 50);
                                        ctx.lineTo(centreB+arrLenB*arrowSc*arrBsign-arrowB, 50+arrowB);
                                        ctx.stroke();}

  }


  function changeMA(n){
    //n2 = parseInt(document.getElementById("myRange2").value)/100;//valueAsNumber(slider2.value);
  if(makeChangesFlag){
    if(n==0){
      objMassA=1;
    }
    else if(n==100){
      objMassA=100;
    }
    else if(n==1){
      objMassA=objMassA+1;
    }
    else if(n==-1){
      objMassA=objMassA-1;
    }
    else{
      objMassA=objMassA*n;
    }
    if(objMassA<0.0001){objMassA=0.0001;}
    if(objMassA>100000){objMassA=100000;}
    //var slideValMA = parseInt(document.getElementById("myRangeMA").value);//valueAsNumber(slider2.value);
    //objMassA = slideValMA;
    //objMass = objMass/10;//Math.round(objMass/100)*10;
    //objRadA = 10*Math.pow(objMassA, 0.2);
    //objMassA = objMassA*objMassAx*objMassAxU;
    objRadA = 10*Math.pow(objMassA, 0.2);
    objRadaA = objRadA;
    objRadaAold = objRadA;
    objRadbA = objRadA;
    document.getElementById("dummyMA").innerHTML="m<sub>A</sub> = "+printNumber2(objMassA);
    goFlag=false;
        muA = objMassA*objVelA;
        muB = objMassB*objVelB;
        muT = muA+muB;
        keA1 = 0.5*objMassA*Math.pow(objVelA, 2);
        keB1 = 0.5*objMassB*Math.pow(objVelB, 2);
        keT1 = keA1+keB1;
    document.getElementById("dummyMA2").innerHTML="p<sub>A</sub> = "+printNumber(muA)+" "+mvUnits;
    document.getElementById("dummyUA2").innerHTML="ke<sub>A</sub> = "+printNumber(keA1/1000)+" "+keUnits;;//Math.round(keA1/100)/10+" "+keUnits;
    plotDriver();
    //document.getElementById("dummy3").innerHTML="m = "+objMass+" kg<br>k = "+springK+" N/m<br>";
  }
    //plotNewMoveQ()
  }

  function changeMB(n){
    //n2 = parseInt(document.getElementById("myRange2").value)/100;//valueAsNumber(slider2.value);
    if(makeChangesFlag){
      if(n==0){
        objMassB=1;
      }
      else if(n==100){
        objMassB=100;
      }
      else if(n==1){
        objMassB=objMassB+1;
      }
      else if(n==-1){
        objMassB=objMassB-1;
      }
      else{
        objMassB=objMassB*n;
      }
      if(objMassB<0.0001){objMassB=0.0001;}
      if(objMassB>100000){objMassB=100000;}
      //if(makeChangesFlag){
    //var slideValMB = parseInt(document.getElementById("myRangeMB").value);//valueAsNumber(slider2.value);
    //objMassB = slideValMB;
    //objMass = objMass/10;//Math.round(objMass/100)*10;
    //objMassB = objMassB*objMassBx*objMassBxU;
    objRadB = 10*Math.pow(objMassB, 0.2);
    objRadaB = objRadB;
    objRadaBold = objRadB;
    objRadbB = objRadB;
    document.getElementById("dummyMB").innerHTML="m<sub>B</sub> = "+printNumber2(objMassB);
    goFlag=false;
        muA = objMassA*objVelA;
        muB = objMassB*objVelB;
        muT = muA+muB;
        keA1 = 0.5*objMassA*Math.pow(objVelA, 2);
        keB1 = 0.5*objMassB*Math.pow(objVelB, 2);
        keT1 = keA1+keB1;
    document.getElementById("dummyMB2").innerHTML="p<sub>B</sub> = "+printNumber(muB)+" "+mvUnits;
    document.getElementById("dummyUB2").innerHTML="ke<sub>B</sub> = "+printNumber(keB1/1000)+" "+keUnits;
    plotDriver();
    //document.getElementById("dummy3").innerHTML="m = "+objMass+" kg<br>k = "+springK+" N/m<br>";
  }
    //plotNewMoveQ()
  }

    function changeUA(n){
      if(makeChangesFlag){
        if(n==0){
          objVelA=1;
        }
        else if(n==100){
          objVelA=100;
        }
        else if(n==1){
          objVelA=objVelA+1;
        }
        else if(n==-1){
          objVelA=objVelA-1;
        }
        else{
          objVelA=objVelA*n;
        }
        if(objVelA<-100){objVelA=-100;}
        if(objVelA>100){objVelA=100;}
        //if(makeChangesFlag){
      //n2 = parseInt(document.getElementById("myRange2").value)/100;//valueAsNumber(slider2.value);
      //var slideValUA = parseInt(document.getElementById("myRangeUA").value);//valueAsNumber(slider2.value);
      //slideValUA = slideValUA-100;
      //objVelA = slideValUA;
      //objVelA = objVelA-100;
      //objVelA = objVelA*objVelAx*objVelAxU;
      objVelAstart = objVelA;
      document.getElementById("dummyUA").innerHTML="u<sub>A</sub> = "+printNumber2(objVelA);
      goFlag=false;
          muA = objMassA*objVelA;
          muB = objMassB*objVelB;
          muT = muA+muB;
          keA1 = 0.5*objMassA*Math.pow(objVelA, 2);
          keB1 = 0.5*objMassB*Math.pow(objVelB, 2);
          keT1 = keA1+keB1;
      document.getElementById("dummyMA2").innerHTML="p<sub>A</sub> = "+printNumber(muA)+" "+mvUnits;
      document.getElementById("dummyUA2").innerHTML="ke<sub>A</sub> = "+printNumber(keA1/1000)+" "+keUnits;
      plotDriver();
      //document.getElementById("dummy3").innerHTML="m = "+objMass+" kg<br>k = "+springK+" N/m<br>";
      //plotNewMoveQ()
      }
    }

    function changeUB(n){
      if(makeChangesFlag){
        if(n==0){
          objVelB=1;
        }
        else if(n==100){
          objVelB=100;
        }
        else if(n==1){
          objVelB=objVelB+1;
        }
        else if(n==-1){
          objVelB=objVelB-1;
        }
        else{
          objVelB=objVelB*n;
        }
        if(objVelB<-100){objVelB=-100;}
        if(objVelB>100){objVelB=100;}
          //if(makeChangesFlag){
      //n2 = parseInt(document.getElementById("myRange2").value)/100;//valueAsNumber(slider2.value);
      //var slideValUB = parseInt(document.getElementById("myRangeUB").value);//valueAsNumber(slider2.value);
      //slideValUB = slideValUB-100;
      //objVelB = slideValUB;
      //objVelB = objVelB-100;
      //objVelB = objVelB*objVelBx*objVelBxU;
      objVelBstart = objVelB;
      document.getElementById("dummyUB").innerHTML="u<sub>B</sub> = "+printNumber2(objVelB);
      goFlag=false;
          muA = objMassA*objVelA;
          muB = objMassB*objVelB;
          muT = muA+muB;
          keA1 = 0.5*objMassA*Math.pow(objVelA, 2);
          keB1 = 0.5*objMassB*Math.pow(objVelB, 2);
          keT1 = keA1+keB1;
      document.getElementById("dummyMB2").innerHTML="p<sub>B</sub> = "+printNumber(muB)+" "+mvUnits;
      document.getElementById("dummyUB2").innerHTML="ke<sub>B</sub> = "+printNumber(keB1/1000)+" "+keUnits;
      plotDriver();
      //document.getElementById("dummy3").innerHTML="m = "+objMass+" kg<br>k = "+springK+" N/m<br>";
      //plotNewMoveQ()
      }
    }


        function changeE(){
          if(makeChangesFlag){
          //n2 = parseInt(document.getElementById("myRange2").value)/100;//valueAsNumber(slider2.value);
          elasticity = parseInt(document.getElementById("myRangeE").value);//valueAsNumber(slider2.value);
          document.getElementById("dummyE").innerHTML="e = "+elasticity+"%";
          elasticity = elasticity/100;
              var dummyE1 = Math.pow(elasticity,2);
              var dummyE2 = 1-dummyE1;
              percComp = Math.pow(dummyE2, 0.5);
              //alert(""+percComp);
          goFlag=false;
          plotDriver();
          //document.getElementById("dummy3").innerHTML="m = "+objMass+" kg<br>k = "+springK+" N/m<br>";
          //plotNewMoveQ()
          }
        }

        function changeAS(){
          if(makeChangesFlag){
          //n2 = parseInt(document.getElementById("myRange2").value)/100;//valueAsNumber(slider2.value);
          var dummyAS = parseInt(document.getElementById("myRangeAS").value);//valueAsNumber(slider2.value);
          //document.getElementById("dummyE").innerHTML="e = "+elasticity+"%";
          dummyAS = dummyAS-2;
              var dummyAS2 = Math.pow(10,dummyAS);
              springK = dummyAS2;
              document.getElementById("dummyAS").innerHTML="&lt;-Acc/Sp-&gt; = x"+springK;
              //alert(""+percComp);
          goFlag=false;
          plotDriver();
          //document.getElementById("dummy3").innerHTML="m = "+objMass+" kg<br>k = "+springK+" N/m<br>";
          //plotNewMoveQ()
          }
        }

        function changeMBx(n){
          if(n.value=="10"){objMassBx=10;}
          else {objMassBx=1;}
          objMassB = objMassB*objMassBx;
          if(massUnitsA=="t"&&massUnitsB=="t"&&objMassAx==10&&objMassBx==10){
            bumpScale=0.2;
          }
          else if(massUnitsA=="t"&&massUnitsB=="t"){
            bumpScale=0.5;
          }
          else{
            bumpScale=1;
          }
          zeroDriver();
        }

                function changeMAx(n){
                  if(n.value=="10"){objMassAx=10;}
                  else {objMassAx=1;}
                  objMassA = objMassA*objMassAx;
                  if(massUnitsA=="t"&&massUnitsB=="t"&&objMassAx==10&&objMassBx==10){
                    bumpScale=0.2;
                  }
                  else if(massUnitsA=="t"&&massUnitsB=="t"){
                    bumpScale=0.5;
                  }
                  else{
                    bumpScale=1;
                  }
                  zeroDriver();
                }

                        function changeUMBx(n){
                          if(n.value=="10"){objVelBx=10;}
                          else {objVelBx=1;}
                          objVelB = objVelB*objVelBx;
                          zeroDriver();
                        }

                                function changeUAx(n){
                                  if(n.value=="10"){objVelAx=10;}
                                  else {objVelAx=1;}
                                  objVelA = objVelA*objVelAx;
                                  zeroDriver();
                                }

        function changeMassU(n){
          if(n.value=="g"){massUnits="g";}
          else if(n.value=="t"){massUnits="t"}
          else {massUnits="kg"}
          findNewUnits();
        }

                function changeMassUB(n){
                  if(n.value=="g"){massUnitsB="g";objMassBxU=0.001;}
                  else if(n.value=="t"){massUnitsB="t";objMassBxU=1000;}
                  else {massUnitsB="kg";objMassBxU=1;}
                  if(massUnitsA=="t"&&massUnitsB=="t"&&objMassAx==10&&objMassBx==10){
                    bumpScale=0.2;
                  }
                  else if(massUnitsA=="t"&&massUnitsB=="t"){
                    bumpScale=0.5;
                  }
                  else{
                    bumpScale=1;
                  }
                  findNewUnits2();
                }

                                function changeMassUA(n){
                                  if(n.value=="g"){massUnitsA="g";objMassAxU=0.001;}
                                  else if(n.value=="t"){massUnitsA="t";objMassAxU=1000;}
                                  else {massUnitsA="kg";objMassAxU=1;}
                                  if(speedUnitsA=="cm/s"&&speedUnitsB=="cm/s"){
                                    bumpScale=3;}
                                  else if(massUnitsA=="t"&&massUnitsB=="t"&&objMassAx==10&&objMassBx==10){
                                    bumpScale=0.2;
                                  }
                                  else if(massUnitsA=="t"&&massUnitsB=="t"){
                                    bumpScale=0.5;
                                  }
                                  else{
                                    bumpScale=1;
                                  }
                                  findNewUnits2();
                                }


          function changeSpeedU(n){
              if(n.value=="cm"){speedUnits="cm/s";}
              else if(n.value=="km"){speedUnits="km/s"}
              else{speedUnits="m/s"}
              findNewUnits();
          }

                    function changeSpeedUB(n){
                        if(n.value=="cm"){speedUnitsB="cm/s";objVelBxU=0.01;}
                        else if(n.value=="km"){speedUnitsB="km/s";objVelBxU=1000;}
                        else{speedUnitsB="m/s";objVelBxU=1;}
                        if(speedUnitsA=="cm/s"&&speedUnitsB=="cm/s"){
                          bumpScale=10;}
                        else if(massUnitsA=="t"&&massUnitsB=="t"&&objMassAx==10&&objMassBx==10){
                          bumpScale=0.2;
                        }
                        else if(massUnitsA=="t"&&massUnitsB=="t"){
                          bumpScale=0.5;
                        }
                        else{
                          bumpScale=1;
                        }
                        findNewUnits2();
                    }

                                        function changeSpeedUA(n){
                                            if(n.value=="cm"){speedUnitsA="cm/s";objVelAxU=0.01;}
                                            else if(n.value=="km"){speedUnitsA="km/s";objVelAxU=1000;}
                                            else{speedUnitsA="m/s";objVelAxU=1;}
                                            if(speedUnitsA=="cm/s"&&speedUnitsB=="cm/s"){
                                              bumpScale=10;}
                                            else if(massUnitsA=="t"&&massUnitsB=="t"&&objMassAx==10&&objMassBx==10){
                                              bumpScale=0.2;
                                            }
                                            else if(massUnitsA=="t"&&massUnitsB=="t"){
                                              bumpScale=0.5;
                                            }
                                            else{
                                              bumpScale=1;
                                            }
                                            findNewUnits2();
                                        }

function findNewUnits2(){
  forceUnits="kN";
  timeUnits="ms";
  impulseUnits="N.s";
  mvUnits = "N.s";
  keUnits = "kJ";
      objVelA = objVelA*objVelAx*objVelAxU;
      objVelB = objVelB*objVelBx*objVelBxU;
      objMassA = objMassA*objMassAx*objMassAxU;
      objMassB = objMassB*objMassBx*objMassBxU;
      muA = objMassA*objVelA;//*objMassAx*objVelAx;
      muB = objMassB*objVelB;//*objMassBx*objVelBx;
      muT = muA+muB;
      keA1 = 0.5*objMassA*Math.pow(objVelA, 2);
      keB1 = 0.5*objMassB*Math.pow(objVelB, 2);
      keT1 = keA1+keB1;

      zeroDriver();

}

function findNewUnits(){
  if(massUnits=="kg"&&speedUnits=="m/s"){
    forceUnits="kN";
    timeUnits="ms";
    impulseUnits="N.s";
    mvUnits = "N.s";
    keUnits = "kJ";
  }
  else if(massUnits=="kg"&&speedUnits=="cm/s"){
    forceUnits="x10 N";
    timeUnits="ms";
    impulseUnits="cN.s";
    mvUnits = "x10<sup>-2</sup> N.s";
    keUnits = "x10<sup>-2</sup> kJ";
  }
  else if(massUnits=="kg"&&speedUnits=="km/s"){
    forceUnits="MN";
    timeUnits="ms";
    impulseUnits="kN.s";
    mvUnits = "kN.s";
    keUnits = "MJ";
  }
  else if(massUnits=="g"&&speedUnits=="m/s"){
    forceUnits="N";
    timeUnits="ms";
    impulseUnits="mN.s";
    mvUnits = "mN.s";
    keUnits = "J";
  }
  else if(massUnits=="g"&&speedUnits=="cm/s"){
    forceUnits="x10<sup>-2</sup> N";
    timeUnits="ms";
    impulseUnits="x10<sup>-5</sup> N.s";
    mvUnits = "x10<sup>-5</sup> Ns";
    keUnits = "x10<sup>-2</sup> J";
  }
  else if(massUnits=="g"&&speedUnits=="km/s"){
    forceUnits="kN";
    timeUnits="ms";
    impulseUnits="N.s";
    mvUnits = "Ns";
    keUnits = "kJ";
  }
  else if(massUnits=="t"&&speedUnits=="m/s"){
    forceUnits="x10 kN";
    timeUnits="x100 ms";
    impulseUnits="kN.s";
    mvUnits = "kN.s";
    keUnits = "MJ";
  }
  else if(massUnits=="t"&&speedUnits=="cm/s"){
    forceUnits="kN";
    timeUnits="x10 ms";
    impulseUnits="x10 N.s";
    mvUnits = "x10 Ns";
    keUnits = "x10 kJ";
  }
  else if(massUnits=="t"&&speedUnits=="km/s"){
    forceUnits="MN";
    timeUnits="s";
    impulseUnits="MN.s";
    mvUnits = "MNs";
    keUnits = "GJ";
  }
document.getElementById("dummyMA2").innerHTML="p<sub>A</sub> = "+printNumber(muA)+" "+mvUnits;//+muA+" "+mvUnits;
document.getElementById("dummyUA2").innerHTML="ke<sub>A</sub> = "+printNumber(keA1/1000)+" "+keUnits;//+Math.round(keA1/100)/10+" "+keUnits;
document.getElementById("dummyMB2").innerHTML="p<sub>B</sub> = "+printNumber(muB)+" "+mvUnits;//+muB+" "+mvUnits;
document.getElementById("dummyUB2").innerHTML="ke<sub>B</sub> = "+printNumber(keB1/1000)+" "+keUnits;//+Math.round(keB1/100)/10+" "+keUnits;
}

function stopDriver(){
  clearTimeout(myTimer1);
  goFlag = false;
  makeChangesFlag = true;
  plotGraphF();
  plotGraphV();
  //alert(""+posAA);
  //alert("stop: "+moveData);
}

/*function plotGraphF(){
  var maxY=250;
  var maxX=250;
  var totalX = (springTr2-springTr0);
  var scaleX = maxX/totalX;
  var scaleY = maxY/forceMax;
  var pointX = 0;
  var pointY = 0;

  var c2 = document.getElementById("myCanvasF");
  var ctx2 = c2.getContext("2d");
  // Green rectangle
  ctx2.beginPath();
  ctx2.fillStyle = "yellow";
  ctx2.fillRect(0, 0, 260, 260);
  //ctx2.stroke();
        ctx2.beginPath();
        ctx2.lineWidth = "1";
        ctx2.strokeStyle = "black";
        ctx2.moveTo(0, maxY);
  for(h=0;h<totalX;h++){
    turnZero = h+springTr0;
        pointY = maxY-forceA[turnZero]*scaleY;
        ctx2.lineTo(h*scaleX, pointY);
        ctx2.stroke();
  }
}


function plotGraphV(){
  var maxY=250;
  var maxX=250;
  var totalX = (springTr2-springTr0)+130;
  var scaleX = maxX/totalX;
  var velARange = velAMax-velAMin;
  var scaleY = maxY/velARange;
  var pointX = 0;
  var pointY = 0;
  var velAMaxMinA2 = new Array();
  var velALen = velAMaxMinA.length;
  //var maxYval = velAMaxMinA[velALen-1];
  //var minYval = velAMaxMinA[0+springTr0];
  //alert("max="+maxYval+" min="+minYval);
  for(g=0; g<50;g++){
    velAMaxMinA2[g+springTr0]=velAMaxMinA[0+springTr0];
  }
  for(g=0; g<velALen;g++){
    velAMaxMinA2[50+g+springTr0]=velAMaxMinA[g+springTr0];
  }
  for(g=0; g<50;g++){
    velAMaxMinA2[50+velALen+g+springTr0]=velAMaxMinA[velALen-1];
  }

  var c2 = document.getElementById("myCanvasV");
  var ctx2 = c2.getContext("2d");
  // Green rectangle
  ctx2.beginPath();
  ctx2.fillStyle = "yellow";
  ctx2.fillRect(0, 0, 260, 260);
  //ctx2.stroke();
        ctx2.beginPath();
        ctx2.lineWidth = "1";
        ctx2.strokeStyle = "black";
        ctx2.moveTo(0, 0);
  for(h=0;h<totalX;h++){
    turnZero = h+springTr0;
        pointY = maxY-(velAMaxMinA2[turnZero]-velAMin)*scaleY;
        ctx2.lineTo(h*scaleX, pointY);
        ctx2.stroke();
  }
}*/

function zeroDriver(){

  objPosA = canvW/4;
  objPosB = canvW*3/4;
  objVelA = objVelAstart;
  objVelB = objVelBstart;
  objRadaAold = objRadA;
  objRadaBold = objRadB;
  objRadaA = objRadA;
  objRadaB = objRadB;
  endPos = (objPosA+objPosB)/2;
  centreA = objPosA;
  centreB = objPosB;
  makeChangesFlag = true;
  springX=0;
  springMax = 0;
  forceMax = 0;
  forceMax = 0;
  forceTot = 0;
  forceAve = 0;
  forceTime = 0;
  springForce = 0;
  impulse = 0;
  springT0 = 0;
  springT1 = 0;
  springT2 = 0;
  turn = 0;
  springTr0 = 0;
  springTr1 = 0;
  springTr2 = 1e6;
  compNow = 2;
  decompressFlag=false;
  collisionFlag = false;
  makeChangesFlag=true;
  afterCollFlag = false;
  oneMoreFlag = false;
  //changeMA();
  //changeMB();
  //changeUA();
  //changeUB();
  //alert(""+percComp);
  plotDriver();

  document.getElementById("dummy2").innerHTML="";
  document.getElementById("dummy3").innerHTML="";
  document.getElementById("dummy4").innerHTML="";
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
  //myTimer1 =  setInterval(plotDriver, deltaTime)
  }
  goFlag = false;
}

function printNumber(n){
  var answerNumb = n;
  if(n!=0){
  var ansLog = Math.floor(Math.log10(Math.abs(answerNumb)));}
  else{
    ansLog=0;
  }
  if(ansLog<2&&ansLog>-2){
  answerNumb = answerNumb.toFixed(2);///100;
  var answerText = ""+answerNumb;
  }
  else{
  var ansPow = Math.pow(10,ansLog);
  answerNumb = answerNumb/ansPow;
  answerNumb = Math.round(answerNumb *100)/100;
  answerNumb = answerNumb.toFixed(2);///100;
  var answerText = answerNumb+" x 10<sup>"+ansLog+"</sup> ";
  if(ansLog<-1){answerText=0;}
  }
  return answerText;
}

function printNumber2(n){
  var answerNumb = n;
  if(n!=0){
  var ansLog = Math.floor(Math.log10(Math.abs(answerNumb)));}
  else{
    ansLog=0;
  }
  if(ansLog<4&&ansLog>-1){
  answerNumb = answerNumb.toFixed(2);///100;
  var answerText = ""+answerNumb;
  }
  else{
  var ansPow = Math.pow(10,ansLog);
  answerNumb = answerNumb/ansPow;
  answerNumb = Math.round(answerNumb *100)/100;
  answerNumb = answerNumb.toFixed(2);///100;
  var answerText = answerNumb+" x 10<sup>"+ansLog+"</sup> ";
  if(ansLog<-1){answerText=0;}
  }
  return answerText;
}
