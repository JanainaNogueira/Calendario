function addTask(){
    let li = document.createElement("LI")
    let label = document.createElement("LABEL")
    let inputMarker = document.createElement("INPUT")
    let span = document.createElement("SPAN")
    let inputText = document.createElement("INPUT")

    label.appendChild(inputMarker)
    label.appendChild(span)
    label.appendChild(inputText)
    li.appendChild(label)
    document.querySelector('ul').appendChild(li)

    label.className = "checkbox-container"
    inputMarker.className = "check"
    span.className = "marker"
    inputText.className = "text-task"

    inputMarker.type = "checkbox"
    inputText.type = "text"
}

document.querySelector('span').addEventListener('click', () => {
    let textDecor = document.querySelector(".text-task").style
    if(textDecor.textDecoration === "none"){
        textDecor.textDecoration="line-through"
    }else{
        textDecor.textDecoration="none"
    }

});