// Contador crescente
const countdownEl = document.getElementById("countdown");
const startDate = new Date("2023-11-18T00:00:00");

function updateCountdown() {
  const now = new Date();
  const diff = now - startDate;

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30.436875); // Average month length
  const years = Math.floor(days / 365.25); // Account for leap years

  const remainingMonths = Math.floor(months % 12);
  const remainingDays = Math.floor(days % 30.436875);
  const remainingHours = hours % 24;
  const remainingMinutes = minutes % 60;
  const remainingSeconds = seconds % 60;

  countdownEl.textContent = `${years} ano, ${remainingMonths} meses, ${remainingDays} dias, ${remainingHours} horas, ${remainingMinutes} minutos e ${remainingSeconds} segundos juntos ❤️`;
}

setInterval(updateCountdown, 1000);
updateCountdown();


/*/ Time together counter
function updateTimeTogether() {
  const startDate = new Date('2023-11-18T00:00:00');
  const now = new Date();
  const diff = now - startDate;

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30.436875); // Average month length
  const years = Math.floor(days / 365.25); // Account for leap years

  const remainingMonths = Math.floor(months % 12);
  const remainingDays = Math.floor(days % 30.436875);
  const remainingHours = hours % 24;
  const remainingMinutes = minutes % 60;
  const remainingSeconds = seconds % 60;

  document.getElementById('time-together').textContent = 
    `${years} ano, ${remainingMonths} meses, ${remainingDays} dias, ${remainingHours} horas, ${remainingMinutes} minutos e ${remainingSeconds} segundos`;
}

setInterval(updateTimeTogether, 1000);
updateTimeTogether();*/



// Slideshow
const images = [
  'imagens/foto1.jpeg',
  'imagens/foto2.jpeg',
  'imagens/foto3.jpeg',
  'imagens/foto4.jpeg',
  'imagens/foto6.jpeg',
  'imagens/foto7.jpeg',
  'imagens/foto8.jpeg',
  'imagens/foto9.jpeg',
  'imagens/foto10.jpeg',
  'imagens/foto11.jpeg',
  'imagens/foto12.jpeg',
];

let currentImageIndex = 0;
const slideshowImage = document.getElementById('slideshow');

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  slideshowImage.style.opacity = '0';
  
  setTimeout(() => {
    slideshowImage.src = images[currentImageIndex];
    slideshowImage.style.opacity = '1';
  }, 500);
}

// Trocar imagem a cada 4 segundos
setInterval(nextImage, 4000);

// Music player
//document.getElementById('play-music').addEventListener('click', function() {
 // const frame = document.getElementById('music-frame');
 // const button = document.getElementById('play-music');
  
 // if (frame.style.display === 'none') {
 //   frame.style.display = 'block';
 //   button.textContent = '♫ Fechar Música';
 // } else {
 //   frame.style.display = 'none';
 //   button.textContent = '♫ Nossa Música';
 // }
//});

// Chuva de emojis
function createEmoji() {
  const emoji = document.createElement('span');
  emoji.className = 'emoji';
  emoji.textContent = Math.random() > 0.5 ? '💖' : '💗';
  
  // Posição horizontal aleatória
  emoji.style.left = Math.random() * 100 + '%';
  
  // Duração da queda aleatória
  const duration = Math.random() * 3 + 2; // 2-5 segundos
  emoji.style.animation = `fall ${duration}s linear`;
  
  document.querySelector('.emoji-container').appendChild(emoji);
  
  // Remove o emoji depois que a animação terminar
  setTimeout(() => {
    emoji.remove();
  }, duration * 1000);
}

// Cria novos emojis em intervalos regulares
setInterval(createEmoji, 300); // Cria um novo emoji a cada 300ms

// Cria alguns emojis iniciais
for(let i = 0; i < 10; i++) {
  setTimeout(createEmoji, i * 300);
}



// Heart animation
const link = document.querySelector('.link');
const heart = document.querySelector('.heart-shape');

link.addEventListener('mouseenter', () => {
  heart.style.fill = 'rgba(255, 105, 180, 0.3)';
  heart.style.transform = 'scale(1.1)';
});

link.addEventListener('mouseleave', () => {
  heart.style.fill = 'rgba(255, 255, 255, 0.1)';
  heart.style.transform = 'scale(1)';
});

link.addEventListener('click', () => {
  heart.style.fill = 'rgba(255, 105, 180, 0.5)';
  setTimeout(() => {
    heart.style.fill = 'rgba(255, 255, 255, 0.1)';
  }, 300);
});

// Counter heart color animation
const counterHeart = document.querySelector('.counter-heart-shape');
const colors = [
  'rgba(255, 0, 0, 0.3)',     // red
   // light pink
];

let colorIndex = 0;
let scale = 1;
const scaleAmount = 0.1; // How much the heart will grow/shrink

function animateHearts() {
  // Animate counter heart
  colorIndex = (colorIndex + 1) % colors.length;
  counterHeart.style.fill = colors[colorIndex];
  scale = scale === 1 ? 1 + scaleAmount : 1;
  counterHeart.style.transform = `scale(${scale})`;
  
  // Animate top heart
  heart.style.transform = `scale(${scale})`;
}

// Animate hearts every 1 second
setInterval(animateHearts, 1000);

