let users = [
    {
        'username':'gangadhar',
        'usermail':'saigangadharsgk@gmail.com',
        'password':'123',
        'gfg':'gangadhar',
        'leetcode':'gangadhar',
        'codechef':'gangadhar',
        'codeforces':'gangadhar'
    }
]


localStorage.setItem('users', JSON.stringify(users));

let constantVariable=0;
function signTransition(){
    var signUpContentDiv=document.getElementsByClassName("signUpContent")[0];
    if(constantVariable===0){
        signUpContentDiv.style.width="48%";
    }
}
var signUpDataObject={
        'username':'',
        'usermail':'',
        'password':'',
        'gfg':'',
        'leetcode':'',
        'codechef':'',
        'codeforces':''
}
var inputUserPasswd;
function UserNameFromUser(value){
    signUpDataObject.username=value;
}
function emailFromUser(value){
    signUpDataObject.usermail=value;
}
function createPasswdFromUser(value){
    signUpDataObject.password=value;
}
function comfirmPasswdFromUser(value){
    inputUserPasswd=value;
}
function gettingUserNames(){
    if(inputUserPasswd!=signUpDataObject.password){
        alert("Invalid Password");
    }
    else{
        var signupMainDivDOM=document.getElementsByClassName("signUpDetails")[0];
        var signCodingProfilesDiv=document.getElementsByClassName("signCodingProfiles")[0];
        signCodingProfilesDiv.style.width="35%";
    }
}
function hackerRankFromUser(value){
    signUpDataObject.codeforces=value;
}
function gfgUserNameFromUser(value){
    signUpDataObject.gfg=value;
}
function leetcodeUserNameFromUser(value){
    signUpDataObject.leetcode=value;
}
function codechefUserNameFromUser(value){
    signUpDataObject.codechef=value;
}
function submitDataSignUpPage(event){
    window.location.href="/html/html1.html";
    event.preventDefault(); 
    var val=signUpDataObject.username;
    console.log(val); 
    const usersString = localStorage.getItem('users');
    const usersArray = JSON.parse(usersString);
    users = usersArray
    users.push(signUpDataObject)
    localStorage.setItem('users', JSON.stringify(users));
    const usersString1 = localStorage.getItem('users');
    const usersArray1 = JSON.parse(usersString1);
    console.log(usersArray1)
}
