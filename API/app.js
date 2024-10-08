const form =document.querySelector('#form')
const main_div =document.querySelector('#main_div')

form.addEventListener('submit',async(event)=>{
    event.preventDefault()
    const value = event.target.children[0].value
    const API_URL = (`https://api.github.com/users/${value}`)
    const profile_img = main_div.children[0]
    const userName = main_div.children[1]
    const userRepos = main_div.children[2]
    const profile_link = main_div.children[3]
    
    try{
        const response = await axios (API_URL); 

        console.log(response);

        profile_img.src = response.data.avatar_url;
        userName.innerText = `Name: ${response.data.name}|| 'Not Available'`
        userRepos.innerText = `Repos: ${response.data.public_repos} `
        profile_link.href = response.data.html_url

    }catch(err){
        console.log("error>",err.response.data.message);
        alert('User not found!');
    }
    
    console.log('form is submitted',value);
}
)

