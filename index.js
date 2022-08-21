//Captura a data atual
const months = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto",
                "Setembro","Outubro","Novembro","Dezembro"];
let date = new Date();
let month = date.getMonth();
let year = date.getFullYear();

function load(){
    month_name.innerHTML=months[month];
    update_month(month, year);
}
function update_month(month,year){
    let firstDay = new Date(year, month, 1).getDay()-1;
    for(var i=-firstDay,index=0;i<(42-firstDay);i++,index++){
        let day = new Date(year,month,i).getDate()
        document.getElementsByTagName('td')[index].innerHTML= day;
    }
}

//avançar e retroceder meses
function last_month(){
    if(month<=0){
        month=11;
        year--
    }else{
    month--
    }
    month_name.innerHTML = months[month];
    update_month(month,year)
}
function next_month(){
    if(month>=11){
        month=0;
        year++
    }else{
      month++  
    }
    month_name.innerHTML=months[month];
    update_month(month,year)
}

//Pega as divs de avançar e retroceder os meses
document.getElementById('last-month').addEventListener("click",last_month);
document.getElementById('next-month').addEventListener("click",next_month);

//Pega o titulo do mês
var month_name = document.getElementById("month-name")

window.addEventListener("load",load)