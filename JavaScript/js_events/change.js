const textUserName = document.getElementById('username');
const user = document.getElementById('user');

textUserName.addEventListener('input', (e)=>{
    console.log(e.target.value);
    if(e.target.value === '')
    {
        user.innerText = 'Enter Your Username';
        return;
    } 

        user.innerText = `Welcome, ${e.target.value}`;
 
 
})