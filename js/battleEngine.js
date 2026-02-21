// battleEngine.js - PK Battle Logic
const BattleEngine = {
    isActive: false,
    timer: 300, // 5 минут (300 секунд)
    scores: { left: 0, right: 0 },

    startBattle: function() {
        this.isActive = true;
        this.scores = { left: 0, right: 0 };
        EventBus.emit('BATTLE_STARTED', { duration: this.timer });
        
        // Цаг ажиллуулах
        let countdown = setInterval(() => {
            this.timer--;
            if (this.timer <= 0) {
                clearInterval(countdown);
                this.endBattle();
            }
        }, 1000);
    },

    addScore: function(side, amount) {
        if (!this.isActive) return;
        this.scores[side] += amount;
        
        // Онооны харьцааг тооцоолох (Progress Bar-д зориулж)
        let total = this.scores.left + this.scores.right;
        let leftPercent = total === 0 ? 50 : (this.scores.left / total) * 100;
        
        EventBus.emit('BATTLE_SCORE_UPDATED', {
            scores: this.scores,
            percent: leftPercent
        });
    },

    endBattle: function() {
        this.isActive = false;
        let winner = this.scores.left > this.scores.right ? 'LEFT' : 'RIGHT';
        if(this.scores.left === this.scores.right) winner = 'DRAW';
        
        EventBus.emit('BATTLE_ENDED', { winner: winner, finalScores: this.scores });
    }
};
