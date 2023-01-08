
var canvW=760;
var canvH=560;
var edge = 60;
var xmin = edge;
var xmax = canvW-xmin;
var ymin = edge;
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
var moveMirror = false;//true;
var moveF = true;
var moveRay = true;//false;
var arrXA = new Array();//hold x pos of arrow centre
var arrYA = new Array();
var noOfArr = 0;
var arrFXA = new Array();//hold x comp of force at arrow position
var arrFYA = new Array();
var arrAngle = new Array();//hold angle of arrow
var arrLength = 10;//half length of arrow
var arrNewLength = new Array();
var mirrorLX = edge;
var mirrorLY = canvH-120;
var mirrorRX = canvW-edge;
var mirrorRY = canvH-120;
var mirrorMX = canvW/2;//canvH-edge + edge /2
var mirrorMY = canvH-120;
var mirrorTX = mirrorLX+25;//position of mirror Text
var mirrorTY = mirrorLY+25;
var touchRadius = 20;
var touchFlag = "no";
var minX = edge;
var minY = edge;
var maxX = canvW-edge;
var maxY = canvH-edge;
var changeX = false;//moving mirror along top or bottom if TRUE
var mirrorAngle = 0;
var mirrorDX = canvW-edge*2;
var mirrorDY = 0;
var mirrorGrad = 0;
var mirrorC = mirrorLY;
var posAX = 50*3+minX;
var posAY = 50*3+minY;
var posBX = 50*9+minX;
var posBY = 50*3+minY;
var distAM = 0;
var distBM = 0;
var distTot = 0;
var angleA = 0;
var angleB = 0;
var sigFig = 2;//sf of the distance measures
var sigFig2 = 0;//sf of the angle measures
var physicsFlag = false;
var rayLX = posAX;
var rayLY = posAY;
var rayRX = 50*6+minX;
var rayRY = canvH-120;
var rayMX = 140;//canvH-edge + edge /2
var rayMY = minY;
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
var normL = 10;//half-length of normal;
var reflLX = rayRX;
var reflLY = rayRY;
var reflRX = posBX;
var reflRY = posBY;
var reflMX = 0;//
var reflMY = 0;
var reflTX = reflLX+25;//position of mirror Text
var reflTY = reflLY+25;
var touchRadiusRefl = 20;
var touchFlagRefl = "no";
var changeXRefl = false;//moving mirror along top or bottom if TRUE
var reflAngle = Math.PI;
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

    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.canvas.width = canvW;
    ctx.canvas.height = canvH;
    // Green rectangle
    ctx.beginPath();
    ctx.lineWidth = "1";
    ctx.strokeStyle = "black";
    ctx.rect(edge, edge, canvW-edge*2, canvH-edge*2);
    ctx.stroke();

    rayLX = posAX;
    rayLY = posAY;
    reflRX = posBX;
    reflRY = posBY;

          ctx.lineWidth = "1";
          ctx.font = "10px Arial";
          //top ridge
          ctx.moveTo(posAX, minY);
          ctx.lineTo(posAX, minY-14);
          var posAXs = ((posAX-minX)/50).toFixed(2);
          ctx.fillText(""+posAXs, posAX-5, minY-20);
          ctx.moveTo(posBX, minY);
          ctx.lineTo(posBX, minY-14);
          var posBXs = ((posBX-minX)/50).toFixed(2);
          ctx.fillText(""+posBXs, posBX-5, minY-20);
          //left ridge
          ctx.moveTo(minX, posAY);
          ctx.lineTo(minX-14, posAY);
          var posAYs = ((posAY-minY)/50).toFixed(2);
          ctx.fillText(""+posAYs, minX-37, posAY+4);

          //right ridge
          ctx.moveTo(maxX, posBY);
          ctx.lineTo(maxX+14, posBY);
          var posBYs = ((posBY-minY)/50).toFixed(2);
          ctx.fillText(""+posBYs, maxX+18, posBY+4);

          //markings on mirror line
          ctx.moveTo((mirrorLX+mirrorRX)/2, (mirrorLY+mirrorRY)/2);
          ctx.lineTo((mirrorLX+mirrorRX)/2, (mirrorLY+mirrorRY)/2+14);
          /*for(e=mirrorLX; e<mirrorRX+1;e=e+10){
          ctx.moveTo(e, (mirrorLY+mirrorRY)/2);
          ctx.lineTo(e, (mirrorLY+mirrorRY)/2+6);
          ctx.stroke();}*/
          for(e=(mirrorLX+mirrorRX)/2; e<mirrorRX+1;e=e+50){
          ctx.moveTo(e, (mirrorLY+mirrorRY)/2);
          ctx.lineTo(e, (mirrorLY+mirrorRY)/2+10);
          ctx.stroke();}
          for(e=(mirrorLX+mirrorRX)/2; e>mirrorLX-1;e=e-50){
          ctx.moveTo(e, (mirrorLY+mirrorRY)/2);
          ctx.lineTo(e, (mirrorLY+mirrorRY)/2+10);
          ctx.stroke();}
          ctx.fillText("0",(mirrorLX+mirrorRX)/2-3, (mirrorLY+mirrorRY)/2+25);
          for(f=1;f<6;f++){
          ctx.fillText("-"+f,((mirrorLX+mirrorRX)/2-3)-(f*50), ((mirrorLY+mirrorRY)/2+25));
          ctx.fillText("+"+f,((mirrorLX+mirrorRX)/2-3)+(f*50), ((mirrorLY+mirrorRY)/2+25));
          }


//ctx.setLineDash([5, 3]);/*dashes are 5px and spaces are 3px*/
    ctx.beginPath();
    ctx.lineWidth = "1";
    ctx.strokeStyle = "black";
    ctx.moveTo(mirrorLX, mirrorLY);
    ctx.lineTo(mirrorRX, mirrorRY);
    //ctx.moveTo(edge, canvH-120);
    //ctx.lineTo(canvW-edge*2, canvH-120);
    ctx.stroke();
    //ctx.setLineDash([]);/*stop dashes*/

    ctx.beginPath();
    ctx.font = "edgepx Arial";
    ctx.fillText("M",mirrorTX, mirrorTY);
    ctx.fillStyle = "black";
    //ctx.fillText("M",40, canvH-95 )

        ctx.beginPath();
        ctx.lineWidth = "3";
        ctx.strokeStyle = "black";
        ctx.beginPath();
        ctx.arc(posAX, posAY, 2, 0, 2*Math.PI);
        ctx.stroke();
            ctx.beginPath();
            ctx.font = "20px serif";
            ctx.fillStyle = "black";
            ctx.fillText("A", posAX-10, posAY-20);

        ctx.beginPath();
        ctx.lineWidth = "3";
        ctx.strokeStyle = "black";
        ctx.beginPath();
        ctx.arc(posBX, posBY, 2, 0, 2*Math.PI);
        ctx.stroke();
            ctx.beginPath();
            ctx.font = "20px serif";
            ctx.fillStyle = "black";
            ctx.fillText("B", posBX-10, posBY-20);

    ctx.beginPath();
    ctx.lineWidth = "1";
    ctx.strokeStyle = "blue";
    ctx.moveTo(rayLX, rayLY);
    ctx.lineTo(rayRX, rayRY);
    ctx.stroke();
    ctx.moveTo(reflLX, reflLY);
    ctx.lineTo(reflRX, reflRY);
    ctx.stroke();

/*
    if(textFlag){
    ctx.beginPath();
    ctx.font = "edgepx serif";
    ctx.fillStyle = "blue";
    ctx.fillText("I", rayTX, rayTY);
    }
*/
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
    document.getElementById("dummy3").innerHTML="angle of normal<br>to the vertical<br>="+data32s;

  /*      ctx.beginPath();
        ctx.lineWidth = "1";
        ctx.strokeStyle = "blue";
        ctx.moveTo(rayLX, rayLY);
        ctx.lineTo(rayRX, rayRY);
        //ctx.moveTo(edge, canvH-120);
        //ctx.lineTo(canvW-edge*2, canvH-120);
        ctx.stroke();

        ctx.beginPath();
        ctx.lineWidth = "1";
        ctx.strokeStyle = "blue";
        ctx.moveTo(reflLX, reflLY);
        ctx.lineTo(reflRX, reflRY);
        ctx.stroke();
*/
    document.getElementById("saveButton").addEventListener("click", function(evt){
        // open new window with saved image so user
        // can right click and save to their computer
        window.open(canvas.toDataURL());
    }, false);
/*
    canvas.addEventListener("touchmove", function(){
        var touchPos = events.getTouchPos();

        if (touchPos !== null) {
            var touchX = touchPos.x - 20;
            var touchY = touchPos.y - 50;

            //message = "Triangle touch position: " + touchX + "," +touchY;
            fixVectorT(events, points);
            plotVector();
        }
    });
*/
    canvas.addEventListener("mousedown", function(){
        var drawingPos = events.getMousePos();
        //newQflag = false;

      if(moveMirror){
        moveQ(events, points);//***
      }
      if(moveRay){
        //moveArr(events, points);//***
      }
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
            /*
               ctx.beginPath();
                ctx.lineWidth = "1";
                ctx.strokeStyle = "black";
                ctx.moveTo(mirrorLX, mirrorLY);
                ctx.lineTo(mirrorRX, Qy);
                ctx.stroke();

                ctx.beginPath();
                ctx.font = "edgepx Arial";
                ctx.fillText("M",mirrorLX+25, mirrorLY+25);
                ctx.fillStyle = "black";

                mirrorMX = (mirrorLX+mirrorRX)/2;
                mirrorMY = (mirrorLY+Qy)/2;

                ctx.beginPath();
                ctx.lineWidth = "1";
                ctx.arc(mirrorMX, mirrorMY, 10, 0, 2 * Math.PI);//(x, y, r, start arc, end arc)
                ctx.stroke();
                ctx.fillStyle = "blue";
                ctx.fill();
                */
/*
    if(moveMirror){
          if(newQflag){
              if(Qx>xmin && Qx<xmax && Qy>ymin && Qy<ymax){
                QxA[noOfQ]=Qx;
                QyA[noOfQ]=Qy;
                newQflag=false;
                plotNewMoveQ();
                oldQflag = false;
              }
         }
         if(oldQflag){
            if(Qx>xmin && Qx<xmax && Qy>ymin && Qy<ymax){//move old Q to new position
                QxA[oldQchosen]=Qx;
                QyA[oldQchosen]=Qy;
                oldQflag = false;
                plotNewMoveQ();
            }
            else{//delete old Q if move it outside box
                QxA[oldQchosen]=QxA[noOfQ];
                QyA[oldQchosen]=QyA[noOfQ];
                QcolA[oldQchosen]=QcolA[noOfQ];
                noOfQ--;
                document.getElementById("dummy2").innerHTML="D "+noOfQ;
                oldQflag = false;
                plotNewMoveQ();
              }
          }
  }

  else if(moveRay){
      if(Qx>xmin && Qx<xmax && Qy>ymin && Qy<ymax){
        arrXA[noOfArr]=Qx;
        arrYA[noOfArr]=Qy;
        //newQflag=false;
        plotNewArrow();
      }
    }
*/
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
            if(moveMirror||moveRay){
              moveQ(events, points);
            }
        }
    });
    plotNewMoveQ();
};

function getCanvasImg(canvas){
    var img = new Image();
    img.src = canvas.toDataURL();
    return img;
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
                  else if(Qy<posAY+touchRadiusRay && Qy>posAY-touchRadiusRay && Qx<posAX+touchRadiusRay && Qx>posAX-touchRadiusRay){//check if touching point A
                    posAX = Qx;
                    posAY = Qy;
                    //changeX = false;
                      if(Qx>=maxX){
                        posAX = maxX;
                        changeXRay = true;}
                      else if(Qx<=minX){
                        posAX = minX;
                        changeXRay = true;}
                          if(Qy>=maxY){
                            posAY = maxY;
                            changeXRay = true;}
                          else if(Qy<=minY){
                            posAY = minY;
                            changeXRay = true;}
                      if(Qx<maxX-5&&Qx>minX+5){changeXRay = false;}
                      //rayTX = rayLX - 25;
                    touchFlagRay = "posA";
                      rayLX = posAX;
                      rayLY = posAY;
                    plotNewMoveQ();
                    //else{newQflag==false}
                  }
                  else if(Qy<posBY+touchRadiusRay && Qy>posBY-touchRadiusRay && Qx<posBX+touchRadiusRay && Qx>posBX-touchRadiusRay){//check if touching point B
                    posBX = Qx;
                    posBY = Qy;
                    //changeX = false;
                      if(Qx>=maxX){
                        posBX = maxX;
                        changeXRay = true;}
                      else if(Qx<=minX){
                        posBX = minX;
                        changeXRay = true;}
                          if(Qy>=maxY){
                            posBY = maxY;
                            changeXRay = true;}
                          else if(Qy<=minY){
                            posBY = minY;
                            changeXRay = true;}
                      if(Qx<maxX-5&&Qx>minX+5){changeXRay = false;}
                      //rayTX = rayLX - 25;
                    touchFlagRay = "posB";
                      reflRX = posBX;
                      reflRY = posBY;
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

      ctx.clearRect(0, 0, canvW, canvH);//ctx.clearRect(edge, edge, canvW-edge*2, canvH-edge*2);//

      // Green rectangle
      ctx.beginPath();
      ctx.lineWidth = "1";
      ctx.strokeStyle = "black";
      ctx.rect(edge, edge, canvW-edge*2, canvH-edge*2);
      ctx.stroke();

if(touchFlagRay=="top"){
              if(changeXRay){
                rayLY = Qy;
                if(Qy>maxY){rayLY = maxY;}
                else if(Qy<minY){rayLY = minY;}
              }
              else{
                rayLX = Qx;
                rayLY = minY;
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

var arrowDir = 1;
if(rayRY<rayLY&&rayRX>rayLX){arrowDir = -1};//-1*arrowDir;}

  angle2[0] = rayAngle+arrowDir*3*Math.PI/4;
  if(angle2[0]>Math.PI){angle2[0]=angle2[0]-(2*Math.PI);}
  angle3[0] = rayAngle-arrowDir*3*Math.PI/4
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

  if(physicsFlag){
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
  }
  else{
    reflRX = posBX;
    reflRY = posBY;
    if((reflRX-reflLX)!=0){
    reflAngle = Math.atan((reflRY-reflLY)/(reflRX-reflLX));
    if(reflLY>reflRY){reflAngle = Math.PI+reflAngle;}
    if(reflAngle<0){reflAngle=Math.PI+reflAngle;}
    }
    else{
      reflAngle = Math.PI/2;
    }
  }

  //if(reflRX>canvW-edge*2){reflRX=canvW-edge*2;}
  //if(reflRX<edge){reflRX=edge;}
  //if(reflRY>canvH-edge){reflRY=canvH-edge;}
  //if(reflRY<edge){reflRY=edge;}
  rayTX = (rayLX+rayRX)/2-25;//position of ray Text
  rayTY = (rayLY+rayRY)/2-25;
  reflTX = (reflLX+reflRX)/2-25;//position of refl Text
  reflTY = (reflLY+reflRY)/2-25;

arrowDir = -1;
if(reflRX<reflLX){arrowDir = 1};//-1*arrowDir;}
if(reflRY>reflLY){arrowDir = 1};//-1*arrowDir;}

    angle2[1] = reflAngle+arrowDir*3*Math.PI/4;
    if(angle2[1]>Math.PI){angle2[1]=angle2[1]-(2*Math.PI);}
    angle3[1] = reflAngle-arrowDir*3*Math.PI/4
    if(angle3[1]<-Math.PI){angle3[1]=angle3[1]+(2*Math.PI);}
    sin2[1] = headL*Math.sin(angle2[1]);
    sin3[1] = headL*Math.sin(angle3[1]);
    cos2[1] = headL*Math.cos(angle2[1]);
    cos3[1] = headL*Math.cos(angle3[1]);

      reflMX = (reflLX+reflRX)/2;
      reflMY = (reflLY+reflRY)/2;

var alphaDelX = rayRX-rayLX;
var betaDelX = reflRX-rayRX;
var alphaDelY = rayRY-rayLY;
var betaDelY = rayRY-reflRY;

if(rayRX>rayLX){
angleA = Math.atan(alphaDelY/alphaDelX);}
else if(rayRX<rayLX){
angleA = Math.atan(alphaDelY/alphaDelX)+Math.PI;}
else{
  angleA = Math.PI;
}
if(reflRX>rayRX){
angleB = Math.atan(betaDelY/betaDelX);}
else if(reflRX<rayRX){
angleB = Math.atan(betaDelY/betaDelX)+Math.PI;}
else{
  angleB = Math.PI;
}
    //angleA = Math.atan(alphaDelY/alphaDelX);
    //angleB = Math.atan(betaDelY/betaDelX);

    distAM = (rayRX-rayLX)**2+(rayRY-rayLY)**2;
    distAM = Math.pow(distAM, 0.5);
    distBM = (rayRX-reflRX)**2+(rayRY-reflRY)**2;
    distBM = Math.pow(distBM, 0.5);
    distTot = distAM + distBM;

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
                ctx.beginPath();
                ctx.font = "edgepx Arial";
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

                        ctx.beginPath();
                        ctx.lineWidth = "1";
                        ctx.strokeStyle = "blue";
                        ctx.moveTo(rayLX, rayLY);
                        ctx.lineTo(rayRX, rayRY);
                        ctx.stroke();

                              ctx.beginPath();
                              ctx.moveTo(rayMX, rayMY);
                              ctx.lineTo(rayMX-sin2[0], rayMY+cos2[0]);
                              ctx.stroke();

                              ctx.beginPath();
                              ctx.moveTo(rayMX, rayMY);
                              ctx.lineTo(rayMX+sin3[0], rayMY-cos3[0]);
                              ctx.stroke();

                        /*if(textFlag){
                        ctx.beginPath();
                        ctx.font = "edgepx serif";
                        ctx.fillStyle = "blue";
                        ctx.fillText("I", rayTX, rayTY);
                      }*/


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

                        ctx.beginPath();
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
                        /*if(textFlag){//
                        ctx.beginPath();
                        ctx.font = "edgepx serif";
                        ctx.fillStyle = "blue";
                        ctx.fillText("R", reflTX, reflTY);
                      }*/

                        ctx.strokeStyle = "black";//colour of lines
                        ctx.fillStyle = "black";//colour of text
                            //rayLX = posAX;
                            //rayLY = posAY;
                            //reflRX = posBX;
                            //reflRY = posBY;

                                  ctx.lineWidth = "1";
                                  ctx.font = "12px Arial";
                                  //top ridge
                                  ctx.moveTo(posAX, minY);
                                  ctx.lineTo(posAX, minY-14);
                                  ctx.stroke();
                                  var posAXs = ((posAX-minX)/50).toFixed(2);
                                  ctx.fillText(""+posAXs, posAX-5, minY-20);
                                  ctx.moveTo(posBX, minY);
                                  ctx.lineTo(posBX, minY-14);
                                  ctx.stroke();
                                  var posBXs = ((posBX-minX)/50).toFixed(2);
                                  ctx.fillText(""+posBXs, posBX-5, minY-20);
                                  //left ridge
                                  ctx.moveTo(minX, posAY);
                                  ctx.lineTo(minX-14, posAY);
                                  ctx.stroke();
                                  var posAYs = ((posAY-minY)/50).toFixed(2);
                                  ctx.fillText(""+posAYs, minX-37, posAY+4);

                                  //right ridge
                                  ctx.moveTo(maxX, posBY);
                                  ctx.lineTo(maxX+14, posBY);
                                  ctx.stroke();
                                  var posBYs = ((posBY-minY)/50).toFixed(2);
                                  ctx.fillText(""+posBYs, maxX+18, posBY+4);


                                          ctx.beginPath();
                                          ctx.lineWidth = "3";
                                          ctx.strokeStyle = "black";
                                          ctx.beginPath();
                                          ctx.arc(posAX, posAY, 2, 0, 2*Math.PI);
                                          ctx.stroke();
                                              ctx.beginPath();
                                              ctx.font = "20px serif";
                                              ctx.fillStyle = "black";
                                              ctx.fillText("A", posAX-10, posAY-20);

                                          ctx.beginPath();
                                          ctx.lineWidth = "3";
                                          ctx.strokeStyle = "black";
                                          ctx.beginPath();
                                          ctx.arc(posBX, posBY, 2, 0, 2*Math.PI);
                                          ctx.stroke();
                                              ctx.beginPath();
                                              ctx.font = "20px serif";
                                              ctx.fillStyle = "black";
                                              ctx.fillText("B", posBX-10, posBY-20);
var posAlpha = (rayLX+3*rayRX)/4-25;
if(rayRX<=rayLX){posAlpha = rayRX-25;}
var posBeta = (reflRX+3*rayRX)/4+10;
if(rayRX>=reflRX){posBeta = rayRX+10;}
                                ctx.beginPath();
                                ctx.font = "20px serif";
                                ctx.fillStyle = "blue";
                                ctx.fillText("\u03B1", posAlpha, rayRY-8);
                                ctx.beginPath();
                                ctx.font = "20px serif";
                                ctx.fillStyle = "blue";
                                ctx.fillText("\u03B2", posBeta, rayRY-8);

          //calc angles for mirror ticks
          ctx.strokeStyle = "black";
          ctx.fillStyle = "black";
          ctx.font = "10px serif";
          ctx.lineWidth = "1";
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
          var divM = (canvW-edge*2)/lengthMLine;
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
                          ctx.fillText("P", rayRX-normL*xAng-10, rayRY+(20+normL)*yAng);
                          //ctx.fillText("0",(mirrorLX+mirrorRX)/2-3, (mirrorLY+mirrorRY)/2+25);
                      }


  ctx.closePath;
  sigFig=3;
  sigFig2=0;
  var data1 = distTot/50;
  var data1s = data1.toFixed(sigFig)+" cm";
  var data2 = distAM/50;
  var data2s = data2.toFixed(sigFig)+" cm";
  var data3 = distBM/50;
  var data3s = data3.toFixed(sigFig)+" cm";
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
      data5 = Math.PI-mirrorAngle;
      data5 = data5*180/Math.PI;
      if(data5>90){data5=data5-180;}
      var data32 = -1*data3;
      data5s = data5.toFixed(sigFig2)+" deg";
      var data32s = data32.toFixed(0)+" deg";
      data6 = Math.abs(angleA*180/Math.PI);
      if(data5>0){data6=Math.abs(data6-180);}
      data6s = data6.toFixed(sigFig2)+" deg";
      data7 = Math.abs(angleB*180/Math.PI);
      if(data5>0){data7=Math.abs(data7-180);}
      data7s = data7.toFixed(sigFig2)+" deg";


      document.getElementById("dummy1").innerHTML="angle alpha<br>&alpha;="+data6s+"<br><br>angle beta<br>&beta;="+data7s;
      document.getElementById("dummy2").innerHTML="total distance<br>from A to B via P<br>="+data1s;
      document.getElementById("dummy3").innerHTML="distance from<br>A to P <br>="+data2s;
      document.getElementById("dummy4").innerHTML="distance from<br>P to B <br>="+data3s;

}

function plotNewArrow(){

      var c = document.getElementById("myCanvas");
      var ctx = c.getContext("2d");

      ctx.clearRect(0, 0, canvW, canvH);

      // Green rectangle
      ctx.beginPath();
      ctx.lineWidth = "4";
      ctx.strokeStyle = "green";
      ctx.rect(edge, edge, canvW-edge*2, canvH-edge*2);
      ctx.stroke();

      ctx.beginPath();
      ctx.lineWidth = "1";
      ctx.arc(200, edge, 10, 0, 2 * Math.PI);//(x, y, r, start arc, end arc)
      ctx.stroke();
      ctx.fillStyle = "blue";
      ctx.fill();

      ctx.beginPath();
      ctx.lineWidth = "1";
      ctx.arc(400, edge, 10, 0, 2 * Math.PI);//(x, y, r, start arc, end arc)
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
      document.getElementById("dragB").value="LOCKED";
    }
    else if(moveRay){
      moveRay=false;
      moveMirror=true;
      document.getElementById("dragB").value="move 'mirror'";
    }
    else{
          moveRay=true;
          document.getElementById("dragB").value="move A or B or P";
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
