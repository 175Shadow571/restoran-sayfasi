// ********** js içe Aktar **********
import anasayfa from "./js/anaSayfa";
import katalog from "./js/katalog";
import hakkında from "./js/hakkında";

// ********* css içe Aktar ************
import "./style.css";
import "./css/hakkinda.css"

// ******** resim içe Akartar *******
import yastikSvg from "./images/yastik.svg"
import menuDolapKapali from "./images/svgDolapKapali.svg"
import menuDolapAcik from "./images/svgDolapAcik.svg"

 

(() =>{
    
    // ****************** DOM seçiciler ******************
    const header = document.querySelector("header")
    const nav = document.querySelector("nav")

    // **Buttonlar**
    const btnAnasayfa = document.querySelector("#btnAnaSayfa")
    const btnKatalog = document.querySelector("#btnKatalog")
    const btnHakkında = document.querySelector("#btnHakkında")

    // ****************** Dom Oluştur ********************

    // **hader imge menü**
    const dolapKapali = document.createElement("img")
    dolapKapali.src = menuDolapKapali
    header.appendChild(dolapKapali)
    const dolapAcik = document.createElement("img")
    dolapAcik.src = menuDolapAcik
    
    const div1 = document.createElement("div")
    const div2 = document.createElement("div")
    const div3 = document.createElement("div")
    const div4 = document.createElement("div")
    const div5 = document.createElement("div")
    div1.classList.add("kapsayici")
    div2.classList.add("flipBox")
    div3.classList.add("flipBoxInner")
    div4.classList.add("flipBoxAcik")
    div5.classList.add("flipBoxKapali")

    header.appendChild(div1)
    div1.appendChild(div2)
    div2.appendChild(div3)
    div3.appendChild(div4)
    div3.appendChild(div5)
    div4.appendChild(dolapKapali)
    div5.appendChild(dolapAcik)
    


    // **header Başlığı**
    const headerH1 = document.createElement("h1")
    headerH1.textContent = "Efsanem Koltuk"
    headerH1.classList.add("headerH1")
    header.appendChild(headerH1)
    
    // ** btn için yastik resmi oluşturma **
    for(let i = 0; i < 3; i++){
        const img = document.createElement("img");
        img.src = yastikSvg;
        img.classList.add("yastikSVG")
        img.classList.add(`yastikSVG${i}`)
        nav.appendChild(img)
    }
    
    // ************* Dinleyiciler ******************
    // **Telefon menu dolap Dinleyici**
    dolapKapali.addEventListener("click", menuAc)

    dolapAcik.addEventListener("click", menuKapat)

    // **Buton menü Dinleyicileri**
    nav.addEventListener("mouseover", nesne=>{
        if(nesne.target.id === "btnAnaSayfa"){
            document.querySelector(".yastikSVG2").classList.add("yastikAnimation")
            btnAnasayfa.classList.add("yastikAnimation")
        }else if(nesne.target.id === "btnKatalog"){
            document.querySelector(".yastikSVG1").classList.add("yastikAnimation")
            btnKatalog.classList.add("yastikAnimation")
        }else if(nesne.target.id === "btnHakkında"){
            document.querySelector(".yastikSVG0").classList.add("yastikAnimation")
            btnHakkında.classList.add("yastikAnimation")
        }
        
    })
    nav.addEventListener("mouseout", nesne=>{
        if(nesne.target.id === "btnAnaSayfa"){
            document.querySelector(".yastikSVG2").classList.remove("yastikAnimation")
            btnAnasayfa.classList.remove("yastikAnimation")
        }else if(nesne.target.id === "btnKatalog"){
            document.querySelector(".yastikSVG1").classList.remove("yastikAnimation")
            btnKatalog.classList.remove("yastikAnimation")
        }else if(nesne.target.id === "btnHakkında"){
            document.querySelector(".yastikSVG0").classList.remove("yastikAnimation")
            btnHakkında.classList.remove("yastikAnimation")
        }
    })


    // ***************** Sayfa geçişleri ******************
    btnHakkında.addEventListener("click", ()=>{
        menuKapat()
        hakkında()
    })


    // ****************** Fonksiyonlar ******************
    function menuAc(){
        div3.classList.add("flipped")
        nav.classList.add("menuAcik")
    }
    function menuKapat(){
        div3.classList.remove("flipped")
        nav.classList.remove("menuAcik")
    }
})();



