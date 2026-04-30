/* --- 1. FUNGSI UNTUK MENAMPILKAN NAMA --- */
function tampilkanNama() {
    const displayNama = document.getElementById('namaDisplay');
    const user = localStorage.getItem('namaUser');

    if (displayNama) {
        // Kalau ada data di storage, tampilin. Kalau nggak, tulis Tamu.
        displayNama.innerText = user ? user : "Tamu";
        console.log("Nama berhasil dimunculkan:", user);
    }
}

/* --- 2. FUNGSI DROPDOWN MENU --- */
function toggleMenu() {
    const menu = document.getElementById('loginMenu');
    const arrow = document.getElementById('arrowIcon');
    const wrapper = document.querySelector('.dropdown-wrapper');

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

/* --- 3. LOGIKA SAAT HALAMAN DI-LOAD --- */
document.addEventListener('DOMContentLoaded', () => {
    // Jalankan penampil nama
    tampilkanNama();

    // Logika Login
    const btnMasuk = document.getElementById('btnMasuk');
    const inputUsn = document.getElementById('usn');
    const inputPw = document.getElementById('pw');

    if (btnMasuk) {
        btnMasuk.addEventListener('click', function(e) {
            // Ambil value terbaru saat diklik
            const usnValue = inputUsn.value.trim();
            const pwValue = inputPw.value.trim();

            if (usnValue === "" || pwValue === "") {
                // STOP! Jangan pindah halaman
                e.preventDefault(); 
                
                // Kasih efek merah
                if(usnValue === "") inputUsn.style.border = "2px solid red";
                if(pwValue === "") inputPw.style.border = "2px solid red";
            } else {
                // SIMPAN NAMA KE STORAGE
                localStorage.setItem('namaUser', usnValue);
                console.log("Nama disimpan:", usnValue);
                
                // Manual redirect biar pasti jalan setelah data kesimpan
                window.location.href = "Profile.html"; 
            }
        });

        // Reset warna merah pas user mulai ngetik lagi
        inputUsn.addEventListener('input', () => inputUsn.style.border = "");
        inputPw.addEventListener('input', () => inputPw.style.border = "");
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const phoneInput = document.getElementById('Numb');

    if (phoneInput) {
        // Saat user klik atau fokus, pastiin kursor gak di belakang +62
        phoneInput.addEventListener('focus', function() {
            if (this.value === "") {
                this.value = "+62 ";
            }
        });

        phoneInput.addEventListener('input', function() {
            // Kalau user coba hapus +62, kita paksa balik lagi
            if (!this.value.startsWith('+62 ')) {
                this.value = '+62 ';
            }

            // Hanya izinkan angka setelah +62
            const prefix = '+62 ';
            const currentNum = this.value.substring(prefix.length);
            this.value = prefix + currentNum.replace(/[^0-9]/g, '');
        });

        // Biar user gak sengaja hapus pake backspace di awal
        phoneInput.addEventListener('keydown', function(e) {
            if (this.selectionStart < 4 && (e.key === 'Backspace' || e.key === 'Delete')) {
                e.preventDefault();
            }
        });
    }
});
