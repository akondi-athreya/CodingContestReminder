var userNameDiv;
function userNameLogin(value){
    userNameDiv=value;
}
var passwdUserDiv;
function passwdLogin(value){
    passwdUserDiv=value;
}
var usernameLoginDivErase=document.getElementsByClassName("loginTextFiledOne")[0];
var passwdLoginDivErase=document.getElementsByClassName("loginTextFiledTwo")[0];
function loginButton(formname) {
        var Username = (userNameDiv);
        var Password = (passwdUserDiv);
        console.log("Entered Username:", Username);
        console.log("Entered Password:", Password);
        const usersString = localStorage.getItem('users');
        const usersArray = JSON.parse(usersString);
        const user = usersArray.find(user => user.username === Username && user.password === Password);
        // window.location.href ="../html/html1.html";
        if (user) {
            console.log("hai")
            // alert('Login successful');
            location.href="./html1.html";
            passwdLoginDivErase.reset();
            window.location.href ="../html/html1.html";
        } else {
            alert("login failed");
            var form = document.getElementsByClassName(formname)[0];
            console.log(form);
            form.reset();
            // usernameLoginDivErase.innerHTML="";
            // console.log(usernameLoginDivErase.target.value)

        }
}