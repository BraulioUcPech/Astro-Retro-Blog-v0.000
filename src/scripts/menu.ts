document.querySelector('.hamburger')?.addEventListener('click', (event: MouseEvent) => {
    const navLinks = document.querySelector('.nav-links') as HTMLDivElement | null;

    if (navLinks) {
        navLinks.classList.toggle('expanded');
    }
});



