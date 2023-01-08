

var canvW=600;
var canvH=600;
var edge = 30;
var thisVector = -1;

var vectorA1 = new Array();
var HVflag1=false;

var tailX = new Array();
var tailY = new Array();
var topX = new Array();
var topY = new Array();
var OldtailX = new Array();
var OldtailY = new Array();
var OldtopX = new Array();
var OldtopY = new Array();
var angle = new Array();
var angle2 = new Array();
var angle3 = new Array();
var delX = new Array();
var delY = new Array();
var length = new Array();
var headL = 10;
var angleTxt =new Array();
var sin2 = new Array();
var sin3 = new Array();
var cos2 = new Array();
var cos3 = new Array();
var resultant = false;//show resultant vector
var topTailFlag = false;
var toTT=true;
var topTailXtra = false;
var lineSize=3;
var steps = 3;//no of vectors
var permA = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var permA2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var permStep = 9;
var thisPermA = new Array();
var scale =0.1;
var scaleCM = 0.2;//0.2=100cm, 0.1=50cm
var boxSizeMod = 0.83333;//boxSizeModifier; length of rod = 600 x boxSizeModifier x scaleCM
var boxSizeModL = (1-boxSizeMod)/2;
var boxSizeModR = 1-boxSizeModL;
var boxLength = Math.round(canvW*boxSizeMod);
var boxL = Math.round(canvW*boxSizeModL);
var boxR = Math.round(canvW*boxSizeModR);
var boxH = 20;
var momentsA = new Array();
var pivotPos = canvW/2;//boxL;
var movePivotFlag = false;
var rodLengthPix = (boxR-boxL);
var rodLength = rodLengthPix*scaleCM;
var equiFlag = false;
var equiMFlag = false;
var equiFFlag = false;
var notDone=true;
var scaleAR = 0.5;//scaling of arrow length


function topTail(){
if(topTailFlag){//&&!topTailXtra){
  //topTailXtra = true;
  document.getElementById("vect4").value="show top to tail...";
    topTailFlag = false;
  toTT=true;
  plotVector();
}
/*
else if(topTailXtra){
  topTailFlag = false;
    topTailXtra = false;
  document.getElementById("vect4").value="same origin...";
  plotVector();
}*/
  else{
    topTailFlag = true;
      //topTailXtra = false;
    document.getElementById("vect4").value="show same origin...";
    toTT=true;
    shufflePerm();
    plotVector();
  }
}

function chooseVector(){
  //thisVector = n;
  var count=0;
  thisVector++;
  if(thisVector>steps+1){
    thisVector=0;
  }
  document.getElementById("vect1").value="move force "+(thisVector+1);
  if(thisVector>=steps){
    if(thisVector==steps){
  document.getElementById("vect1").value="move pivot";
    movePivotFlag = true;
    }
    else{
  document.getElementById("vect1").value="locked";
    movePivotFlag = false;
  }
  }
  //alert("thisVector"+thisVector);
  plotVector();
}

function changeRodLength(){
    rodLength = document.getElementById("boxRodLength").value;
    var dummyScale = threeSF(rodLength/rodLengthPix,3);
    document.getElementById("boxScaleCM").value=dummyScale;
    scaleCM = dummyScale;
    plotVector();
}

function findVector(){//findVector(n){
//var index = n*2;
//var steps = n;
var breakFlag=false;
while(notDone){
var vectText="";
var vectText2="";
var totMom = 0;
var totForce = 0;
//notDone = true;
document.getElementById("boxRodLength").value=rodLength;
var dummyScale = threeSF(rodLength/rodLengthPix,3);
document.getElementById("boxScaleCM").value=dummyScale;
document.getElementById("boxNumbOfV").value=steps;
document.getElementById("boxScale").value=scale;
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

  c.width=canvW;
  c.height=canvH;

  ctx.rect(boxL, canvH/2 - boxH/2, boxLength, boxH);
  ctx.fillStyle = "#8ED6FF";
  ctx.fill();
  ctx.lineWidth = 5;
  ctx.strokeStyle = "black";
  ctx.stroke();

  ctx.beginPath();
ctx.arc(pivotPos, canvH/2, 5, 0, 2 * Math.PI);
if(movePivotFlag){ctx.fillStyle = 'red';}
else{ctx.fillStyle = 'yellow';}
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#003300';
ctx.stroke();

  /* FILLED TRIANGLE CODE
  ctx.beginPath();
    ctx.moveTo(25, 25);
    ctx.lineTo(105, 25);
    ctx.lineTo(25, 105);
    ctx.fill();
  */

//ctx.clearRect(0, 0, canvW, canvH);
var totForce = 0;
var counter =0;
  //alert("4");
for(i=0;i<steps;i++){
  if(equiFlag&&i==steps-1){//equal moments, but not necessarilly equal forces
    tailX[i] = Math.round(Math.random()*(boxLength/2)+boxL+boxLength/2);
    topX[i] = tailX[i];
    var dumForce = (-totMom/((tailX[i]-pivotPos)*scaleCM))/scale;
    //alert(""+dumForce);
    if(dumForce<0){
    tailY[i] = canvH/2-boxH/2;
    }
    else{
    tailY[i] = canvH/2+boxH/2;}
    topY[i]=tailY[i]+dumForce;
  }
  else if(equiFFlag&&i==steps-1){//equal forces, but not necessarilly equal moments
    delY[i] = (-1)*(totForce/scale);
    //alert(""+delY[i]);
    if(delY[i]>0){
    tailY[i] = canvH/2+boxH/2;
    //alert("delY="+delY[i]+" >0");
    }
    else{ //if(delY[i]<0)
    tailY[i] = canvH/2-boxH/2;
    //alert("delY="+delY[i]+" <0");
    }
    topY[i] = delY[i] + tailY[i];
    tailX[i] = Math.round(Math.random()*(boxLength/2)+boxL+boxLength/2);
    topX[i] = tailX[i];
  }
  else if(equiMFlag&&i==steps-1){//equal moments AND forces
    delY[i] = (-1)*(totForce/scale);
    //alert(""+delY[i]);
    if(delY[i]>0){
    tailY[i] = canvH/2+boxH/2;
    //alert("delY="+delY[i]+" >0");
    }
    else{ //if(delY[i]<0)
    tailY[i] = canvH/2-boxH/2;
    //alert("delY="+delY[i]+" <0");
    }
    topY[i] = delY[i] + tailY[i];
    tailX[i] = totMom/scaleCM/totForce+pivotPos;
    //alert(""+tailX[i]);
    topX[i]=tailX[i];
    //alert("1");
    if(Math.abs(delY[i])<canvH/2&&tailX[i]>boxL&&tailX[i]<boxR){
      //notDone=false;
      breakflag = true;
      //alert("2" + "; "+ notDone+ "; "+ delY[i]*scale+ "; "+(tailX[i]-pivotPos)*scaleCM);
      //alert(""+counter);
      //break;
    }
    else{counter++;
      document.getElementById("dummy1").innerHTML=counter;
        notDone=true;
      //alert("3" + notDone);
    }
  }
  else{//random forces and positions and moments
tailX[i] = Math.round(Math.random()*(boxLength)+boxL);
topX[i] = tailX[i];//Math.round(Math.random()*(canvW/2-edge*2)+edge+canvW/4);
if(Math.random()>0.5){
topY[i] = Math.round(Math.random()*(canvH/2-edge)+canvH/2+boxH);
}
else{
topY[i] = Math.round(Math.random()*(canvH/2-boxH-edge)+edge);
}
if(topY[i]>canvH/2){
tailY[i] = canvH/2+boxH/2;//Math.round(Math.random()*(canvH-edge*2)+edge);
}
else{
tailY[i] = canvH/2-boxH/2;
}
  notDone=false;
}

delX[i] = topX[i] - tailX[i];
  //totForce = totForce + delX[i];
  //alert(""+totForce);
delY[i] = topY[i] - tailY[i];
length[i] = delY[i];//Math.round(Math.sqrt(Math.pow(delX[i], 2)+Math.pow(delY[i], 2)));
momentsA[i] = (length[i]*scale) * (tailX[i]-pivotPos)*scaleCM;

angle[i] = Math.atan2((topY[i]-tailY[i]), (topX[i]-tailX[i]));//NOTE: y.x !!

    angleTxt[i] = Math.round(angle[i]*180/Math.PI);
    angleTxt[i] = angleTxt[i] +90;
    if(angleTxt[i]<0){angleTxt[i]=angleTxt[i]+360;}

//alert(""+angle);
angle2[i] = angle[i]+3*Math.PI/4;
if(angle2[i]>Math.PI){angle2[i]=angle2[i]-(2*Math.PI);}
angle3[i] = angle[i]-3*Math.PI/4
if(angle3[i]<-Math.PI){angle3[i]=angle3[i]+(2*Math.PI);}
sin2[i] = headL*Math.sin(angle2[i]);
sin3[i] = headL*Math.sin(angle3[i]);
cos2[i] = headL*Math.cos(angle2[i]);
cos3[i] = headL*Math.cos(angle3[i]);

if(thisVector==i){
    ctx.strokeStyle="#FF0000";
}
else{
    ctx.strokeStyle="#000000";
}

ctx.lineWidth=lineSize;

  ctx.beginPath();
  ctx.moveTo(tailX[i], tailY[i]);
  ctx.lineTo(topX[i], topY[i]);
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.moveTo(topX[i], topY[i]);
  ctx.lineTo(topX[i]-sin2[i], topY[i]+cos2[i]);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(topX[i], topY[i]);
  ctx.lineTo(topX[i]+sin3[i], topY[i]-cos3[i]);
  ctx.stroke();

ctx.closePath();
vectorA1[i*2]=length[i];
vectorA1[i*2+1]=tailX[i]-boxL;//angleTxt[i];//NOT angle, but position alog bar

var printLength = threeSF(vectorA1[i*2]*scale, 3);
var printPos = threeSF(vectorA1[i*2+1]*scaleCM, 3);
var printRPos = threeSF((tailX[i]-pivotPos)*scaleCM, 3);
var printMom = threeSF(momentsA[i], 3);
var printDelX = threeSF(delX[i]*scale, 3);
var printDelY = threeSF(delY[i]*(-1*scale), 3);

/*if(i==0){
  alert(""+delX[i]+" "+delX[i]*scale+" "+printDelX)
}*/

 vectText = vectText + "Force "+(i+1)+": force="+printLength+" N; position="+printPos+" cm<br>";// (x:"+delX[i]/2+" y:"+delY[i]/(-2)+")<br>";
 //vectText2 = vectText2 + "Vector "+(i+1)+": x=<textarea id=\"boxX"+i+"\"  oninput=\"change(this)\"> "+delX[i]/2+"</textarea> y=<textarea id=\"boxY"+i+"\"  oninput=\"change(this)\">"+delY[i]/(-2)+"</textarea><br>";
 vectText2 = vectText2 + " "+(i+1)+": <textarea id=\"boxX"+i+"\"> "+printLength+"</textarea> N; <textarea id=\"boxY"+i+"\">"+printRPos+"</textarea> cm; Fr="+printMom+" Ncm<br>";
 totMom = totMom + printMom;
   totForce = totForce + printLength;
   //alert(""+printLength+" "+totForce);
}
//alert(""+angle*180/Math.PI);
var printPivotPos = threeSF((pivotPos-boxL)*scaleCM,3);
totMom = Math.floor(threeSF(totMom, 3));
totForce = Math.round(threeSF(totForce, 3));
//totMom = threeSF(totMom, 3);
vectText = vectText + "<br>Pivot at "+printPivotPos+" cm<br>";// (x:"+delX[i]/2+" y:"+delY[i]/(-2)+")<br>";
vectText2 = vectText2 + "<br>Total moments = "+totMom+" Ncm<br>" + "<br>Total force = "+totForce+" N<br>";

document.getElementById("questions1").innerHTML=vectText;//"Vector 1: length="+vectorA1[0]+" N; angle="+vectorA1[1]+"<sup>o</sup>&nbsp;&nbsp;&nbsp; Vector 2: length="+vectorA1[2]+" N; angle="+vectorA1[3]+"<sup>o</sup>";
document.getElementById("components").innerHTML=vectText2;

var resultX=0;//delX[0]+delX[1];
var resultY=0;//delY[0]+delY[1];

for(i=0;i<steps;i++){
   resultX=resultX+delX[i];
   resultY=resultY+delY[i];
}

var resultL = Math.round(Math.sqrt(Math.pow(resultX, 2)+Math.pow(resultY, 2)));
var printResultL = threeSF(resultL*scale,3);
var printResultX = threeSF(resultX*scale,3);
var printResultY = threeSF(resultY*(-1*scale),3);

var resultAng = Math.atan2((resultY), (resultX));//NOTE: order is y.x not x.y !!

  resultAng = Math.round(resultAng*180/Math.PI);
  resultAng = resultAng +90;
  if(resultAng<0){resultAng=resultAng+360;}

  if(resultant){
document.getElementById("answer1").innerHTML="<br>Resultant: length="+printResultL+" N; angle="+resultAng+"<sup>o</sup>";//(x:"+resultX/2+" y:"+resultY/(-2)+")";
document.getElementById("Rcomps").innerHTML="<br>Resultant: X=<textarea id=\"boxRX\" style=\"width: 6em;\"> "+printResultX+"</textarea> Y=<textarea id=\"boxRY\" style=\"width: 6em;\">"+printResultY+"</textarea><br>";
}
else{document.getElementById("answer1").innerHTML="";
}
  if(resultant){

    tailX[steps] = canvW/2;//Math.round(Math.random()*(canvW-edge*2)+edge);
    tailY[steps] = canvH/2;//Math.round(Math.random()*(canvH-edge*2)+edge);
    //var topXR=canvW/2;
    //var topYR=canvH/2;
    topX[steps] = tailX[steps];
    topY[steps] = tailY[steps];

    for(i=0;i<steps;i++){
    topX[steps] = topX[steps]+delX[i];
    topY[steps] = topY[steps]+delY[i];
  }

    //delX[i] = topX[i] - tailX[i];
    //delY[i] = topY[i] - tailY[i];
    //length[i] = Math.round(Math.sqrt(Math.pow(delX[i], 2)+Math.pow(delY[i], 2)));

    angle[steps] = Math.atan2((topY[steps]-tailY[steps]), (topX[steps]-tailX[steps]));//NOTE: y.x !!

        //angleTxt[i] = Math.round(angle[i]*180/Math.PI);
        //angleTxt[i] = angleTxt[i] +90;
        //if(angleTxt[i]<0){angleTxt[i]=angleTxt[i]+360;}

    //alert(""+angle);
    angle2[steps] = angle[steps]+3*Math.PI/4;
    if(angle2[steps]>Math.PI){angle2[steps]=angle2[steps]-(2*Math.PI);}
    angle3[steps] = angle[steps]-3*Math.PI/4
    if(angle3[steps]<-Math.PI){angle3[steps]=angle3[steps]+(2*Math.PI);}
    sin2[steps] = headL*Math.sin(angle2[steps]);
    sin3[steps] = headL*Math.sin(angle3[steps]);
    cos2[steps] = headL*Math.cos(angle2[steps]);
    cos3[steps] = headL*Math.cos(angle3[steps]);

    ctx.strokeStyle="#00FF00";
    ctx.lineWidth=lineSize+1;

      ctx.beginPath();
      ctx.moveTo(tailX[steps], tailY[steps]);
      ctx.lineTo(topX[steps], topY[steps]);
      ctx.stroke();
      ctx.closePath();

      ctx.beginPath();
      ctx.moveTo(topX[steps], topY[steps]);
      ctx.lineTo(topX[steps]-sin2[steps], topY[steps]+cos2[steps]);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(topX[steps], topY[steps]);
      ctx.lineTo(topX[steps]+sin3[steps], topY[steps]-cos3[steps]);
      ctx.stroke();

    ctx.closePath();
  }
//}
if(!notDone){
equiFlag = false;
equiMFlag = false;
equiFFlag = false;}
if(breakFlag){notDone=false;
breakFlag=false;}
}
//alert("5" + notDone);
notDone=true;
}
/*
ctx.strokeStyle="#cccccc";
ctx.beginPath();
ctx.font="15px Arial";
ctx.textAlign="right";
ctx.fillText(""+chopChopText,edge-2,textPos+5);

ctx.closePath();
*/

function shufflePerm(){

var noPips=0;
var pipsLeft = steps-1;

for(k=0;k<steps;k++){
    noPips=Math.floor(Math.random()*pipsLeft+0.5);//chose random # up to # of cards left
    thisPermA[k]=permA2[noPips];//find card that corresponds to this number
    permA2[noPips]=permA2[pipsLeft];//replace card chosen with last card
	  pipsLeft--;//reduce # by one
	  //count++;
	  }
  for(k=0;k<steps;k++){
    permA2[k]=permA[k];
  }
  //alert(""+thisPermA[0]+" "+thisPermA[1]+" "+thisPermA[2]+" ");

}


function plotVector(){//plotVector(n){

var vectText="";
var vectText2="";
var totMom = 0;
var totForce = 0;

//for(i=0;i<steps;i++){
//  var randPos = Math.floor(Math.random()*steps);
//  thisPermA[i] = permA2[]
//}

  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");

    c.width=canvW;
    c.height=canvH;

ctx.rect(boxL, canvH/2 - boxH/2, boxLength, boxH);
ctx.fillStyle = "#8ED6FF";
ctx.fill();
ctx.lineWidth = 5;
ctx.strokeStyle = "black";
ctx.stroke();

  ctx.beginPath();
ctx.arc(pivotPos, canvH/2, 5, 0, 2 * Math.PI);
if(movePivotFlag){ctx.fillStyle = 'red';}
else{ctx.fillStyle = 'yellow';}
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#003300';
ctx.stroke();
  /*for(i=0;i<steps;i++){

  tailX[i]=canvW/2;//OldtailX[i];
  tailY[i]=canvH/2;//OldtailY[i];

}*/

//ctx.clearRect(0, 0, canvW, canvH);
  for(i=0;i<steps;i++){
delX[i] = topX[i] - tailX[i];
delY[i] = topY[i] - tailY[i];
length[i] = delY[i];//Math.round(Math.sqrt(Math.pow(delX[i], 2)+Math.pow(delY[i], 2)));
momentsA[i] = (length[i]*scale) * (tailX[i]-pivotPos)*scaleCM;

angle[i] = Math.atan2((topY[i]-tailY[i]), (topX[i]-tailX[i]));//NOTE: y.x !!

    angleTxt[i] = Math.round(angle[i]*180/Math.PI);
    angleTxt[i] = angleTxt[i] +90;
    if(angleTxt[i]<0){angleTxt[i]=angleTxt[i]+360;}

//alert(""+angle);
angle2[i] = angle[i]+3*Math.PI/4;
if(angle2[i]>Math.PI){angle2[i]=angle2[i]-(2*Math.PI);}
angle3[i] = angle[i]-3*Math.PI/4
if(angle3[i]<-Math.PI){angle3[i]=angle3[i]+(2*Math.PI);}
sin2[i] = headL*Math.sin(angle2[i]);
sin3[i] = headL*Math.sin(angle3[i]);
cos2[i] = headL*Math.cos(angle2[i]);
cos3[i] = headL*Math.cos(angle3[i]);

if(thisVector==i){
    ctx.strokeStyle="#FF0000";
}
else{
    ctx.strokeStyle="#000000";
}
ctx.lineWidth=lineSize;

  ctx.beginPath();
  ctx.moveTo(tailX[i], tailY[i]);
  ctx.lineTo(topX[i], topY[i]);
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.moveTo(topX[i], topY[i]);
  ctx.lineTo(topX[i]-sin2[i], topY[i]+cos2[i]);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(topX[i], topY[i]);
  ctx.lineTo(topX[i]+sin3[i], topY[i]-cos3[i]);
  ctx.stroke();

ctx.closePath();

vectorA1[i*2]=length[i];
vectorA1[i*2+1]=tailX[i]-boxL;//angleTxt[i];//NOT angle, but position alog bar

var printLength = threeSF(vectorA1[i*2]*scale, 3);
var printPos = threeSF(vectorA1[i*2+1]*scaleCM, 3);
var printRPos = threeSF((tailX[i]-pivotPos)*scaleCM, 3);
var printMom = threeSF(momentsA[i], 3);
var printDelX = threeSF(delX[i]*scale, 3);
var printDelY = threeSF(delY[i]*(-1*scale), 3);

 if(i==thisVector){
vectText = vectText + "<span style=\"color:red;\">Force "+(i+1)+": force="+printLength+" N; position="+printPos+" cm</span><br>"; //(x:"+delX[i]/2+" y:"+delY[i]/(-2)+")</span><br>";
//vectText2 = vectText2 + "<span style=\"color:red;\">Vector "+(i+1)+": x=<textarea id=\"boxX"+i+"\" oninput=\"change(this)\"> "+delX[i]/2+"</textarea> y=<textarea id=\"boxY"+i+"\" oninput=\"change(this)\">"+delY[i]/(-2)+"</textarea></span><br>";
vectText2 = vectText2 + "<span style=\"color:red;\"> "+(i+1)+": <textarea id=\"boxX"+i+"\"> "+printLength+"</textarea> N; <textarea id=\"boxY"+i+"\">"+printRPos+"</textarea> cm; Fr= "+printMom+" Ncm</span><br>";
//vectText2 = vectText2 + "<span style=\"color:red;\">Force "+(i+1)+": moment=<textarea id=\"boxX"+i+"\"> "+printMom+"</textarea></span><br>";// y=<textarea id=\"boxY"+i+"\">"+printDelY+"</textarea>
totMom = totMom + printMom;
  totForce = totForce + printLength;}
else{
  vectText = vectText + "Force "+(i+1)+": force="+printLength+" N; position="+printPos+" cm<br>";// (x:"+delX[i]/2+" y:"+delY[i]/(-2)+")<br>";
  //vectText2 = vectText2 + "Vector "+(i+1)+": x=<textarea id=\"boxX"+i+"\"  oninput=\"change(this)\"> "+delX[i]/2+"</textarea> y=<textarea id=\"boxY"+i+"\"  oninput=\"change(this)\">"+delY[i]/(-2)+"</textarea><br>";
  vectText2 = vectText2 + " "+(i+1)+": <textarea id=\"boxX"+i+"\"> "+printLength+"</textarea> N; <textarea id=\"boxY"+i+"\">"+printRPos+"</textarea> cm; Fr= "+printMom+" Ncm<br>";
  //vectText2 = vectText2 + "Force "+(i+1)+": moment=<textarea id=\"boxX"+i+"\"> "+printMom+"</textarea><br>";// y=<textarea id=\"boxY"+i+"\">"+printDelY+"</textarea><br>";
totMom = totMom + printMom;
  totForce = totForce + printLength;}
}
//alert(""+angle*180/Math.PI);
var printPivotPos = threeSF((pivotPos-boxL)*scaleCM,3);
totMom = Math.round(threeSF(totMom, 3));
//alert ("here!");
totForce = Math.round(threeSF(totForce, 3));
if(movePivotFlag){
  vectText = vectText + "<span style=\"color:red;\"><br>Pivot at "+printPivotPos+" cm</span><br>";
  vectText2 = vectText2 + "<br>Total moments = "+totMom+" Ncm<br>" + "<br>Total force = "+totForce+" N<br>";}
else{
vectText = vectText + "<br>Pivot at "+printPivotPos+" cm<br>";
vectText2 = vectText2 + "<br>Total moments = "+totMom+" Ncm<br>" + "<br>Total force = "+totForce+" N<br>";
}

document.getElementById("questions1").innerHTML=vectText;//"Vector 1: length="+vectorA1[0]+" N; angle="+vectorA1[1]+"<sup>o</sup>&nbsp;&nbsp;&nbsp; Vector 2: length="+vectorA1[2]+" N; angle="+vectorA1[3]+"<sup>o</sup>";
document.getElementById("components").innerHTML=vectText2;

var resultX=0;//delX[0]+delX[1];
var resultY=0;//delY[0]+delY[1];
for(i=0;i<steps;i++){
   resultX=resultX+delX[i];
   resultY=resultY+delY[i];
}
var resultL = Math.round((Math.sqrt(Math.pow(resultX, 2)+Math.pow(resultY, 2)))*10)/10;
var printResultL = threeSF(resultL*scale,3);
var printResultX = threeSF(resultX*scale,3);
var printResultY = threeSF(resultY*(-1*scale),3);
var resultAng = Math.atan2((resultY), (resultX));//NOTE: y.x !!

  resultAng = Math.round(resultAng*180/Math.PI);
  resultAng = resultAng +90;
  if(resultAng<0){resultAng=resultAng+360;}
    if(resultL<0.5){resultAng = "-"}

    if(resultant){
document.getElementById("answer1").innerHTML="<br>Resultant: length="+printResultL+" N; angle="+resultAng+"<sup>o</sup>";//(x:"+resultX/2+" y:"+resultY/(-2)+")";
document.getElementById("Rcomps").innerHTML="<br>Resultant: X=<textarea id=\"boxRX\" style=\"width: 6em;\"> "+printResultX+"</textarea> Y=<textarea id=\"boxRY\" style=\"width: 6em;\">"+printResultY+"</textarea><br>";
}
else{document.getElementById("answer1").innerHTML="";
}

  if(resultant&&resultL>0){

    tailX[steps] = canvW/2;//Math.round(Math.random()*(canvW-edge*2)+edge);
    tailY[steps] = canvH/2;//Math.round(Math.random()*(canvH-edge*2)+edge);
    //var topXR=canvW/2;
    //var topYR=canvH/2;
    topX[steps] = tailX[steps];
    topY[steps] = tailY[steps];

    for(i=0;i<steps;i++){
    topX[steps] = topX[steps]+delX[i];
    topY[steps] = topY[steps]+delY[i];
  }


    //delX[i] = topX[i] - tailX[i];
    //delY[i] = topY[i] - tailY[i];
    //length[i] = Math.round(Math.sqrt(Math.pow(delX[i], 2)+Math.pow(delY[i], 2)));

    angle[steps] = Math.atan2((topY[steps]-tailY[steps]), (topX[steps]-tailX[steps]));//NOTE: y.x !!

        //angleTxt[i] = Math.round(angle[i]*180/Math.PI);
        //angleTxt[i] = angleTxt[i] +90;
        //if(angleTxt[i]<0){angleTxt[i]=angleTxt[i]+360;}

    //alert(""+angle);
    angle2[steps] = angle[steps]+3*Math.PI/4;
    if(angle2[steps]>Math.PI){angle2[steps]=angle2[steps]-(2*Math.PI);}
    angle3[steps] = angle[steps]-3*Math.PI/4
    if(angle3[steps]<-Math.PI){angle3[steps]=angle3[steps]+(2*Math.PI);}
    sin2[steps] = headL*Math.sin(angle2[steps]);
    sin3[steps] = headL*Math.sin(angle3[steps]);
    cos2[steps] = headL*Math.cos(angle2[steps]);
    cos3[steps] = headL*Math.cos(angle3[steps]);

    ctx.strokeStyle="#00FF00";
    ctx.lineWidth=lineSize+1;

      ctx.beginPath();
      ctx.moveTo(tailX[steps], tailY[steps]);
      ctx.lineTo(topX[steps], topY[steps]);
      ctx.stroke();
      ctx.closePath();

      ctx.beginPath();
      ctx.moveTo(topX[steps], topY[steps]);
      ctx.lineTo(topX[steps]-sin2[steps], topY[steps]+cos2[steps]);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(topX[steps], topY[steps]);
      ctx.lineTo(topX[steps]+sin3[steps], topY[steps]-cos3[steps]);
      ctx.stroke();

    ctx.closePath();
  }
}

function resultantV(){

  if(resultant){
    resultant = false;
    document.getElementById("vect3").value="show resultant";
    plotVector(2);
  }
  else{
    resultant = true;
    document.getElementById("vect3").value="hide resultant";
    plotVector(2);
  }
}

function change(n) //****
{

  var targetImg = n;

  var indexID = targetImg.getAttribute("id");
  var activeID = +indexID.slice(4);//+ in front
  var activeComp = indexID.slice(3,4);
  //alert(""+activeID+" "+activeComp);
  alert(""+document.getElementById("boxX"+activeID).value);

  //var IDvalue = 2*document.getElementById("boxX"+activeID).value
  if(activeComp=="X"){
    var IDvalue = (1/scale)*document.getElementById("boxX"+activeID).value
    topX[activeID]=tailX[activeID]+IDvalue;
  }
  else{
    var IDvalue = (1/scale)*document.getElementById("boxY"+activeID).value
    topY[activeID]=tailY[activeID]+IDvalue;
  }

  plotVector();
}

function change2(){

var IDvalue = 0;
  for(i=0;i<steps;i++){
      IDvalue = (1/scale)*document.getElementById("boxX"+i).value;//force
    topY[i]=tailY[i]+IDvalue;
     IDvalue =(1/scaleCM)*document.getElementById("boxY"+i).value;//position
    tailX[i]=boxL+IDvalue;
    topX[i]=tailX[i];
  }
  pivotPos = boxL;

    plotVector();
}

function changeScale(){
  scale = 1*document.getElementById("boxScale").value;
      plotVector();
}

function changeNumb(){
  steps = 1*document.getElementById("boxNumbOfV").value;
  if(steps<2){
    steps=2;
  }
  else if(steps>6){
    steps=6;
  }
  if(steps==NaN){
    steps=2;
  }
  //document.getElementById("boxNumbOfV").value=steps;
      findVector();
}

function threeSF(n, sf){//n=numb to put in stand. form; sf=sig fig needed;
  var standFormText = 0;
  var answerNumb = n;//12.34
  if(answerNumb!=0){
  var answerNumb2 = answerNumb;
  if(answerNumb2<0){answerNumb2=-1*answerNumb2;}
  var sigFig = Math.pow(10,sf)/10;//10^3/10=100
  var ansLog = Math.floor(Math.log10(answerNumb2));//log(12.34)=1.0913=1
  var ansPow = Math.pow(10,ansLog);//10^1=10
  answerNumb = answerNumb/ansPow;//12.34/10=1.234
  answerNumb = Math.round(answerNumb *sigFig);//1.234*100=123.4=123
  answerNumb = answerNumb/sigFig;//123/100=1.23
  standFormText = Math.round(answerNumb * ansPow*100)/100;//1.23x10=12.3 //;answerNumb+" x 10<sup>"+ansLog+"</sup> ";
  }
  else{standFormText = answerNumb;}
  return standFormText;
}
