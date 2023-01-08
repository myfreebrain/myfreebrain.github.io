
var canvW=600;
var canvH=630;
var edge = 30;
var xmin = 30;
var xmax = canvW-xmin;
var ymin = 60;
var ymax = canvH-ymin/2;
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
var dragEnabled = true;//false;//true;
var moveF = true;
var findFieldF = false;
var drawLineF = false;
var drawDotsF = true;
var arrXA = new Array();//hold x pos of arrow centre
var arrYA = new Array();
var noOfArr = 0;
var arrFXA = new Array();//hold x comp of force at arrow position
var arrFYA = new Array();
var arrAngle = new Array();//hold angle of arrow
var arrLength = 10;//half length of arrow
var arrNewLength = new Array();


window.onload = function(){
    var events = new Events("myCanvas");
    var canvas = events.getCanvas();
    var context = events.getContext();
    var isMouseDown = false;
    var canvasImg = getCanvasImg(canvas);
    var points = [];


  if(drawDotsF){document.getElementById("noLines").checked=true;}
  else{document.getElementById("lines").checked=true;}
    //findVector();

    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    // Green rectangle
    ctx.beginPath();
    ctx.lineWidth = "4";
    ctx.strokeStyle = "green";
    ctx.rect(30, 60, canvW-60, canvH-90);
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


    document.getElementById("saveButton").addEventListener("click", function(evt){
        // open new window with saved image so user
        // can right click and save to their computer
        window.open(canvas.toDataURL());
    }, false);

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

    canvas.addEventListener("mousedown", function(){
        var drawingPos = events.getMousePos();
        newQflag = false;

      if(dragEnabled){
        moveQ(events, points);//***
      }
      if(findFieldF){
        moveArr(events, points);//***
        plotNewArrow2();
      }
        isMouseDown = true;
    }, false);

    canvas.addEventListener("mouseup", function(){
        var drawingPos = events.getMousePos();
        isMouseDown = false;

       if (drawingPos !== null) {
              //points.push(drawingPos);
              Qx = drawingPos.x;
              Qy = drawingPos.y;
            }
    if(dragEnabled){
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

  else if(findFieldF){
      if(Qx>xmin && Qx<xmax && Qy>ymin && Qy<ymax){
        //noOfArr++;//added for compass
        arrXA[noOfArr]=Qx;
        arrYA[noOfArr]=Qy;
        noOfArr++;//added for compass
        //newQflag=false;
        plotNewArrow();
      }
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
            //addPoint(this, points);//*****************
            //drawPath(canvas, points, canvasImg);//*******************
            //fixVector(events, points);//***
            if(dragEnabled){
              moveQ(events, points);
              plotNewMoveQ();
            //plotVector();
            }
            if(findFieldF){
              moveArr(events, points);
              plotNewArrow2();
            //plotVector();
            }
        }
    });
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

                        //check if touching old charges
                              for(i=0;i<noOfQ+1;i++){
                                if(Qy>QyA[i]-10 && Qy<QyA[i]+10){
                                if(Qx>QxA[i]-10 && Qx<QxA[i]+10){
                                  //alert("new old charge!");
                                    oldQflag=true;
                                    oldQchosen = i;
                                    break;
                                  }
                              }

                            }
                        if(moveF){
                        if(!oldQflag){
                        if(Qy>20 && Qy<40){//check if touching new charges
                        if(Qx>190 && Qx<210){
                          //alert("blue dot");
                            Qcolor = "blue";
                            noOfQ++;
                            document.getElementById("dummy2").innerHTML="A "+noOfQ;
                            QcolA[noOfQ] = Qcolor;
                            newQflag=true;
                          }
                        else if(Qx>390 && Qx<410){
                          //alert("red dot");
                            Qcolor = "red";
                            noOfQ++;
                            document.getElementById("dummy2").innerHTML="B "+noOfQ;
                            QcolA[noOfQ] = Qcolor;
                            newQflag=true;
                          }
                          plotNewMoveQ();
                          //else{newQflag==false}
                        }
                        }
                        moveF=false;
                      }
                    }
                  }

  function moveArr(events, points){
        var context = events.getContext();
        var drawingPos = events.getMousePos();

          if (drawingPos !== null) {
              Qx = drawingPos.x;
              Qy = drawingPos.y;

              //noOfArr++;
              findFieldXY(Qx, Qy, noOfArr);
              plotNewArrow2();

              }
      }

function plotNewMoveQ(){

      var c = document.getElementById("myCanvas");
      var ctx = c.getContext("2d");

      ctx.clearRect(0, 0, canvW, canvH);

      // Green rectangle
      ctx.beginPath();
      ctx.lineWidth = "4";
      ctx.strokeStyle = "green";
      ctx.rect(30, 60, canvW-60, canvH-90);
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
    ctx.fillStyle =   QcolA[noOfQ];//"green";
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


function plotNewArrow(){

      var c = document.getElementById("myCanvas");
      var ctx = c.getContext("2d");

      ctx.clearRect(0, 0, canvW, canvH);

      // Green rectangle
      ctx.beginPath();
      ctx.lineWidth = "4";
      ctx.strokeStyle = "green";
      ctx.rect(30, 60, canvW-60, canvH-90);
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


      document.getElementById("dummy2").innerHTML="up "+noOfArr;
      for(i=0;i<noOfArr;i++){//  for(i=0;i<noOfArr+1;i++){
        //if(oldQchosen==i && oldQflag){}
        //else{

        //dot in centre
              ctx.beginPath();
              ctx.lineWidth = "1";
              ctx.arc(arrXA[i], arrYA[i], 0, 0, 2 * Math.PI);//(x, y, r, start arc, end arc)
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

          if(drawLineF){
              ctx.beginPath();
              ctx.lineWidth = "1";
              ctx.moveTo(xTail, yTail);
              ctx.lineTo(xHead, yHead);
              ctx.stroke();}
            if(drawDotsF){
              ctx.beginPath();
                ctx.lineWidth = "1";
                ctx.arc(xTail, yTail, 2, 0, 2 * Math.PI);//(x, y, r, start arc, end arc)
                ctx.stroke();
                ctx.fillStyle = "black";
                ctx.fill();
                ctx.beginPath();
                ctx.lineWidth = "1";
                ctx.arc(xHead, yHead, 2, 0, 2 * Math.PI);//(x, y, r, start arc, end arc)
                ctx.stroke();
                ctx.fillStyle = "black";
                ctx.fill();}

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


function plotNewArrow2(){

      var c = document.getElementById("myCanvas");
      var ctx = c.getContext("2d");

      ctx.clearRect(0, 0, canvW, canvH);

      // Green rectangle
      ctx.beginPath();
      ctx.lineWidth = "4";
      ctx.strokeStyle = "green";
      ctx.rect(30, 60, canvW-60, canvH-90);
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

      //dot in centre
            ctx.fillStyle = "black";
            ctx.beginPath();
            ctx.lineWidth = "1";
            ctx.arc(Qx, Qy, 2, 0, 2 * Math.PI);//(x, y, r, start arc, end arc)
            ctx.stroke();
            ctx.fillStyle = "black";
            ctx.fill();
            ctx.beginPath();
            ctx.arc(Qx, Qy, 9, 0, 2 * Math.PI);//(x, y, r, start arc, end arc)
            ctx.stroke();
            //ctx.fillStyle = "red";
            //ctx.fill();

            var nowArr = noOfArr;
            nowArr++;

            findFieldXY(Qx, Qy , nowArr);
                          var arr2Length = arrNewLength[nowArr]-4;//-2 to make compass a bit smaller than circle
                          var xHead = Qx + arr2Length*Math.cos(arrAngle[nowArr]);
                          var yHead = Qy + arr2Length*Math.sin(arrAngle[nowArr]);
                          var xTail = Qx - arr2Length*Math.cos(arrAngle[nowArr]);
                          var yTail = Qy - arr2Length*Math.sin(arrAngle[nowArr]);
                          ctx.beginPath();
                          ctx.lineWidth = "1";
                          ctx.moveTo(xTail, yTail);
                          ctx.lineTo(xHead, yHead);
                          ctx.stroke();
                            /*ctx.lineWidth = "1";
                            ctx.arc(xTail, yTail, 2, 0, 2 * Math.PI);//(x, y, r, start arc, end arc)
                            ctx.stroke();
                            ctx.fillStyle = "black";
                            ctx.fill();
                            ctx.beginPath();
                            ctx.lineWidth = "1";
                            ctx.arc(xHead, yHead, 2, 0, 2 * Math.PI);//(x, y, r, start arc, end arc)
                            ctx.stroke();
                            ctx.fillStyle = "black";
                            ctx.fill();*/

                  document.getElementById("dummy2").innerHTML="down "+noOfArr+" "+nowArr;
      for(i=0;i<noOfArr+1;i++){
        //if(oldQchosen==i && oldQflag){}
        //else{

        //dot in centre
              ctx.beginPath();
              ctx.lineWidth = "1";
              ctx.arc(arrXA[i], arrYA[i], 0, 0, 2 * Math.PI);//(x, y, r, start arc, end arc)
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

        if(drawLineF){
              ctx.beginPath();
              ctx.lineWidth = "1";
              ctx.moveTo(xTail, yTail);
              ctx.lineTo(xHead, yHead);
              ctx.stroke();}
        if(drawDotsF){
              ctx.beginPath();
                ctx.lineWidth = "1";
                ctx.arc(xTail, yTail, 2, 0, 2 * Math.PI);//(x, y, r, start arc, end arc)
                ctx.stroke();
                ctx.fillStyle = "black";
                ctx.fill();
                ctx.beginPath();
                ctx.lineWidth = "1";
                ctx.arc(xHead, yHead, 2, 0, 2 * Math.PI);//(x, y, r, start arc, end arc)
                ctx.stroke();
                ctx.fillStyle = "black";
                ctx.fill();}

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
    if(dragEnabled){
      dragEnabled=false;
      document.getElementById("dragB").value="drag locked";
    }
    else if(!findFieldF){
      findFieldF=true;
      document.getElementById("dragB").value="find field";
    }
    else{
          findFieldF=false;
          dragEnabled=true;
          document.getElementById("dragB").value="drag enabled";
        }

}

function findFieldXY(x,y,k){
  var posX = x;
  var posY = y;
  var arrowNo = k;
  //alert("x:"+posX+" y:"+posY+" no:"+arrowNo)
  var totalX = 0;
  var totalY = 0;

    for(i=0;i<noOfQ+1;i++){
      //alert(""+i);
        var varR = 0;
        var delX = 0;
        var delY = 0;
        var varFx = 0;
        var varFy = 0;
        var constant = 1e8;

        delX = posX - QxA[i];
        delY = posY - QyA[i];
        varR = Math.sqrt(Math.pow(delX,2)+Math.pow(delY,2));
        varFx = constant*delX/(Math.pow(varR,3));
        varFy = constant*delY/(Math.pow(varR,3));
          //alert(" Qx:"+QxA[i]+" Qy:"+QyA[i]+"\n R:"+varR+"\n delX:"+delX+" delY:"+delY+"\n varFx:"+varFx+" varFy:"+varFy);
        if(QcolA[i]=="blue"){
          varFx = -1 * varFx;
          varFy = -1 * varFy;
        }

        totalX = totalX + varFx;
        totalY = totalY + varFy;
    }
    arrFXA[arrowNo] = totalX;
    arrFYA[arrowNo] = totalY;
    arrAngle[arrowNo] = Math.atan(totalY/totalX);//+Math.PI/2; for equipotentials
    var force = Math.sqrt(Math.pow(totalX,2)+Math.pow(totalY,2));//10 IS 2ND CONSTANT
    //arrNewLength[arrowNo] = Math.pow(force,0.25);//more extreme change of length need const =
    arrNewLength[arrowNo] = 10;//Math.pow(force,0.25);//more extreme change of length need const =
    //arrNewLength[arrowNo] = Math.sqrt(force);//more extreme change of length need const = 1e6
    //arrNewLength[arrowNo] = Math.log(force);//Math.log10(force); less extreme change of length need const = 1e8
    //arrNewLength[arrowNo] = arrLength;//constant length
    //atan only does pi/2 to -pi/2
    if(totalY<0&&totalX<0){arrAngle[arrowNo]= arrAngle[arrowNo] - Math.PI;}
    if(totalY>0&&totalX<0){arrAngle[arrowNo]=Math.PI + arrAngle[arrowNo];}
    //alert("fx:"+arrFXA[arrowNo]+" fy:"+arrFYA[arrowNo]+" ang:"+arrAngle[arrowNo]);

}


function changeLine(n){
  if(n.value=="lines"){drawLineF=true;drawDotsF=true}
  else if(n.value=="noDots"){drawLineF=true;drawDotsF=false}
  else if(n.value=="noLines"){drawLineF=false;drawDotsF=true}
  else{}
  plotNewArrow();
}
