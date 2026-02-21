const GrowthEngine = {
    addXP: function(amount) {
        let xp = parseInt(localStorage.getItem('user_xp')) || 0;
        let level = parseInt(localStorage.getItem('user_level')) || 1;
        
        xp += amount;
        let nextLevelXP = level * 100; // Түвшин бүр 100XP-ээр ахина
        
        if (xp >= nextLevelXP) {
            level++;
            xp = 0;
            localStorage.setItem('user_level', level);
            alert(`🚀 LEVEL UP! Чиний шинэ түвшин: ${level}`);
        }
        localStorage.setItem('user_xp', xp);
    }
};

// Жишээ: Чат бичих бүрт 5 XP өгөх
// GrowthEngine.addXP(5);
