var listOfNumb = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var alphabetA = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
"k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
"u", "v", "w", "x", "y", "z"];
var alphabet2A = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
"K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
"U", "V", "W", "X", "Y", "Z"];
var listOfNumbLen = listOfNumb.length;
var alphabetLen = alphabetA.length;
var numbFlag = true;//if true use numbers, if false then use letters
var bangGo = "";
var goFlag = true;//if true make numb, if flase input number
var guessN = "";
var timeN = 5000;
var numbLen = 4;
var numbNow = "";
var maxLen = 0;
var minTime = 200000;
var totLen = 0;
var totTime = 0;
var aveLen = 0;
var aveTime = 0;
var turns = 0;

function makeNumber(){

      numbNow = "";
  var chosenN = 0;

  for(i=0;i<numbLen;i++){
    chooseN = Math.floor(Math.random()*listOfNumbLen);
    numbNow = numbNow + listOfNumb[chooseN];
  }

    document.getElementById("number1").innerHTML=""+numbNow;
    goFlag=false;
}

function makeBang(){
  if(goFlag){
    turns++;
    //totLen = totLen+numbLen;
    //totTime = totTime+timeN;
    //aveLen = (totLen/turns).toFixed(2);
    //aveTime = (totTime/turns).toFixed(0);
  makeNumber();
  setTimeout(hideNumber, timeN);
}
  else{
    guessN=document.getElementById("subBox").value;
    if(guessN==numbNow){
      if(numbLen>maxLen){
        maxLen=numbLen;
      }
        if(minTime>timeN){
          minTime=timeN;
        }
        totLen = totLen+numbLen;
        totTime = totTime+timeN;
        aveLen = (totLen/turns).toFixed(2);
        aveTime = (totTime/turns).toFixed(0);
        document.getElementById("number1").innerHTML="correct";
        document.getElementById("number2").innerHTML=turns+": best length = "+numbLen+";  best time = "+minTime+" ms";
        document.getElementById("number3").innerHTML=turns+": ave. length = "+aveLen+";  ave. time = "+aveTime+" ms";
        document.getElementById("subBox").style.value = "????";
        document.getElementById("subBox").style.visibility = "hidden";
        document.getElementById("goB").value="GO!";
        goFlag=true;
        if(Math.random()<0.4){
        timeN = Math.round(Math.round(timeN * 0.8/100)*100);}
        else{
        numbLen++;}
      }
    else{
    //totLen = totLen+numbLen;
    totTime = totTime+timeN;
    aveLen = (totLen/turns).toFixed(2);
    aveTime = (totTime/turns).toFixed(0);
        document.getElementById("number1").innerHTML="WRONG!";
        document.getElementById("subBox").style.value = "????";
        document.getElementById("subBox").style.visibility = "hidden";
        document.getElementById("goB").value="GO!";
        goFlag=true;
        if(Math.random()<0.2){
        timeN = Math.round(Math.round(timeN * 1.2/100)*100);}
        else{
        numbLen--;}
    }
  }
}

function hideNumber(){
    document.getElementById("number1").innerHTML="";
    document.getElementById("subBox").style.visibility = "visible";//"hidden";
    document.getElementById("subBox").value = "";
    document.getElementById("goB").value="input...";
}

function bang(){
  //bangRing = 0;
  //bangFlag = false;
  makeNumber();
  clearTimeout(bangGo);
}
