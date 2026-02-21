const HolaApp = {
    // Баланс болон VIP статусыг нэгдсэн нэг удирдлагад оруулах
    state: {
        getWallet: () => parseInt(localStorage.getItem('hola_wallet')) || 1500,
        setWallet: (val) => {
            localStorage.setItem('hola_wallet', val);
            // Хэрэв app.html дээр байгаа бол балансыг шууд шинэчилнэ
            const balDisp = document.getElementById('balance');
            if(balDisp) balDisp.innerText = val.toLocaleString();
        },
        isVIP: () => localStorage.getItem('is_vip') === 'true',
        setVIP: (status) => localStorage.setItem('is_vip', status)
    },

    // Орох эффектүүдийг идэвхжүүлэх
    triggerEntry: (effectType) => {
        const overlay = window.parent.document.getElementById('effectOverlay');
        if(!overlay) return;

        overlay.innerHTML = `<div class="entry-anim ${effectType}">
            <h1>${effectType.toUpperCase()} ENTRY!</h1>
        </div>`;
        
        setTimeout(() => overlay.innerHTML = '', 4000);
    }
};
