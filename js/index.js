function inject() {
  alert('Page is loaded');
  document.getElementById('frame').textContent = 'Jenn';
}

document.getElementById("press").addEventListener("click", inject);