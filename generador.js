const time = 2000;

setInterval(function(){
  const bateria = document.getElementById("bateria"),  frase = document.getElementById("showing");
  const duration = 1000;

  //select a random sentence from bateria
  var num = Math.floor(Math.random() * bateria.children.length);

  //create the DOM element for it
  var newPhrase = document.createElement("p");
  var chosen = document.createTextNode(bateria.children.item(num).textContent);
  newPhrase.append(chosen);
  newPhrase.id = "newPhrase";
  frase.append(newPhrase);

  //now, animation: first we add the class that will activate the animation
  frase.className = "animated";

  //once the animation is done, delete previous sentence and start all over
  setTimeout(function(){
    frase.innerHTML = "<p>"+newPhrase.innerHTML+"</p>" + "<p>"+newPhrase.innerHTML+"</p>";
    frase.className = '';
    frase.innerHTML = "<p>"+newPhrase.innerHTML+"</p>";
  },duration);
},time);
