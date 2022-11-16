/* const text = document.querySelectorAll(".teste");


var j = 0;
text.forEach(teste => {teste.addEventListener("click", create);})
text.forEach(teste => {teste.addEventListener("click", acrescentar);})


function create() {
  var box = document.createElement("div");
  box.setAttribute('class', 'itembox');
  box.setAttribute('id', 'itemBox');
  var holder = document.createElement("input");
  holder.setAttribute('type', 'text');
  var item = document.createTextNode("testing");
  holder.appendChild(item);
  box.appendChild(holder);
  var mainholder = document.getElementsByClassName("teste")[j];
    
  mainholder.appendChild(box);
}

function acrescentar(){
  j++
}
*/

function startTime() {
    var weekday = new Array();
    weekday[0] =  "Domingo";
    weekday[1] = "Segunda-Feira";
    weekday[2] = "Terça-Feira";
    weekday[3] = "Quarta-Feira";
    weekday[4] = "Quinta-Feira";
    weekday[5] = "Sexta-Feira";
    weekday[6] = "Sábado";
    var month = new Array();
    month[0] = "Janeiro";
    month[1] = "Fevereiro";
    month[2] = "Março";
    month[3] = "Abril";
    month[4] = "Maio";
    month[5] = "Junho";
    month[6] = "Julho";
    month[7] = "Agosto";
    month[8] = "Setembro";
    month[9] = "Outubro";
    month[10] = "Novembro";
    month[11] = "Dezembro";
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var d = today.getDate();
    var y = today.getFullYear();
    var wd = weekday[today.getDay()];
    var mt = month[today.getMonth()];
  
    m = checkTime(m);
    s = checkTime(s);
                    document.getElementById('date').innerHTML =
    d;
 document.getElementById('day').innerHTML =
    wd;
 document.getElementById('month').innerHTML =
    mt + "/" + y;
    
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}
