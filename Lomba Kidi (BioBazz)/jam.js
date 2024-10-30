function updateClock() {
  const now = new Date();
  const hours = now.getHours() % 12 || 12; // Format 12-jam
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const amPm = now.getHours() >= 12 ? 'PM' : 'AM';

  document.querySelector('.hour_num').textContent = hours;
  document.querySelector('.min_num').textContent = minutes;
  document.querySelector('.sec_num').textContent = seconds;
  document.querySelector('.am_pm').textContent = amPm;
}

setInterval(updateClock, 1000);
updateClock(); // Inisialisasi pada halaman dimuat
