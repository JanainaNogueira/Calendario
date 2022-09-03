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
    console.log(document.querySelector('ul').appendChild(li))
}