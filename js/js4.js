document.querySelectorAll('.docker_items').forEach(item => {
    item.addEventListener('mouseover', () => {
        document.querySelectorAll('.docker_items').forEach(sibling => {
            if (sibling !== item) {
                sibling.style.transform = 'scale(0.9)';
            }
        });
        item.style.transform = 'scale(1.3)';
    });
    item.addEventListener('mouseout', () => {
        document.querySelectorAll('.docker_items').forEach(sibling => {
            sibling.style.transform = 'scale(1)';
        });
    });
});


var codeforces_data = {};
let CFoneMonth = [];

// fetch('https://codeforces.com/api/contest.list')
//     .then(response => response.json())
//     .then(data => {
//         codeforces_data = data;
//         console.log(codeforces_data);
//         let j = 0;
//         while (codeforces_data.result[j] && codeforces_data.result[j].phase === "BEFORE") {
//             CFoneMonth.push(codeforces_data.result[j]);
//             j++;
//         }
//         CFoneMonth.reverse();
//     })
//     .catch(error => console.log(error));

const proxyUrl = 'https://cors.bridged.cc/';
const targetUrl = 'https://codeforces.com/api/contest.list';

fetch(proxyUrl + targetUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('There has been a problem with your fetch operation:', error));





// Creating custom contest div's
document.querySelector('#CF').addEventListener('click', custom_CF_contest);
function custom_CF_contest() {
    console.log('hi');
    console.log(CFoneMonth);
    if (codeforces_data.result) {
        CFoneMonth.forEach(contest =>
            creatingDiv(contest)
        );
    }
}

// ? Creating custom object Div's
function creatingDiv(obj) {
    var parent = document.getElementsByClassName('garp_contests')[0];
    parent.style.border = '1px solid black';
    parent.style.backdropFilter = 'blur(3px)';
    parent.style.overflowX = 'hidden';
    parent.style.overflowY = 'scroll';

    var dateTime = unixToDateTime(obj.startTimeSeconds);
    var duration = StoM(obj.durationSeconds);

    var child = document.createElement('a');
    child.setAttribute('class', 'garp_childs');
    child.setAttribute('href', 'https://codeforces.com/contests?complete=true');
    child.setAttribute('target', '_blank');

    var head = document.createElement('div');
    head.setAttribute('class', 'name_of_contest');
    head.innerHTML = obj.name;

    var html_dur = document.createElement('div');
    html_dur.setAttribute('class', 'duration_of_contest');
    html_dur.innerHTML = duration;

    var html_date = document.createElement('div');
    html_date.setAttribute('class', 'date_of_contest');
    html_date.innerHTML = dateTime;

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

function unixToDateTime(unixTimestamp) {
    var date = new Date(unixTimestamp * 1000);
    var year = date.getFullYear();
    var month = ("0" + (date.getMonth() + 1)).slice(-2);
    var day = ("0" + date.getDate()).slice(-2);
    var hours = ("0" + date.getHours()).slice(-2);
    var minutes = ("0" + date.getMinutes()).slice(-2);
    var seconds = ("0" + date.getSeconds()).slice(-2);

    var formattedDate = `${year}-${month}-${day}`;
    var formattedTime = `${hours}:${minutes}:${seconds}`;

    return `${formattedDate} ${formattedTime}`;
}

function StoM(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    if (minutes === 0) return `${hours} hours`;
    else return `${hours} hours and ${minutes} minutes`;
}



var gfg = [
    {
        "Title": "Job-A-Thon 35 Hiring Challenge",
        "Title_URL": "https://practice.geeksforgeeks.org/contest/job-a-thon-35-hiring-challenge",
        "Like": "https://www.geeksforgeeks.org/_next/image?url=https%3A%2F%2Fmedia.geeksforgeeks.org%2Fimg-practice%2Fbanner%2Fjob-a-thon-35-hiring-challenge-1719993235-desktop.png&w=828&q=75",
        "date": "July 22, 2024",
        "City": "08:00 PM IST"
    },
    {
        "Title": "GFG Weekly - 165 [Rated Contest]",
        "Title_URL": "https://practice.geeksforgeeks.org/contest/gfg-weekly-165-rated-contest",
        "Like": "https://www.geeksforgeeks.org/_next/image?url=https%3A%2F%2Fmedia.geeksforgeeks.org%2Fimg-practice%2Fbanner%2Fgfg-weekly-165-rated-contest-1721373307-desktop.png&w=828&q=75",
        "date": "July 28, 2024",
        "City": "07:00 PM IST"
    },
    {
        "Title": "GFG Weekly - 166 [Rated Contest]",
        "Title_URL": "https://practice.geeksforgeeks.org/contest/gfg-weekly-166-rated-contest",
        "Like": "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
        "date": "August 04, 2024",
        "City": "07:00 PM IST"
    },
    {
        "Title": "GFG Weekly - 167 [Rated Contest]",
        "Title_URL": "https://practice.geeksforgeeks.org/contest/gfg-weekly-167-rated-contest",
        "Like": "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
        "date": "August 11, 2024",
        "City": "07:00 PM IST"
    },
    {
        "Title": "GFG Weekly - 164 [Rated Contest]",
        "Title_URL": "https://practice.geeksforgeeks.org/contest/gfg-weekly-164-rated-contest",
        "Like": "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
        "date": "July 21, 2024",
        "City": "07:00 PM IST"
    },
    {
        "Title": "GFG Weekly - 163 [Rated Contest]",
        "Title_URL": "https://practice.geeksforgeeks.org/contest/gfg-weekly-163-rated-contest",
        "Like": "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
        "date": "July 14, 2024",
        "City": "07:00 PM IST"
    },
    {
        "Title": "GFG Weekly - 162 [Rated Contest]",
        "Title_URL": "https://practice.geeksforgeeks.org/contest/gfg-weekly-162-rated-contest",
        "Like": "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
        "date": "July 07, 2024",
        "City": "07:00 PM IST"
    }
];


var chef = [
    {
        name: "START144C",
        full_name: "Starters 144 (Rated for All)",
        Date: "24 Jul 2024",
        Time: "Wed 20:00",
        duration: "Duration2 Hrs",
        time_left: "Starts in1 Days5 Hrs",
        url: "https://www.codechef.com/contests"
    }, {
        name: "START145C",
        full_name: "Starters 145",
        Date: "31 Jul 2024",
        Time: "Wed 20:00",
        duration: "2 Hrs",
        time_left: "Starts in8 Days5 Hrs",
        url: "https://www.codechef.com/contests"
    },
];


var leet = [
    {
        name: "Biweekly Contest 136",
        dateTime: "Saturday 8:00 PM GMT+5:30",
        URL: "https://leetcode.com/contest/",
    }, {
        name: "Weekly Contest 408",
        dateTime: "Sunday 8:00 AM GMT+5:30",
        URL: "https://leetcode.com/contest/",
    },
];
