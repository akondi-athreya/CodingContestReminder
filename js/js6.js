document.addEventListener('DOMContentLoaded', function() {
    const teams = document.querySelectorAll('.team');

    teams.forEach(team => {
        const card = team.querySelector('.card');

        team.addEventListener('mouseenter', () => {
           
            gsap.to(card, {
                top: '-300%',
                left: '-80%',
				borderRadius: '10px',
                width: '220px',  // 300% of the initial size
                height: '220px', // 300% of the initial size
                opacity: 1,
                duration: 0.3,
                ease: "power1.inOut"
            });
        });

        team.addEventListener('mouseleave', () => {
            gsap.to(card, {
                top: '0%',
                left: '0',
                transform: 'translateX(0)',
                width: '100%',
                height: '100%',
                opacity: 0,
                duration: 0.3,
                ease: "power1.inOut"
            });
        });
    });
});



const gradientBox = document.getElementsByClassName("about")[0];

let color1 = '#FF0000'; // Red
let color2 = '#FFA500'; // Orange
let color3 = '#FFFF00'; // Yellow
let color4 = '#008000'; // Green
let color5 = '#0000FF'; // Blue
let color6 = '#800080'; // Purple

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeGradient() {
    color1 = getRandomColor();
    color2 = getRandomColor();
    color3 = getRandomColor();
    color4 = getRandomColor();
    color5 = getRandomColor();
    color6 = getRandomColor();
    
    const gradient = `linear-gradient(to top right, ${color1}, ${color2}, ${color3}, ${color4}, ${color5}, ${color6})`;
    gradientBox.style.background = gradient;
}

setInterval(changeGradient, 2000);
