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
      return "There is nobody waiting to be served!";
    }

    for
    var idx = line.indexOf

}//end currentLine
