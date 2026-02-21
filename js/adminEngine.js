const AdminEngine = {
    settings: JSON.parse(localStorage.getItem('hola_admin_settings')) || {
        isGhostMode: false,
        diamond_rain_active: false
    },

    // Ghost Mode toggle
    setGhostMode: function(status) {
        this.settings.isGhostMode = status;
        localStorage.setItem('hola_admin_settings', JSON.stringify(this.settings));
    },

    // Silence user (1 minute)
    silenceUser: function(userId) {
        const silenceUntil = Date.now() + 60000;
        localStorage.setItem(`silence_${userId}`, silenceUntil);
        return silenceUntil;
    },

    isSilenced: function(userId) {
        const until = localStorage.getItem(`silence_${userId}`);
        return until && Date.now() < parseInt(until);
    },

    banUser: function(userId, mins) {
        const until = Date.now() + (mins * 60000);
        localStorage.setItem(`ban_${userId}`, until);
    }
};
