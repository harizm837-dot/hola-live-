// Азтан шалгаруулах хүрдний логик
const MiniGame = {
    prizes: [0, 50, 0, 100, 5, 0, 500, 10], // Хожих боломжтой токенууд
    
    spin: function() {
        let cost = 20; // Нэг эргүүлэх үнэ
        let currentWallet = parseInt(localStorage.getItem('hola_wallet')) || 0;
        
        if (currentWallet < cost) {
            alert("Токен хүрэлцэхгүй байна!");
            return;
        }
        
        // Токен хасах
        localStorage.setItem('hola_wallet', currentWallet - cost);
        
        // Санамсаргүй хожил
        const winIndex = Math.floor(Math.random() * this.prizes.length);
        const winAmount = this.prizes[winIndex];
        
        setTimeout(() => {
            let newTotal = parseInt(localStorage.getItem('hola_wallet')) + winAmount;
            localStorage.setItem('hola_wallet', newTotal);
            alert(winAmount > 0 ? `🎉 Баяр хүргэе! ${winAmount}💎 хожлоо!` : "😥 Дараагийн удаа!");
        }, 2000);
    }
};
