export default function hakkinda(){
    // ******************* sayfa varmı kontrol *******************
    if(document.querySelector(".hakkinda")){
        return
    }
    // ******************* document seç ********************
    document.querySelector(".content").classList.add("hakkinda")
    const classHakkinda = document.querySelector(".hakkinda") 
    // *********************** documnet Oluştur ***************
    const h1Hakkımızda = document.createElement("h1")
    const p1 = document.createElement("p")
    const p2 = document.createElement("p")
    const p3 = document.createElement("p")
    const p4 = document.createElement("p")
    
    const div = document.createElement("div")

    // ******************* document text *****************
    h1Hakkımızda.textContent = "Biz Kimiz?"
    p1.textContent = "Biz, kaliteli koltuğu ulaşılabilir kılma hedefiyle yola çıkan bir üretim ve satış ekibiyiz. Mobilya sektöründe yıllardır süregelen yüksek fiyatlara ve gereksiz aracı maliyetlerine karşı çözüm üretiyor; koltuklarımızı doğrudan üretimden halka sunuyoruz. Amacımız, herkesin hak ettiği konforu uygun fiyatlarla evine taşıyabilmesi."
    p2.textContent = "Ürünlerimizin her birinde sağlamlık, estetik ve rahatlığı ön planda tutuyoruz. “Uygun fiyat = düşük kalite” algısını yıkıyor, dayanıklı ve şık koltukları uzun yıllar güvenle kullanabileceğiniz şekilde üretiyoruz. Müşteri memnuniyetini her zaman ilk sırada tutuyor; dürüstlük, şeffaflık ve güvenilir hizmet anlayışıyla hareket ediyoruz."
    p3.textContent = "Biliyoruz ki gerçek kalite, sadece ürünle değil, hizmetle de tamamlanır. Bu yüzden satış öncesinden satış sonrasına kadar tüm süreçlerde yanınızda olmaya ve memnuniyetinizi garanti altına almaya söz veriyoruz."
    p4.textContent = "Biz, koltuğunuzdan çok daha fazlasını sunuyoruz: Uygun fiyatla güven, kalite ve konfor."

    // ****************** doma ekle ******************
    classHakkinda.appendChild(div)
    div.appendChild(h1Hakkımızda)
    div.appendChild(p1)
    div.appendChild(p2)
    div.appendChild(p3)
    div.appendChild(p4)

    // **************** sayfa genişledikçe küçülen yazılar ****************
    function dinamikGenislik(){
        if(window.innerWidth > 750){
            const genislikYakala = window.innerWidth;
            const yeniGenislik = Math.max(700, 1100 - genislikYakala) + "px";
            div.style.width = yeniGenislik; 
        }else{div.style.width = "80vw"}

        
  
    }
    dinamikGenislik()
    window.addEventListener("resize", dinamikGenislik)
    
}