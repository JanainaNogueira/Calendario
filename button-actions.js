let estado = true;
function openSideBar(){
    let arrowButton = document.getElementById("menu")
    
    if(estado == true){
        arrowButton.style.display="flex";
        estado = false;
    }else{
        arrowButton.style.display="none";
        estado = true;
    }
}