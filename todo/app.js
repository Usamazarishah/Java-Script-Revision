const todo_form =document.querySelector('#todo_form')
const list =document.querySelector('#list')

todo_form.addEventListener('submit',(event)=>{
    event.preventDefault()
    let value = event.target.children[0].value
    // console.log(value);

    localStorage.setItem("user_value",(value))
    value = localStorage.getItem("user_value")
    //  console.log(value);
    list.innerHTML += `<li>${value} </li>`

    event.target.reset()
})

//todo array
const todo_array = ["apple","mango","orange","banana"]

//localstorage 
// localStorage.setItem('key',JSON.stringify(todo_array))
// const todo_array = JSON.parse(localStorage.getItem("key"))
console.log(todo_array);

//using loop print array
// for(var i=0; i < todo_array.length; i++){
//     list.innerHTML += `<li>${todo_array[i]} </li>`
// }

// using map print array
todo_array.map((value)=>{
    list.innerHTML += `<li> ${value} </li>`
})

list.innerHTML += `<li> ${localStorage.getItem("user_value")} </li>`
todo_array.push(value)

