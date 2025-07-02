document.addEventListener('DOMContentLoaded', function() {
    // Initialiser AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });

    // Compte à rebours
   // Version garantie fonctionnelle
function initCountdown() {
  // 1. Configuration de la date cible (4 juillet 2025 à 14h00)
  const targetDate = new Date();
  targetDate.setFullYear(2025, 6, 4); // Juillet = mois 6 (0-index)
  targetDate.setHours(14, 0, 0, 0); // 14h00

  // 2. Récupération des éléments DOM
  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');
  const countdownEl = document.getElementById('countdown');

  // 3. Fonction principale de mise à jour
  function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;

    // Si la date est passée
    if (diff <= 0) {
      countdownEl.innerHTML = `
        <div class="countdown-ended">
          La conférence a commencé !<br>
          Rendez-vous à Yeumbeul
        </div>
      `;
      clearInterval(interval);
      return;
    }

    // Calcul des unités de temps
    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    // Mise à jour de l'affichage
    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
  }

  // 4. Démarrer immédiatement et toutes les secondes
  updateCountdown(); // Premier appel
  const interval = setInterval(updateCountdown, 1000);
}

// 5. Lancement sécurisé après chargement complet
if (document.readyState === 'complete') {
  initCountdown();
} else {
  window.addEventListener('load', initCountdown);
}

    // Gestion de la vidéo de fond pour mobile
    function handleVideo() {
        const video = document.getElementById('hero-video');
        if (window.innerWidth < 768) {
            video.pause();
            document.querySelector('.hero').style.backgroundImage = 'url("mobile-fallback.jpg")';
        } else {
            video.play();
        }
    }

    window.addEventListener('resize', handleVideo);
    handleVideo();

    // Lightbox pour la galerie
    const galleryImages = document.querySelectorAll('.gallery img');
    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            const lightbox = document.createElement('div');
            lightbox.style.position = 'fixed';
            lightbox.style.top = '0';
            lightbox.style.left = '0';
            lightbox.style.width = '100%';
            lightbox.style.height = '100%';
            lightbox.style.backgroundColor = 'rgba(0,0,0,0.9)';
            lightbox.style.display = 'flex';
            lightbox.style.alignItems = 'center';
            lightbox.style.justifyContent = 'center';
            lightbox.style.zIndex = '1000';
            lightbox.style.cursor = 'zoom-out';

            const lightboxImg = document.createElement('img');
            lightboxImg.src = this.src;
            lightboxImg.style.maxWidth = '90%';
            lightboxImg.style.maxHeight = '90%';
            lightboxImg.style.objectFit = 'contain';

            lightbox.appendChild(lightboxImg);
            document.body.appendChild(lightbox);

            lightbox.addEventListener('click', function() {
                document.body.removeChild(lightbox);
            });
        });
    });
});


// Pour tester dans 1 minute :
const targetDate = new Date(Date.now() + 60000);