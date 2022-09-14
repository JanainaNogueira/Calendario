document.querySelector('.tasks-bar__tasks').addEventListener('click',(e)=>{
    const targetClick=e.target //identifica o elemento
    if(targetClick.classList.contains("text-task")){ 
        targetClick.onkeydown = (e)=>{
            var tecla = e.key
            if(tecla === 'Enter'){
                localStorage.setItem(targetClick.id,targetClick.value)  
            }
        }
         
    }
})




