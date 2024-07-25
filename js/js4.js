

var codeforces_data = {};
let CFoneMonth = [];

async function fun() {
    try {
        const response = await fetch('https://codeforces.com/api/contest.list');
        const data = await response.json();
        codeforces_data = data;
        // console.log(codeforces_data);
        
        let j = 0;
        while (codeforces_data.result[j] && codeforces_data.result[j].phase === "BEFORE") {
            let contest = codeforces_data.result[j];
            contest.startTimeSeconds = unixToDateTime(contest.startTimeSeconds);
            contest.durationSeconds = StoM(contest.durationSeconds);
            CFoneMonth.push(contest);
            j++;
        }
        CFoneMonth.reverse();
    } catch (error) {
        console.log(error);
    }
}

fun();
document.addEventListener('DOMContentLoaded', () => {
    const cfButton = document.querySelector('#CF');
    if (cfButton) {
        cfButton.addEventListener('click', custom_CF_contest);
    }

    const lcButton = document.querySelector('#LC');
    if (lcButton) {
        lcButton.addEventListener('click', custom_LC_contest);
    }

    const ccButton = document.querySelector('#CC');
    if (ccButton) {
        ccButton.addEventListener('click', custom_CC_contest);
    }

    const gfgButton = document.querySelector('#GFG');
    if (gfgButton) {
        gfgButton.addEventListener('click', custom_GFG_contest);
    }
    const allShow = document.querySelector('#shinchan');
    if (allShow) {
        allShow.addEventListener('click', luffy);
    }
});

function custom_CF_contest() {
    console.log('showing codeforces contests only');
    var parent = document.getElementsByClassName('garp_contests')[0];
    parent.innerHTML = "";
    console.log(CFoneMonth);
    if (codeforces_data.result) {
        CFoneMonth.map((i, index) => {
            default_code(i, index)            
        })
    }
}

function custom_LC_contest() {
    console.log('showing leetcode contests only');
    var parent = document.getElementsByClassName('garp_contests')[0];
    parent.innerHTML = "";
    leet.map((i, index) => {
        default_code(i, index);
    })
}

function custom_CC_contest() {
    console.log('showing codechef contests only');
    var parent = document.getElementsByClassName('garp_contests')[0];
    parent.innerHTML = "";
    chef.map((i, index) => {
        default_code(i, index);
    })
}

function custom_GFG_contest() {
    console.log('showing GeeksForGeeks contests only');
    var parent = document.getElementsByClassName('garp_contests')[0];
    parent.innerHTML = "";
    gfg.map((i, index) => {
        default_code(i, index);
    })
}

function unixToDateTime(unixTimestamp) {
    var datee = new Date(unixTimestamp * 1000);
    var year = datee.getFullYear();
    var month = ("0" + (datee.getMonth() + 1)).slice(-2);
    var day = ("0" + datee.getDate()).slice(-2);
    var hours = ("0" + datee.getHours()).slice(-2);
    var minutes = ("0" + datee.getMinutes()).slice(-2);

    var formattedDate = `${year}-${month}-${day}  ${hours}:${minutes}`;

    return formattedDate;
}

function StoM(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    if (minutes === 0) return `${hours} hours`;
    else return `${hours} hours and ${minutes} minutes`;
}

var gfg = [
    {
        name: "GFG Weekly - 165 [Rated Contest]",
        url: "https://www.geeksforgeeks.org/events?itm_source=geeksforgeeks&itm_medium=main_header&itm_campaign=contests",
        date: "2024-07-28 19:00",
    },
    {
        name: "GFG Weekly - 166 [Rated Contest]",
        url: "https://www.geeksforgeeks.org/events?itm_source=geeksforgeeks&itm_medium=main_header&itm_campaign=contests",
        date: "2024-08-04 19:00",
    },
    {
        name: "GFG Weekly - 167 [Rated Contest]",
        url: "https://www.geeksforgeeks.org/events?itm_source=geeksforgeeks&itm_medium=main_header&itm_campaign=contests",
        date: "2024-08-11 19:00",
    }
];

var chef = [
    {
        name: "START145",
        date: "2024-07-31 20:00",
        duration: "2 Hours",
        time_left: "Starts in 8 Days 5 Hours",
        url: "https://www.codechef.com/"
    },
    {
        name: "START146",
        date: "2024-08-07 20:00",
        duration: "2 Hours",
        time_left: "Starts in 8 Days 5 Hours",
        url: "https://www.codechef.com/"
    },
    {
        name: "START147",
        date: "2024-08-14 20:00",
        duration: "2 Hours",
        time_left: "Starts in 8 Days 5 Hours",
        url: "https://www.codechef.com/"
    },
    {
        name: "START148",
        date: "2024-08-21 20:00",
        duration: "2 Hours",
        time_left: "Starts in 8 Days 5 Hours",
        url: "https://www.codechef.com/"
    },
    {
        name: "START149",
        date: "2024-08-28 20:00",
        duration: "2 Hours",
        time_left: "Starts in 8 Days 5 Hours",
        url: "https://www.codechef.com/"
    }
];

var leet = [
    {
        name: "Biweekly Contest 136",
        date: "2024-07-27 20:00",
        url: "https://leetcode.com/contest/",
    }, {
        name: "Weekly Contest 408",
        date: "2024-08-03 08:00",
        url: "https://leetcode.com/contest/",
    },
];

var total = [];
function luffy() {
    setTimeout(() => {
        console.log('showing GeeksForGeeks contests only');
        var parent = document.getElementsByClassName('garp_contests')[0];
        parent.innerHTML = "";
        total = [...CFoneMonth, ...leet, ...chef, ...gfg];
        // Custom time sort function
        function time_sort(a, b) {
            return new Date(a.date || a.startTimeSeconds) - new Date(b.date || b.startTimeSeconds);
        }
        // Sort contests by date
        total.sort(time_sort);
        console.log(total);
        total.map((i, index) => {
            default_code(i, index);
        });
    }, 3000);
}
luffy();
function default_code(ele, ind) {
    var parent = document.getElementsByClassName('garp_contests')[0];
    parent.style.border = '1px solid black';
    parent.style.backdropFilter = 'blur(3px)';
    parent.style.overflowX = 'hidden';
    parent.style.overflowY = 'scroll';
    parent.style.boxShadow = 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px';

    var main_card = document.createElement('div');
    main_card.setAttribute('class', `main_card ${ind}`);

    var child = document.createElement('div');
    child.setAttribute('class', `garp_childs ${ind}`);
    // child.setAttribute('target', '_blank');

    var head = document.createElement('div');
    head.setAttribute('class', 'name_of_contest');
    head.innerHTML = "Contest Name : " + ele.name;

    var date = document.createElement('div');
    date.setAttribute('class', 'date_of_contest');
    date.innerHTML = "Date : " + (ele.date || ele.startTimeSeconds);

    child.appendChild(head);
    child.appendChild(date);

    if (ele.duration || ele.durationSeconds) {
        var html_dur = document.createElement('div');
        html_dur.setAttribute('class', 'duration_of_contest');
        html_dur.innerHTML = "Duration : " + (ele.duration || ele.durationSeconds);
        child.appendChild(html_dur);
    }

    var icn = document.createElement('div');

    if (ele.name.includes('kly Contest')) {
        icn.style.background = "url('../assets/leetcode.png')";
    } else if (ele.name.includes('START')) {
        icn.style.background = "url('../assets/codechef.png')";
    } else if (ele.name.includes('Rated Contest')) {
        icn.style.background = "url('../assets/gfg-new-logo.png')";
    } else if(ele.name.includes('Div')){
        icn.style.background = "url('../assets/cf.png')";
    }
    icn.style.width = '45px';
    icn.style.height = '45px';
    icn.style.backgroundSize = 'contain';
    icn.style.backgroundRepeat = 'no-repeat';
    icn.style.backgroundPosition = 'center';
    icn.style.position = 'absolute';
    icn.style.bottom = '10px';
    icn.style.right = '10px';

    var rotate = document.createElement('div');
    rotate.setAttribute('class', 'rotate_div');
    rotate.innerHTML = 'More';


    // Add event listener to rotate div
    rotate.addEventListener('click', function() {
        card_rotation_bro(ind);
    });

    child.appendChild(icn);
    child.append(rotate);

    var back_side = document.createElement('div');
    back_side.setAttribute('class', `back_side ${ind}`);
    var linking = document.createElement('a');
    linking.setAttribute('class', 'linking');
    var spn = document.createElement('span');
    spn.setAttribute('class' , 'icon');
    var icccn = document.createElement('i');
    icccn.setAttribute('class','fa-solid fa-angle-right');
    var spn_tw = document.createElement('span');
    spn_tw.setAttribute('class','text');
    spn_tw.innerHTML = "Visit Page";
    linking.setAttribute('target' , '_blank');
    linking.style.textDecoration = 'none';


    var timer_div = document.createElement('div');
    timer_div.setAttribute('class' , `timer_div ${ind}`);

    var still = document.createElement('div');
    still.setAttribute('class' , 'still');
    still.innerHTML = "Time left";
    back_side.appendChild(still);

    function updateCountdown() {
        var now = new Date();
        var contestDate = new Date(ele.date || ele.startTimeSeconds);
        var diff = contestDate - now;

        if (diff <= 0) {
            timer_div.innerHTML = "Contest Started";
            clearInterval(intervalId);
            return;
        }

        var hours = Math.floor(diff / (1000 * 60 * 60));
        var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((diff % (1000 * 60)) / 1000);
        timer_div.innerHTML = `${hours} : ${minutes} : ${seconds}`;
    }

    var intervalId = setInterval(updateCountdown, 1000);
    updateCountdown();

    
    back_side.appendChild(timer_div);

    // * links for every button
    if(ele.name.includes('START')){
        linking.setAttribute('href',ele.url+ele.name);
    }
    else if(ele.name.includes('kly Contest')){
        linking.setAttribute('href' , ele.url);
    }
    else if(ele.name.includes('Round')){
        linking.setAttribute('href' , 'https://codeforces.com/contests');
    }
    else if(ele.name.includes('Rated Contest')){
        linking.setAttribute('href' , ele.url);
    }
    

    var turn_back = document.createElement('div');
    turn_back.setAttribute('class', 'turn_back');
    turn_back.style.position = 'absolute';
    turn_back.style.bottom = '10';
    turn_back.style.left = '10';
    turn_back.style.cursor = 'pointer';
    turn_back.style.fontSize = '30px';
    var turn_back_icn = document.createElement('i');
    turn_back_icn.setAttribute('class', 'fa-solid fa-circle-left');
    turn_back.appendChild(turn_back_icn);

    turn_back_icn.addEventListener('click', function() {
        card_rotation_bro_two(ind);
    });

    back_side.appendChild(turn_back);

    spn.appendChild(icccn);
    linking.appendChild(spn);
    linking.appendChild(spn_tw);
    back_side.appendChild(linking);

    main_card.appendChild(child);
    main_card.appendChild(back_side);
    parent.appendChild(main_card);
}

function card_rotation_bro(ind) {
    var card = document.getElementsByClassName('main_card')[ind];
    card.style.transform = "rotateY(180deg)";
}
function card_rotation_bro_two(ind) {
    var card = document.getElementsByClassName('main_card')[ind];
    card.style.transform = "rotateY(0deg)";
}

function monkeyDdragon(contime) {

    var now = new Date();
    var contestDate = new Date(contime);
    var diff = contestDate - now;
    var hours = Math.floor(diff / (1000 * 60 * 60));
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var sec = now.getSeconds();
    return {hours , minutes , sec };
}

