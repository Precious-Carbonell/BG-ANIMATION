const revealAreas = document.querySelectorAll('.reveal-area');

document.addEventListener('mousemove', function(e) {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  revealAreas.forEach(revealArea => {
    const revealAreaX = revealArea.getBoundingClientRect().left + (revealArea.offsetWidth / 2);
    const revealAreaY = revealArea.getBoundingClientRect().top + (revealArea.offsetHeight / 2);
    const distance = Math.sqrt(Math.pow((mouseX - revealAreaX), 2) + Math.pow((mouseY - revealAreaY), 2));

    if (distance < 150) { // Adjust the radius as needed
      revealArea.style.backgroundColor = 'rgba(255, 0, 0, 0)';
    } else {
      revealArea.style.backgroundColor = 'rgba(255, 0, 0, 0.5)';
    }
  });
});
