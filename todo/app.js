const todo_form =document.querySelector('#todo_form')
const list =document.querySelector('#list')
//todo array
var todo_array = ["apple","mango","orange","banana"]
if(!localStorage.getItem("key")){
    localStorage.setItem('key',JSON.stringify(todo_array))
}
var todo_array = JSON.parse(localStorage.getItem("key"))
todo_form.addEventListener('submit',(event)=>{
    event.preventDefault()
    var array = JSON.parse(localStorage.getItem("key"))

    let value = event.target.children[0].value
    array.push(value)
    // console.log(value);
    localStorage.setItem("key",JSON.stringify(array))
    list.innerHTML += `<li> ${value} </li>`

    //for clear the input
    event.target.reset()
})
// list.innerHTML += `<li> ${localStorage.getItem("key")} </li>`

// localstorage 
// localStorage.setItem('key',JSON.stringify(todo_array))
// var todo_array = JSON.parse(localStorage.getItem("key"))
// console.log(todo_array);

//using loop print array
// for(var i=0; i < todo_array.length; i++){
//     list.innerHTML += `<li>${todo_array[i]} </li>`
// }

// using map print array
todo_array.map((value)=>{
    list.innerHTML += `<li> ${value} </li>`
})




