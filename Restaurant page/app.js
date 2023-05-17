function validate(){
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    if(username =='hema@23' && password =='restarentlog')
    {
        location.assign("http://127.0.0.1:5500/homepage.html");
    }
    else{
        alert('login failed');
    }
}
// function home(){
//     window.location = 'http://127.0.0.1:5500/About.html'
// }
// document.getElementById("validate").onclick = function () {
//      location.href = "http://127.0.0.1:5500/homepage.html#";
//      };
