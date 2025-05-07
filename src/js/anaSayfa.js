export default class{
    constructor(){
        document.querySelector(".content").classList.add("anaSayfa")
        this.classAnaSayfa = document.querySelector(".anaSayfa")


        
        this.icerik = [
            {class: "text1",baslik: "Doğrudan Üreticiden, Aracısız Fiyatlarla", text: "Biz, koltuğunuzu sizin için üretiyoruz; araya kimseyi sokmadan doğrudan satış yapıyoruz. Böylece piyasadaki yüksek fiyatlara meydan okuyor, kaliteyi en uygun maliyetle sunuyoruz."}
            ,{class: "text2", baslik:"Kalitede Taviz Yok, Fiyatta İddialıyız", text: "Her koltuğumuz, uzun ömürlü kullanım ve konfor için titizlikle üretilir. Uygun fiyat politikamız asla kaliteden ödün verdiğimiz anlamına gelmez. Amacımız, bütçenize en iyi yatırımı yaptırmak."}
            ,{class: "text3", baslik: "Herkes İçin Erişilebilir Konfor", text: "Koltuk almak lüks değil, ihtiyaçtır. Biz, konforu herkes için erişilebilir hale getirmek istiyoruz. Her eve yakışan, sağlam ve şık koltukları ulaştırmak bizim işimiz."}
            ,{class: "text4", baslik: "Şeffaf, Güvenilir Ticaret", text: "Fiyat politikamız nettir; gizli maliyetler yok, kafa karıştırıcı kampanyalar yok. Şeffaflık ilkemizdir; ilk günden beri güven inşa etmeyi öncelik olarak görüyoruz."}
            ,{class: "text5", baslik: "Sizin İçin Üretiyoruz", text: "Katalogdan seçip geçmiyoruz; ihtiyaçlarınıza uygun, zevkinize hitap eden koltukları birlikte planlıyoruz. Kişiye özel çözümlerle sıradanlığı kırıyoruz."}
        ]
        this.sayfaIcerigi()

       
    }

    sayfaIcerigi(){
        this.icerik.forEach((obj,sayi)=>{
            const div1 = document.createElement("div")
            const div2 = document.createElement("div")
            const div3 = document.createElement("div")
            const h1 = document.createElement("h1")
            const p = document.createElement("p")
            const h3 = document.createElement("h3")
            h3.textContent = "<= Tıkla!"
            h1.textContent = obj.baslik
            p.textContent = obj.text
            div3.classList.add(obj.class)
            div1.classList.add(`div${sayi}`)
            div3.appendChild(h1)
            div3.appendChild(p)
            this.classAnaSayfa.appendChild(div1)
            div1.appendChild(div2)
            div1.appendChild(h3)
            div2.appendChild(div3)
            div2.classList.add("kartHareketi")

            div2.addEventListener("click", ()=>{
                if(div2.className === "kartHareketi"){
                div2.classList.remove("kartHareketi")
                div2.classList.add("kartAcilisi")
                }
            })
            div2.addEventListener("mouseleave", ()=>{
                if(div2.className === "kartSabitleme"){
                    div2.classList.remove("kartAcilisi")
                    div2.classList.remove("kartSabitleme")
                    div2.classList.add("kartKapanisi")
                }
            })

            div2.addEventListener("animationend", (e)=>{
                if(e.animationName === "kartAcilisi"){
                    div2.classList.remove("kartAcilisi")
                    div2.classList.add("kartSabitleme")
                }else if(e.animationName === "kartKapanisi"){
                    div2.classList.remove("kartKapanisi")
                    div2.classList.add("kartHareketi")
                }
            })
        })
    }

}