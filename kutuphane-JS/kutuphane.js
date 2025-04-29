let kitaplar = [];

let raflar = [];
for (let kat = 1; kat <= 5; kat++) {
    let satir = [];
    for (let raf = 1; raf <= 5; raf++) {
        let kod = `${kat}.${raf}.RAF`;
        satir.push({ kod: kod, goster: false });
    }
    raflar.push(satir);
}

function rafOlustur() {
    console.clear();
    let satir = "";
    for (let i = 0; i < raflar.length; i++) {
        for (let j = 0; j < 5; j++) {
            satir += "|" + (raflar[i][j].goster ? raflar[i][j].kod : "---") + "|";
        }
        console.log(satir);
        console.log("-------------------------");
        satir = "";
    }
}

function kitapEkle(isim, yazar, rafKodu) {
    kitaplar.push({ isim: isim, yazar: yazar, raf: rafKodu });
}

function kodBul(kitapIsmi) {
    let rafKod = null;
    kitaplar.forEach(function (kitap) {
        if (kitap.isim.toUpperCase().includes(kitapIsmi.toUpperCase())) {
            rafKod = kitap.raf;
        }
    });
    return rafKod;
}

function raftaGoster(rafKodu) {
    for (let i = 0; i < raflar.length; i++) {
        for (let j = 0; j < 5; j++) {
            if (raflar[i][j].kod === rafKodu) {
                raflar[i][j].goster = true;
                return;
            }
        }
    }
}

function menu() {
    let secim;
    do {
        secim = prompt("1- Kitap Ekle\n2- Kitap Ara\n0- Çıkış");
        if (secim === "1") {
            let isim = prompt("Kitap ismini girin:");
            let yazar = prompt("Yazar ismini girin:");
            let rafKodu = prompt("Raf kodunu girin (ör: 3.2.RAF):");
            kitapEkle(isim, yazar, rafKodu);
            alert("Kitap eklendi.");
        } else if (secim === "2") {
            let isim = prompt("Aranacak kitabın ismini girin:");
            let rafKod = kodBul(isim);
            if (rafKod != null) {
                raftaGoster(rafKod);
                rafOlustur();
            } else {
                alert("Kitap bulunamadı.");
            }
        }
    } while (secim !== "0");
}

rafOlustur();
menu();
