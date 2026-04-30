function toggleMenu() {
    const menu = document.getElementById('loginMenu');
    const arrow = document.getElementById('arrowIcon');
    const wrapper = document.querySelector('.dropdown-wrapper');

    // Pengaman: Cek apakah semua elemen ada di halaman ini
    if (!menu || !arrow || !wrapper) {
        console.warn("Elemen dropdown tidak ditemukan di halaman ini.");
        return; 
    }

    menu.classList.toggle('show');
    wrapper.classList.toggle('open');

    if (menu.classList.contains('show')) {
        arrow.style.transform = 'rotate(180deg)';
    } else {
        arrow.style.transform = 'rotate(0deg)';
    }
}
