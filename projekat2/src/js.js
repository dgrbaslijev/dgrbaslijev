document.getElementById("unos").focus();

document.addEventListener("DOMContentLoaded", function () {
   document.getElementById("lista").innerHTML = localStorage.getItem("savedListObj");
});


//dodavanje taskova sa enterom
function entsub() {
  if (event.keyCode == 13){
     event.preventDefault()
    newTask();
  }
  else{
    return true;}
  }

//dodavanje novih taskova
let spisak;
function newTask() {
  let vrednostLi = document.getElementById("unos").value;
  if(vrednostLi !== ""){
    let tekst = document.createTextNode(vrednostLi);
    let li = document.createElement("LI");
    li.appendChild(tekst);
    document.getElementById("lista").appendChild(li);
//dodavanje iksa taskovima
    let span = document.createElement("SPAN");
    let iks = document.createTextNode("\u00D7");
    span.setAttribute("class", "zatvori");
    span.appendChild(iks);
    li.appendChild(span);
    brisanjeInputaUBoxu();
      } else {alert("Please, enter some task!");
      }
  function brisanjeInputaUBoxu(){
    let stavka = document.getElementById("unos");
    stavka = document.getElementById("unos").value = "";
  }

  document.getElementById("unos").focus();
  document.getElementById("unos").select();

  let listaTaskova = document.getElementById("lista").innerHTML; 
  localStorage.setItem('savedListObj', listaTaskova);

//brisanje pojedinacnih LI
  spisak = document.getElementsByTagName("span");
  console.log(spisak);
  for(let i=0; i<spisak.length; i++) {
    spisak[i].onclick = function() {
      let pot =  confirm("Are you sure you want to delete this task?")
      if(pot === true){
        let stavka = this.parentElement;
        stavka.remove();
      } else {
        return;
      } 
      let listaTaskova = document.getElementById("lista").innerHTML; 
      localStorage.setItem('savedListObj', listaTaskova);
    } 
  }
}

spisak = document.getElementsByTagName("span");
  console.log(spisak);
  for(let i=0; i<spisak.length; i++) {
    spisak[i].onclick = function() {
      let pot =  confirm("Are you sure you want to delete this task?")
      if(pot === true){
        let stavka = document.getElementsByTagName("li");
        console.log(stavka);
        for(let j=0; j<stavka.length; j++) {
          if(i == j)
            stavka[j].remove();
        }

       
      } else {
        return;
      } 
      let listaTaskova = document.getElementById("lista").innerHTML; 
      localStorage.setItem('savedListObj', listaTaskova);
    } 
  }
  
//filter
let filter = document.getElementById("filterInput");
filter.addEventListener("keyup", filterTasks);
function filterTasks(){
  let filterVrednost = document.getElementById("filterInput").value.toLowerCase();
  let stavke = document.getElementById("lista");
  let listaLi = stavke.querySelectorAll("li");
  for(let i=0; i<listaLi.length; i++) {
    let aaa = listaLi[i];
    if(aaa.innerHTML.indexOf(filterVrednost) > -1){
      listaLi[i].style.display = "";
    } else {
      listaLi[i].style.display = "none"
    }
  }
}

//brisanje svih taskova
function deleteAll(){
  let nekaLista = document.getElementById("lista");
  let potvrdi =  confirm("Are you sure you want to delete all tasks?")
    if(potvrdi === true){
      while(nekaLista.hasChildNodes())
      nekaLista.removeChild(nekaLista.firstChild);
    
    } else {
      return;
    }
    let listaTaskova = document.getElementById("lista").innerHTML; 
    localStorage.setItem('savedListObj', listaTaskova);
  }

