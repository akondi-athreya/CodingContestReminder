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
