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
