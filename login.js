function handlelogin(){
    const username=document.getElementById('uname').value;
    const password=document.getElementById('pass').value;
    const errormsg=document.getElementById('error');

    const logindata=[
        {username:"nandhini",password:"12345"},
        {username:"keerthana",password:"56789"},
        {username:"pooja",password:"01234"},
    ]

    const isvalid=logindata.some((uname)=>uname.username==username && uname.password==password);

    if(isvalid){
        window.location.href="flexbox.html"
        errormsg.innerText="Login successfull"
        
    }
    else{
        errormsg.innerText="Invalid Credentials"
    }
}