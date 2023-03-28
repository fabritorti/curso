const inputTask = document.querySelector('#inputTask')
const containerList = document.querySelector('#containerList')

const arrayTasks = [];

// let task = {
//     task: '',
//     state: true,
// }

class Task {
    constructor(task){
        this.task = task,
        this.state = false
    }
}


const eventCheck = (elementoHTML, taskcheck) => {
    elementoHTML.addEventListener('change', () => {
        taskcheck.state = elementoHTML.checked
        console.log(arrayTasks);
    })
}


const renderHTML = (array) => {

    containerList.innerHTML = ''

    array.map( elemento => {
        let li = document.createElement('li')
        let strong = document.createElement('strong')
        strong.innerText = elemento.task
        let checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.checked = elemento.state
        eventCheck(checkbox, elemento)

        let i = document.createElement('i')
        i.classList.add('bi', 'bi-trash3-fill')

        i.addEventListener('click', () => {
            let index = arrayTasks.indexOf(elemento)
            console.log(index);
            arrayTasks.splice(index,1)
            console.log(arrayTasks);
            renderHTML(arrayTasks)
        })

        li.append(strong)
        li.append(checkbox)
        li.append(i)
        $('#containerList').append(li)
    })

}



$(document).ready( function(){

    $('#formTask').submit( (evento) => {
        evento.preventDefault()
        let task = new Task( $('#inputTask').val())
        console.log(task);
        arrayTasks.push(task)

        renderHTML(arrayTasks)
    })

})

