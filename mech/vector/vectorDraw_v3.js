

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
var steps = 2;
var permA = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var permA2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var permStep = 9;
var thisPermA = new Array();
var scale =0.5;

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
  thisVector++;
  if(thisVector>steps){
    thisVector=0;
  }
  document.getElementById("vect1").value="vector "+(thisVector+1);
  if(thisVector==steps){
  document.getElementById("vect1").value="lock vectors";

  }
  //alert("thisVector"+thisVector);
  plotVector();
}

function findVector(){//findVector(n){
//var index = n*2;
//var steps = n;
var vectText="";
var vectText2="";
document.getElementById("boxNumbOfV").value=steps;
document.getElementById("boxScale").value=scale;
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

  c.width=canvW;
  c.height=canvH;

//ctx.clearRect(0, 0, canvW, canvH);
for(i=0;i<steps;i++){
tailX[i] = canvW/2;//Math.round(Math.random()*(canvW-edge*2)+edge);
topX[i] = Math.round(Math.random()*(canvW/2-edge*2)+edge+canvW/4);
tailY[i] = canvH/2;//Math.round(Math.random()*(canvH-edge*2)+edge);
topY[i] = Math.round(Math.random()*(canvH/2-edge*2)+edge+canvH/4);
/*
OldtopX[i]=topX[i];
OldtopY[i]=topY[i];
OldtailX[i]=tailX[i];
OldtailY[i]=tailY[i];
*/
if(HVflag1){
  for(i=0;i<steps;i=i+2){
    topX[i] =tailX[i];
  }
  for(i=1;i<steps;i=i+2){
      topY[i] =tailY[i];
    }
}

delX[i] = topX[i] - tailX[i];
delY[i] = topY[i] - tailY[i];
length[i] = Math.round(Math.sqrt(Math.pow(delX[i], 2)+Math.pow(delY[i], 2)));

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
vectorA1[i*2+1]=angleTxt[i];

var printLength = threeSF(vectorA1[i*2]*scale, 3);
var printDelX = threeSF(delX[i]*scale, 3);
var printDelY = threeSF(delY[i]*(-1*scale), 3);

/*if(i==0){
  alert(""+delX[i]+" "+delX[i]*scale+" "+printDelX)
}*/

 vectText = vectText + "Vector "+(i+1)+": length="+printLength+" N; angle="+vectorA1[i*2+1]+"<sup>o</sup><br>";// (x:"+delX[i]/2+" y:"+delY[i]/(-2)+")<br>";
 //vectText2 = vectText2 + "Vector "+(i+1)+": x=<textarea id=\"boxX"+i+"\"  oninput=\"change(this)\"> "+delX[i]/2+"</textarea> y=<textarea id=\"boxY"+i+"\"  oninput=\"change(this)\">"+delY[i]/(-2)+"</textarea><br>";
 vectText2 = vectText2 + "Vector "+(i+1)+": x=<textarea id=\"boxX"+i+"\"> "+printDelX+"</textarea> y=<textarea id=\"boxY"+i+"\">"+printDelY+"</textarea><br>";
}
//alert(""+angle*180/Math.PI);

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

//for(i=0;i<steps;i++){
//  var randPos = Math.floor(Math.random()*steps);
//  thisPermA[i] = permA2[]
//}


if(topTailFlag){
//shufflePerm();
  for(j=0;j<steps;j++){
    i = thisPermA[j];
if(j>0){
    tailX[i]=topX[thisPermA[j-1]];
    tailY[i]=topY[thisPermA[j-1]];
    //topX[i]=tailX[i]+delX[i];
    //topY[i]=tailY[i]+delY[i];
    if(toTT){
    topX[i]=tailX[i]+delX[i];
    topY[i]=tailY[i]+delY[i];
            }
      }
}
  toTT=false;//make false after been thru whole loop
}
else{
  for(i=0;i<steps;i++){
/*
if(toTT){
   topX[i]=topX[i]-tailX[i]+canvW/2;//OldtopX[i];
   topY[i]=topY[i]-tailY[i]+canvH/2;//OldtopY[i
     toTT=false;
 }*/
  tailX[i]=canvW/2;//OldtailX[i];
  tailY[i]=canvH/2;//OldtailY[i];
  if(toTT){
  topX[i]=tailX[i]+delX[i];
  topY[i]=tailY[i]+delY[i];
}
}
  toTT=false;
}
  //var index = n*2;
  //var steps = n;
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");

    c.width=canvW;
    c.height=canvH;

  //ctx.clearRect(0, 0, canvW, canvH);
  for(i=0;i<steps;i++){
delX[i] = topX[i] - tailX[i];
delY[i] = topY[i] - tailY[i];
length[i] = Math.round(Math.sqrt(Math.pow(delX[i], 2)+Math.pow(delY[i], 2)));

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
vectorA1[i*2]=length[i];//length[i]*scale;
vectorA1[i*2+1]=angleTxt[i];

var printLength = threeSF(vectorA1[i*2]*scale, 3);
var printDelX = threeSF(delX[i]*scale, 3);
var printDelY = threeSF(delY[i]*(-1*scale), 3);

 if(i==thisVector){
vectText = vectText + "<span style=\"color:red;\">Vector "+(i+1)+": length="+printLength+" N; angle="+vectorA1[i*2+1]+"<sup>o</sup></span><br>"; //(x:"+delX[i]/2+" y:"+delY[i]/(-2)+")</span><br>";
//vectText2 = vectText2 + "<span style=\"color:red;\">Vector "+(i+1)+": x=<textarea id=\"boxX"+i+"\" oninput=\"change(this)\"> "+delX[i]/2+"</textarea> y=<textarea id=\"boxY"+i+"\" oninput=\"change(this)\">"+delY[i]/(-2)+"</textarea></span><br>";
vectText2 = vectText2 + "<span style=\"color:red;\">Vector "+(i+1)+": x=<textarea id=\"boxX"+i+"\"> "+printDelX+"</textarea> y=<textarea id=\"boxY"+i+"\">"+printDelY+"</textarea></span><br>";
}
else{
  vectText = vectText + "Vector "+(i+1)+": length="+printLength+" N; angle="+vectorA1[i*2+1]+"<sup>o</sup><br>";// (x:"+delX[i]/2+" y:"+delY[i]/(-2)+")<br>";
  //vectText2 = vectText2 + "Vector "+(i+1)+": x=<textarea id=\"boxX"+i+"\"  oninput=\"change(this)\"> "+delX[i]/2+"</textarea> y=<textarea id=\"boxY"+i+"\"  oninput=\"change(this)\">"+delY[i]/(-2)+"</textarea><br>";
  vectText2 = vectText2 + "Vector "+(i+1)+": x=<textarea id=\"boxX"+i+"\"> "+printDelX+"</textarea> y=<textarea id=\"boxY"+i+"\">"+printDelY+"</textarea><br>";
}
}
//alert(""+angle*180/Math.PI);

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

function change(n) //make a piece active or deactivate an active piece
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
      IDvalue = (1/scale)*document.getElementById("boxX"+i).value;
    topX[i]=tailX[i]+IDvalue;
     IDvalue =(-1/scale)*document.getElementById("boxY"+i).value;
    topY[i]=tailY[i]+IDvalue;
  }

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
