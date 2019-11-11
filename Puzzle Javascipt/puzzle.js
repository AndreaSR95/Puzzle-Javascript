function randomic(array){
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
   while (currentIndex !== 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;	
  }
  return array;
}





function allowDrop(event) {
  event.preventDefault();
}





function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("Text");
  if (!data.replace(/\s/g, '').length){
    return;
  }
  var vettore = data.split("/");

  if(event.target.tagName == "IMG"){
    var dest = event.target.src.split("/");
    swap(vettore[vettore.length-1], dest[dest.length-1]);
  }
  else
    clearDiv(vettore[vettore.length-1]);
  event.target.innerHTML = '<img draggable="true" src="' + "img/" + vettore[vettore.length-1] + '">';
  if(puzzleCompleteCheck() == 1){
    alert("Puzzle Completato!");
  }
}





function puzzleCompleteCheck(){
var elemTabella = document.getElementById("tabella").children;
var asf = elemTabella[2].children;
  for(i=0; i<elemTabella.length; i++){
    for(j=0; j<elemTabella[i].children.length; j++){
      if(elemTabella[i].children[j].firstChild == null || elemTabella[i].children[j].firstChild.src.indexOf("img/image_part_00" + ((j+1)+(i*3)) + ".jpg") == -1)
        return 0;
    }
  }
  return 1;
}





function swap(source, dest){
  var elemScelta = document.getElementById("riquadro_scelta").children;
  var elemTabella = document.getElementById("tabella").children;

  for(i=0; i<elemScelta.length; i++){
    if(elemScelta[i].firstChild != null){
      if(elemScelta[i].firstChild.src.indexOf(source) != -1){
        elemScelta[i].innerHTML = '<img draggable="true" src="' + "img/" + dest + '">';
      }
      else if(elemScelta[i].firstChild.src.indexOf(dest) != -1){
        elemScelta[i].innerHTML = '<img draggable="true" src="' + "img/" + source + '">';
      }
    }
  }
  for(i=0; i<elemTabella.length; i++){
    for(j=0; j<elemTabella[i].children.length; j++){
      if( elemTabella[i].children[j].firstChild != null){
        if(elemTabella[i].children[j].firstChild.src.indexOf(source) != -1){
          elemTabella[i].children[j].innerHTML = '<img draggable="true" src="' + "img/" + dest + '">';
        }else if(elemTabella[i].children[j].firstChild.src.indexOf(dest) != -1){
          elemTabella[i].children[j].innerHTML = '<img draggable="true" src="' + "img/" + source + '">';
        }
      }
    }
  }
}





function clearDiv(immagine){
  var elemScelta = document.getElementById("riquadro_scelta").children;
  var elemTabella = document.getElementById("tabella").children;

  for(i=0; i<elemScelta.length; i++){
    if(elemScelta[i].firstChild != null && elemScelta[i].firstChild.src.indexOf(immagine) != -1){
        elemScelta[i].innerHTML = "";
	return;
    }
  }
  for(i=0; i<elemTabella.length; i++){
    for(j=0; j<elemTabella[i].children.length; j++){
      if( elemTabella[i].children[j].firstChild != null && elemTabella[i].children[j].firstChild.src.indexOf(immagine) != -1){
        elemTabella[i].children[j].innerHTML = "";
        return;
      }
    }
  }
}





var stringa = "";
var table = document.getElementById("scelta");
var immagini = ["img/image_part_001.jpg",
  "img/image_part_002.jpg",
  "img/image_part_003.jpg",
  "img/image_part_004.jpg",
  "img/image_part_005.jpg",
  "img/image_part_006.jpg",
  "img/image_part_007.jpg",
  "img/image_part_008.jpg",
  "img/image_part_009.jpg"];

immagini = randomic(immagini);

var scelte = document.getElementById("riquadro_scelta").children;
for(i=0; i<scelte.length; i++){
  scelte[i].innerHTML = '<img draggable="true" src="' + immagini[i] + '">';
}