const data = [
  {'id': 1, 'text': 'task 1', 'complete': false},
  {'id': 2, 'text': 'task 2', 'complete': true},
  {'id': 3, 'text': 'task 3', 'complete': false}
]

//use localstorage to save and load data
let todoData
if (localStorage.getItem('todos')) {
  todoData = JSON.parse(localStorage.getItem('todos'))
} else {
  todoData = data
}

export default todoData
