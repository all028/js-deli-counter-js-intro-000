function takeANumber(line, name){
  var rsltStr = "";
  for (let x = 0; x <= name.length -1;x++){
    rsltStr = "Welcome " + name + ".  You are number " +  line + " in line";
    line++;
  }

  return rsltStr;
}//end takeANumber


function nowServing(line){
  if (line.length ==0){
    return "There is nobody waiting to be served!";
  }

  for (let i=0; i <= line.length-1;i++ ){
    var temp =  line[i];
    line.unshift();
    var rslt = "Currently serving " + temp + ".";
  }
    return rslt;
}//end nowServing



//**********************************done*****************
function currentLine(line){
    if (line.length ==0){
      return "The line is currently empty.";
    }

    var addStr = ""
    var j = 1
    for (let i = 0; i <= line.length-1; i++){
      var k = j.toString();
      if (i < line.length-1){
        addStr += " " + k + ". " + line[i] + ",";
      }

      if (i == line.length-1){
        addStr += " " + k + ". " + line[i];
      }
      j++;
    }

    var result = "The line is currently:" + addStr;
    return result;
}//end currentLine
