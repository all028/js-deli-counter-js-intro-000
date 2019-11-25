function takeANumber(line, name){
  var rsltStr = "";
  for (let x = 0; x <= name.length -1;x++){
    rsltStr = "Welcome " + name + ".  You are number " +  line + " in line";
    line++;
  }

  return rsltStr;
}//end takeANumber


function nowServing(line){
  if (line.length > 0) {
    var rslt =  line[0];
    line.unshift();
    return rslt;
  }

  if (line.length ==0){
    return "There is nobody waiting to be served!";
  }
}//end nowServing

function currentLine(line){
    if (line.length ==0){
      return "There line is currently empty.";
    }

    var tempStr = "The line is currently:"
    var addStr = ""
    for (let i = 0; i < line.length-1; i++){
      var j = line[i+1];
      addStr += " " + j + ". " + line + ",";
    }

    return tempStr + addStr;


}//end currentLine
