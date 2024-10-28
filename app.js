/* Theory

const array = [1, 2, 3, 5, 20, 42, 111];
// const arrayString = ['a', 'b', 'c', null, 12]
// const array = newArray(1, 2, 3, 5, 20, 42)
// console.log(array.lenght)
console.log(array[array.length - 1]) // array[6 - 1]


function render() {

    // for (let i = 0; i < notes.length; i++) {
    //     listElement.insertAdjacentHTML('beforeend',  getNoteTemplate(notes[i]))
    // }

    for (note of notes) {
        listElement.insertAdjacentHTML('beforeend',  getNoteTemplate(note))
    }
}
*/

const inputElement = document.getElementById('title');
const createBtn = document.getElementById('create');
const listElement = document.getElementById('list');


// const notes = ['Записать блок про массивы', 'рассказать теорию']

// function render() {
//     for (note of notes) {
//         listElement.insertAdjacentHTML('beforeend',  getNoteTemplate(note))
//     }
// }

// render()
// createBtn.onclick = function() {
//     if (inputElement.value.length === 0) {
//         return
//     }
//     listElement.insertAdjacentHTML(
//         'beforeend', 
//         getNoteTemplate(inputElement.value)
//     )
//     inputElement.value = '';
// }

// function getNoteTemplate(title) {
//     return `
//         <li class="list-group-item d-flex justify-content-between align-items-center">
//             <span>${title}</span>
//             <span>
//                 <span class="btn btn-small btn-success">&check;</span>
//                 <span class="btn btn-small btn-danger">&times;</span>
//             </span>
//         </li>
//     `
// }


/**
 *  Object Theory
const person = {
    firstName: 'Elena',
    lastName: 'Miroshnichenko',
    year: 1997,
    languages: ['ru', 'en'],
    getFullName: function () {
        console.log(person.firstName + ' ' + person.lastName)
    },
}
console.log(person.year)
console.log(person[languages])

const key = 'lastName'
console.log(person[key])

person.getFullName()
*/


const notes = [{
        title : 'Записать блок про массивы',
        completed: false,
    }, 
    {
        title : 'Pассказать теорию',
        completed: true,
    }
]

function render() {
    listElement.innerHTML = ''
    if (notes.length === 0) {
        listElement.innerHTML = '<p>Нет заметок</p>'
        return
    }
    for (let i = 0; i < notes.length; i++) {
        listElement.insertAdjacentHTML('beforeend',  getNoteTemplate(notes[i], i))
    }
}
render()

createBtn.onclick = function() {
    if (inputElement.value.length === 0) {
        return
    }
    const newNote = {
        title: inputElement.value,
        completed: false
    } 
    notes.push(newNote)
    render()
    inputElement.value = '';
}

listElement.onclick = function (event) {
    if (event.target.dataset.index) {
        const index = parseInt(event.target.dataset.index)
        const type = event.target.dataset.type

        if (type === 'toggle') {
           notes[index].completed = !notes[index].completed
        } else if (type === 'remove') {
            notes.splice(index, 1)
        }

        render()
    }
}
function getNoteTemplate(note, index) {
    return `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span class="${note.completed ? 'text-decoration-line-through' : ''}" >${note.title}</span>
            <span>
                <span class="btn btn-small btn-${note.completed ? 'warning' : 'success'}" data-index="${index}" data-type="toggle">&check;</span>
                <span class="btn btn-small btn-danger" data-index="${index}" data-type="remove">&times;</span>
            </span>
        </li>
    `
}