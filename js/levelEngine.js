const LevelEngine = {
    getStats: function() {
        return JSON.parse(localStorage.getItem('hola_user_stats')) || {
            level: 1,
            exp: 0,
            nextLevelExp: 100,
            totalGiftsSent: 0
        };
    },

    // EXP нэмэх (Бэлэг илгээхэд 1 Diamond = 1 EXP, Лайв үзэхэд 1 мин = 5 EXP)
    addExp: function(amount) {
        let stats = this.getStats();
        stats.exp += amount;

        // Түвшин ахих логик
        while (stats.exp >= stats.nextLevelExp) {
            stats.exp -= stats.nextLevelExp;
            stats.level++;
            stats.nextLevelExp = Math.floor(stats.nextLevelExp * 1.5); // Дараагийн түвшин 50% хэцүү болно
            this.onLevelUp(stats.level);
        }

        localStorage.setItem('hola_user_stats', JSON.stringify(stats));
        return stats;
    },

    onLevelUp: function(newLevel) {
        alert(`🎉 БАЯР ХҮРГЭЕ! Түвшин ахилаа: ${newLevel}`);
        // Түвшин 10 хүрэхэд автоматаар Aura нээх
        if(newLevel === 10) {
            localStorage.setItem('user_aura', 'fire');
            alert("🔥 Level 10 хүрлээ! 'Fire Aura' идэвхжлээ.");
        }
    }
};
