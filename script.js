// 1. First Popup
function firstPopup() {
    alert("Hai Janu, i made this for you");
    nextPage(2);
}

function nextPage(page) {
    document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
    document.getElementById('page' + page).classList.add('active');
    
    if(page === 3) startList();
}

// 2. Riddle Game
function checkAnswer() {
    const ans = document.getElementById('gameInput').value.toLowerCase();
    if(ans !== "") {
        alert("WKWKKW salah! Jawabannya: Karena kalo tulisannya 'ENTAR', programnya ga jalan-jalan, malah nungguin... AWOKWOWK");
        nextPage(3);
    } else {
        alert("Isi dulu donggg jawabannya!");
    }
}

// 3. The List (Fixed Grammar)
const reasons = [
    "Your eyes", "Your smile", "Your laugh", "Your voice", "Your personality", 
    "Your jokes", "Your pineapple hair AWOKWOWK", "Your kindness", "Your existence", 
    "I feel comfortable around you", "You are perfect", "The way you talk a lot", 
    "You are kind", "You are warm-hearted", "You're so lovely", "You're sOo charming", 
    "You look good in everything you wear", "You're nice to everyone", "You're so attractive", 
    "You're insanely stunning", "You are my happy pill", "How supportive you are", 
    "You're a good listener", "You make me feel safe", "You always try your best", 
    "You never judge me", "You're just different", "You're a perfect human being", 
    "You make me laugh", "You're taller than me", "Your thick eyebrows", 
    "You're younger than me :p", "You mean a lot to me", "You're my favorite person", 
    "You're my support system", "You bring joy to my life", "How caring you are to me", 
    "You give me the best advice", "You compliment my skills", "You appreciate my effort", 
    "You turned me into a better person", "You taught me a lot of things", 
    "You always listen", "You always learn from your mistakes", "You are special for me", 
    "You made me realize what 'love' actually is", "He is JANUAR", 
    "I love everything about you", "I love being around you", "I love you."
];

function startList() {
    const container = document.getElementById('list-container');
    let i = 0;
    const interval = setInterval(() => {
        if(i < reasons.length) {
            const item = document.createElement('div');
            item.className = 'list-item';
            item.innerHTML = `<b>${i+1}.</b> ${reasons[i]}`;
            container.appendChild(item);
            container.scrollTop = container.scrollHeight;
            i++;
        } else {
            clearInterval(interval);
            document.getElementById('nextTo4').style.display = 'inline-block';
        }
    }, 500);
}

// 4. Moving No Button
const noBtn = document.getElementById('noBtn');
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = 'fixed';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
});

// 5. Final Letter & Music
function goToLetter() {
    const audio = document.getElementById('bgMusic');
    audio.play(); // Play White Ferrari
    
    const letterText = "Happy Birthday Januar!! Di hari spesial ini, aku ingin kamu tahu sebanyak apa aku cinta sama kamu xixixixixi. Aku seneng banget kamu bisa terus bareng aku sejak kita pertama kali ketemu sampai sekarang. Tahun ini umur kamu 16 tahun yaa kicikuu! Di umurmu yang baru ini, semoga banyak hal-hal bahagia yang dateng ke kamu. Sehat terus dan panjang umur ya buat pacar aku ini. Mulai sekarang, yuk lebih serius lagi buat masa depan biar kamu makin matang ke depannya. Semangat belajarnya di semester 2 ini, tentuin tujuan kamu nanti mau gimana, aku yakin banget kamu pasti bisa ngelewatin itu semua. Aku bakal nemenin setiap proses pertumbuhan kamu sampai kapanpun. Aku juga bangga banget sama perubahan kamu dari awal kita ketemu sampai sekarang yang jadi jauh lebih positif. Aku sebenarnya bingung mau bikin surat gimana hsuhwhsh, so thank you for being strong, for being alive, and for never giving up when everything feels like it's not in place anymore. Without your strength, we wouldn't be here today. I love you!";
    
    document.getElementById('finalLetter').innerText = letterText;
    nextPage(5);
}