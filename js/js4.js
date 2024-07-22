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


var codeforces_data = {}
fetch('https://codeforces.com/api/contest.list')
    .then(response => response.json())
    .then(data => {
        codeforces_data = data;
    })
    .catch(error => console.log(error))

// ? Creating custom contest div's
function custom_contest(){
    for (const i in codeforces_data) {
        console.log(i);
        // console.log(codeforces_data[i]);
        if (i == 'result') {
            var CFoneMonth = {};
            for(var j=0 ; j<5 ; j++){
                CFoneMonth[j] = codeforces_data[i][j];
            }
            for(var j=0 ; j<5 ; j++){
                console.log(j," = ");
                console.log(CFoneMonth[j]);
            }
        }
    }
}

// need to create dynamic elements and add-on for those divs
// neet to seperate CFoneMonth[j]----