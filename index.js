//Captura a data atual
const months = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto",
                "Setembro","Outubro","Novembro","Dezembro"];
var date = new Date();
var month = date.getMonth();

//avançar e retroceder meses
function last_month(){
    if(month<=0){
        month=11;
    }else{
    month--
    }
    month_name.innerHTML = months[month];
}
function next_month(){
    if(month>=11){
        month=0;
    }else{
      month++  
    }
    month_name.innerHTML=months[month];
}

//Pega as divs de avançar e retroceder os meses
document.getElementById('last-month').addEventListener("click",last_month);
document.getElementById('next-month').addEventListener("click",next_month);

//Pega o titulo do mês
var month_name = document.getElementById("month-name")