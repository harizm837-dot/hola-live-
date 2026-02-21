const AdminEngine = {
    // Үнэ болон тохиргоог хадгалах
    settings: JSON.parse(localStorage.getItem('hola_admin_settings')) || {
        diamond_price: 1, // 1 Diamond = 1 MNT (жишээ нь)
        shop_items: {
            "car": 5000,
            "rocket": 50000,
            "vip_id": 20000
        }
    },

    banUser: function(userId, minutes) {
        const banUntil = Date.now() + (minutes * 60000);
        localStorage.setItem(`ban_${userId}`, banUntil);
        EventBus.emit('USER_BANNED', { userId, minutes });
    },

    isBanned: function(userId) {
        const banUntil = localStorage.getItem(`ban_${userId}`);
        return banUntil && Date.now() < banUntil;
    },

    updatePrice: function(item, newPrice) {
        this.settings.shop_items[item] = newPrice;
        localStorage.setItem('hola_admin_settings', JSON.stringify(this.settings));
    }
};
