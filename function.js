function typeWriter(text, id){
  var txt = text;
  var i = 0;
  var speed = 10;
  while (i < txt.length){
    document.getElementById(id).innerHTML += txt.charAt(i);   
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter("I am", "Name");


function currentTime() {
  var date = new Date(); 
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  var midday = "AM";
  midday = (hour >= 12) ? "PM" : "AM"; 
  hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12): hour); 
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  document.getElementById("clock").innerText = hour + " : " + min + " : " + sec + " " + midday; 
    var t = setTimeout(currentTime, 1000); 
}

function updateTime(k) { 
  if (k < 10) {
    return "0" + k;
  }
  else {
    return k;
  }
}

currentTime();