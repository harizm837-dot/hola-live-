// economyEngine.js - Эдийн засгийн систем
const EconomyEngine = {
    getWallet: function() {
        return parseInt(localStorage.getItem('hola_wallet')) || 1500;
    },

    updateWallet: function(amount) {
        let current = this.getWallet();
        let updated = current + amount;
        if (updated < 0) return false; 
        
        localStorage.setItem('hola_wallet', updated);
        // app.html-рүү мэдээлэх
        if(window.parent) window.parent.postMessage({ type: 'WALLET_UPDATED', balance: updated }, '*');
        return true;
    },

    // Унаа худалдаж авах (7, 14, 30 хоногоор)
    buyVehicle: function(vehicleType, price, days) {
        if(this.updateWallet(-price)) {
            const expireDate = Date.now() + (days * 24 * 60 * 60 * 1000);
            const vehicleData = { type: vehicleType, expire: expireDate };
            localStorage.setItem('user_vehicle', JSON.stringify(vehicleData));
            return true;
        }
        return false;
    },

    processGift: function(giftData) {
        if (this.updateWallet(-giftData.price)) {
            if(window.parent) window.parent.postMessage({ type: 'GIFT_SENT', ...giftData }, '*');
            return true;
        }
        return false;
    }
};
