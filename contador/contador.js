const time = 250;
const origin = new Date(2020,2,14,9);
var now = new Date(), timediff = (now - origin)/1000, str = "";
var hours = 0, mins = 0, secs = 0;
var contador = document.getElementById("contador").getElementsByTagName("P");
contador = contador[0];

setInterval(function(){
  //get current date
  now = new Date();
  //calculate time difference
  timediff = Math.floor((now - origin)/1000);

  if (timediff <= 0) {
      str = "00:00:00";
  } else {
    //format the time difference into a string
    secs = Math.floor(timediff%60);
    timediff = (timediff-secs)/60;
    mins = Math.floor(timediff%60);
    hours = Math.floor((timediff-mins)/60);

    secs = ((secs > 9) ? "":"0") + secs.toString();
    mins = ((mins > 9) ? "":"0") + mins.toString();
    hours = hours.toString();

    str = hours + ":" + mins + ":" + secs;
    //create the DOM element for it
    contador.textContent = str;
  }
},time);
