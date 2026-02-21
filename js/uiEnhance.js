// uiEnhance.js - Харагдац сайжруулах
const UIEnhance = {
    // Сүрлэг эффект үзүүлэх
    triggerGlow: function(elementId, color = '#7df9ff') {
        const el = document.getElementById(elementId);
        if(!el) return;
        el.style.boxShadow = `0 0 20px ${color}`;
        el.style.transition = 'box-shadow 0.5s ease';
        setTimeout(() => el.style.boxShadow = 'none', 2000);
    },
    
    // Салют буудуулах (app.html-д ашиглана)
    spawnParticle: function(container) {
        const p = document.createElement('div');
        p.className = 'firework'; // CSS-т тодорхойлсон байх шаардлагатай
        p.style.left = Math.random() * 100 + 'vw';
        p.style.top = Math.random() * 100 + 'vh';
        p.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        container.appendChild(p);
        setTimeout(() => p.remove(), 1000);
    }
};
