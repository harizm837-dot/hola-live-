// growthEngine.js - Түвшин & XP
const GrowthEngine = {
    addXP: function(amount) {
        let xp = parseInt(localStorage.getItem('user_xp')) || 0;
        let level = parseInt(localStorage.getItem('user_level')) || 1;
        
        xp += amount;
        let nextLevelXP = level * 100; // Түвшин бүрт 100 XP шаардана
        
        if (xp >= nextLevelXP) {
            level++;
            xp = 0;
            localStorage.setItem('user_level', level);
            EventBus.emit('LEVEL_UP', { level: level });
        }
        localStorage.setItem('user_xp', xp);
    }
};
