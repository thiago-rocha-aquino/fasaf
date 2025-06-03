 // Create floating background hearts
function createBackgroundHeart() {
    const heart = document.createElement('div');
    heart.className = 'bg-heart';
    heart.innerHTML = ['❤️', '💕', '💖', '💝'][Math.floor(Math.random() * 4)];
    heart.style.cssText = `
        position: absolute;
        font-size: ${Math.random() * 20 + 10}px;
        opacity: ${Math.random() * 0.1 + 0.05};
        left: ${Math.random() * 100}%;
        top: 100%;
        animation: float-up ${Math.random() * 10 + 10}s linear;
        z-index: 0;
    `;
    
    document.querySelector('.floating-hearts').appendChild(heart);
    
    heart.addEventListener('animationend', () => heart.remove());
}

// Create background hearts periodically
setInterval(createBackgroundHeart, 2000);

// Create explosion hearts
function createHeart(x, y) {
    const heart = document.createElement('div');
    heart.className = 'heart-explosion';
    heart.textContent = ['❤️', '💕', '💖', '💝', '💗'][Math.floor(Math.random() * 5)];
    
    // Create a burst pattern
    const angle = Math.random() * 360;
    const distance = 100 + Math.random() * 200;
    
    const tx = Math.cos(angle * Math.PI / 180) * distance;
    const ty = Math.sin(angle * Math.PI / 180) * distance;
    
    heart.style.setProperty('--tx', `${tx}px`);
    heart.style.setProperty('--ty', `${ty}px`);
    heart.style.setProperty('--rotate', `${Math.random() * 720 - 360}deg`);
    
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    
    document.body.appendChild(heart);
    heart.addEventListener('animationend', () => heart.remove());
}

function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.innerHTML = '✨';
    sparkle.style.cssText = `
        position: absolute;
        font-size: 20px;
        left: ${x}px;
        top: ${y}px;
        pointer-events: none;
        animation: sparkle 1s ease-out forwards;
        z-index: 1001;
    `;
    
    // Add sparkle animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes sparkle {
            0% { transform: scale(0) rotate(0deg); opacity: 1; }
            100% { transform: scale(1.5) rotate(180deg); opacity: 0; }
        }
    `;
    if (!document.querySelector('style[data-sparkle]')) {
        style.setAttribute('data-sparkle', 'true');
        document.head.appendChild(style);
    }
    
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 1000);
}

function startHeartExplosion() {
    const gift = document.querySelector('.gift-3d');
    const rect = gift.getBoundingClientRect();
    
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Create multiple waves of hearts
    const waves = 3;
    const heartsPerWave = 20;
    
    for (let wave = 0; wave < waves; wave++) {
        setTimeout(() => {
            for (let i = 0; i < heartsPerWave; i++) {
                setTimeout(() => {
                    createHeart(centerX, centerY);
                    
                    // Add sparkles occasionally
                    if (Math.random() > 0.7) {
                        createSparkle(
                            centerX + (Math.random() - 0.5) * 100,
                            centerY + (Math.random() - 0.5) * 100
                        );
                    }
                }, i * 30);
            }
        }, wave * 200);
    }
}

function openGift() {
    const gift = document.querySelector('.gift-3d');
    const container = document.querySelector('.gift-container');
    
    // Disable further clicks
    container.onclick = null;
    
    // Add opening class for animation
    gift.classList.add('opening');
    
    // Play a subtle sound effect (optional)
    try {
        const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZijYIG2m98OScTgwOUann7blmFgU7k9n1unEiBC13yO/eizEIHWq+8+OWT');
        audio.volume = 0.3;
        audio.play().catch(() => {}); // Ignore if audio fails
    } catch (e) {}
    
    // Start heart explosion after a short delay
    setTimeout(() => {
        startHeartExplosion();
    }, 400);
    
    // Create floating text
    setTimeout(() => {
        const loveText = document.createElement('div');
        loveText.innerHTML = 'Te Amo! ❤️';
        loveText.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 48px;
            color: white;
            font-weight: bold;
            text-shadow: 0 0 20px rgba(255, 71, 87, 0.8);
            z-index: 2000;
            animation: love-text 2s ease-out forwards;
            pointer-events: none;
        `;
        
        // Add love text animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes love-text {
                0% { transform: translate(-50%, -50%) scale(0) rotate(-180deg); opacity: 0; }
                50% { transform: translate(-50%, -50%) scale(1.2) rotate(5deg); opacity: 1; }
                100% { transform: translate(-50%, -50%) scale(1) rotate(0deg); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
        document.body.appendChild(loveText);
        
        setTimeout(() => loveText.remove(), 2000);
    }, 600);
    
    // Fade out the entire container
    setTimeout(() => {
        container.style.transition = 'opacity 1s ease-out';
        container.style.opacity = '0';
    }, 2000);
    
    // Redirect to main page
    setTimeout(() => {
        window.location.href = 'index_principal.html';
    }, 3000);
}

// Add mouse move effect
document.addEventListener('mousemove', (e) => {
    const gift = document.querySelector('.gift-3d');
    if (!gift || gift.classList.contains('opening')) return;
    
    const rect = gift.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const angleY = (e.clientX - centerX) / 10;
    const angleX = -(e.clientY - centerY) / 10;
    
    gift.style.transform = `rotateX(${-20 + angleX}deg) rotateY(${30 + angleY}deg)`;
});

// Reset rotation when mouse leaves
document.addEventListener('mouseleave', () => {
    const gift = document.querySelector('.gift-3d');
    if (!gift || gift.classList.contains('opening')) return;
    
    gift.style.transform = 'rotateX(-20deg) rotateY(30deg)';
});