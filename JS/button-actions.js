let state = false;
function openSideBar(){
    let arrowButton = document.getElementById("menu")
    let rotateArrow = document.getElementById("arrow")
    if(state === false){
        arrowButton.style.display="flex";
        rotateArrow.style.transform="rotate(180deg)"
        state = !state;
    }else{
        arrowButton.style.display="none";
        rotateArrow.style.transform="rotate(0deg)"
        state = false;
    }
}