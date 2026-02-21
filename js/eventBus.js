// eventBus.js - Гүүр
const EventBus = {
    // Мэдээлэл илгээх (Send)
    emit: function(type, data) {
        window.parent.postMessage({ type, ...data }, '*');
    },
    
    // Мэдээлэл хүлээн авах (Listen)
    listen: function(callback) {
        window.addEventListener('message', (event) => {
            callback(event.data);
        });
    }
};
