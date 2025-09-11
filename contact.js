const contactForm = document.getElementById('contactForm');
const toast = document.getElementById('toast');

contactForm.addEventListener('submit', function(event) {
  event.preventDefault(); // mencegah reload halaman

  // Ambil nilai input
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Validasi sederhana
  if (!name || !email || !message) {
    alert('Harap lengkapi semua field sebelum mengirim pesan.');
    return;
  }

  // Menampilkan toast
  toast.classList.remove('hidden');
  toast.classList.add('flex');

  // Sembunyikan toast setelah 2 detik
  setTimeout(() => {
    toast.classList.add('hidden');
    toast.classList.remove('flex');
  }, 2000);

  // Ganti form menjadi teks ucapan terima kasih setelah 0.5 detik
  setTimeout(() => {
    contactForm.innerHTML = `
      <p class="text-lg text-gray-900 font-semibold">
        Terima kasih, pesan Anda telah terkirim!
      </p>
    `;
  }, 500);
});
