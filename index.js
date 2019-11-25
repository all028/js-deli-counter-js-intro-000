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
      return "The line is currently empty.";
    }

    var addStr = ""
    var j = 1
    for (let i = 0; i <= line.length-1; i++){
      var k = j.toString();
      addStr += " " + k + ". " + line[i] + ",";
      j++;
    }

    var result = "The line is currently:" + addStr;
    return result;
}//end currentLine
