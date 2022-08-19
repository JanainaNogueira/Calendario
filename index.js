function seleciona_data(){
    var date = new Date();
    var month = date.getMonth();
    console.log(month);
}

function troca_mes(){
    seleciona_data();
}
document.getElementById('last-month').addEventListener("click",troca_mes);
document.getElementById('next-month').addEventListener("click",troca_mes);