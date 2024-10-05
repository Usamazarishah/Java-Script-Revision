const form =document.querySelector('#form')
const main_div =document.querySelector('#main_div')

form.addEventListener('submit',async(event)=>{
    event.preventDefault()
    const value = event.target.children[0].value
    const API_URL = (`https://api.github.com/users/${value}`)
    const imgTag = main_div.children[0]
    const name = main_div.children[1]
    
    try{
        const response = await axios (API_URL); 

        console.log(response);

        imgTag.src = response.data.avatar_url;
        name.innerText = response.data.name
    }catch(err){
        console.log("error>",err.response.data.message);
    }
    
    
    console.log('form is submitted',value);
}
)

//  function test(){
 
// }
// test();

