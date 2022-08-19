const months = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto",
                "Setembro","Outubro","Novembro","Dezembro"];
var date = new Date();
var month = date.getMonth();

function last_month(){
    month++
    console.log(month);
}
function next_month(){
    month--
    console.log(month);
}
document.getElementById('last-month').addEventListener("click",last_month);
document.getElementById('next-month').addEventListener("click",next_month);