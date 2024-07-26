document.querySelector('#CF').addEventListener('click', custom_CF_contest);
function custom_CF_contest() {
    console.log('showing codeforces contests only');
    var parent = document.getElementsByClassName('garp_contests')[0];
    parent.innerHTML = "";
    console.log(CFoneMonth);
    if (codeforces_data.result) {
        CFoneMonth.forEach(contest =>
            creatingDiv(contest)
        );
    }
}
function creatingDiv(obj) {
    var parent = document.getElementsByClassName('garp_contests')[0];
    parent.style.border = '1px solid black';
    parent.style.backdropFilter = 'blur(3px)';
    parent.style.overflowX = 'hidden';
    parent.style.overflowY = 'scroll';

    var child = document.createElement('a');
    child.setAttribute('class', 'garp_childs');
    child.setAttribute('href', 'https://codeforces.com/contests?complete=true');
    child.setAttribute('target', '_blank');

    var head = document.createElement('div');
    head.setAttribute('class', 'name_of_contest');
    head.innerHTML = obj.name;

    var html_dur = document.createElement('div');
    html_dur.setAttribute('class', 'duration_of_contest');
    html_dur.innerHTML = obj.duration || obj.durationSeconds;

    var html_date = document.createElement('div');
    html_date.setAttribute('class', 'date_of_contest');
    html_date.innerHTML = obj.startTimeSeconds;

    var icn = document.createElement('div');
    icn.style.width = '30px';
    icn.style.height = '30px';
    icn.style.background = "url('../assets/cf.png')";
    icn.style.backgroundSize = 'cover';
    icn.style.backgroundRepeat = 'no-repeat';
    icn.style.backgroundPosition = 'center';
    icn.style.position = 'absolute';
    icn.style.bottom = '10';
    icn.style.right = '10';

    child.appendChild(html_date);
    child.appendChild(html_dur);
    child.appendChild(head);
    child.appendChild(icn);
    parent.appendChild(child);
}

document.querySelector('#LC').addEventListener('click', custom_LC_contest);
function custom_LC_contest(){
    console.log('showing leetcode contests only');
    var parent = document.getElementsByClassName('garp_contests')[0];
    parent.innerHTML = "";
    leet.map(i =>{
        default_code(i);
    })
}

document.querySelector('#CC').addEventListener('click', custom_CC_contest);
function custom_CC_contest(){
    console.log('showing codechef contests only');
    var parent = document.getElementsByClassName('garp_contests')[0];
    parent.innerHTML = "";
    chef.map(i =>{
        default_code(i);
    })
}

document.querySelector('#GFG').addEventListener('click', custom_GFG_contest);
function custom_GFG_contest(){
    console.log('showing GeeksForGeeks contests only');
    var parent = document.getElementsByClassName('garp_contests')[0];
    parent.innerHTML = "";
    gfg.map(i =>{
        default_code(i);
    })
}