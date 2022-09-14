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

    label.classList.add("checkbox-container")
    inputMarker.classList.add("check")
    span.classList.add("marker")
    inputText.classList.add("text-task")

    inputMarker.type = "checkbox"
    inputText.type = "text"
}
document.querySelector('.tasks-bar__tasks').addEventListener('click',(e)=>{
    const targetClick=e.target //identifica o elemento
    const textDecor = targetClick.closest("li")
    if(targetClick.classList.contains("marker")){
        textDecor.classList.toggle("checked")
    }
})