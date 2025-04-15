// Toggle "Baca Selengkapnya" di Blog
document.querySelectorAll('.toggle-content').forEach(btn => {
  btn.addEventListener('click', () => {
    const more = btn.parentElement.nextElementSibling;
    if (more.style.display === 'none') {
      more.style.display = 'block';
      btn.textContent = 'Sembunyikan';
    } else {
      more.style.display = 'none';
      btn.textContent = 'Baca Selengkapnya';
    }
  });
});

// Form Contact
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('response').textContent = 'Terima kasih, pesan Anda telah terkirim!';
  this.reset();
});
