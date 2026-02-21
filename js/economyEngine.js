// economyEngine.js - Эдийн засаг
const EconomyEngine = {
    getWallet: function() {
        return parseInt(localStorage.getItem('hola_wallet')) || 1500;
    },
    
    updateWallet: function(amount) {
        let current = this.getWallet();
        let updated = current + amount;
        if (updated < 0) return false; // Мөнгө хүрэхгүй бол
        
        localStorage.setItem('hola_wallet', updated);
        EventBus.emit('WALLET_UPDATED', { balance: updated });
        return true;
    },
    
    processGift: function(giftData) {
        if (this.updateWallet(-giftData.price)) {
            EventBus.emit('GIFT_SENT', giftData);
            return true;
        }
        return false;
    }
};
