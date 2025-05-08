import urun1resim1 from "../images/urun1/resim1.jpg"
import urun1resim2 from "../images/urun1/resim2.jpg"
import urun1resim3 from "../images/urun1/resim3.jpg"

import urun2resim1 from "../images/urun2/resim1.jpg"
import urun2resim2 from "../images/urun2/resim2.jpg"
import urun2resim3 from "../images/urun2/resim3.jpg"

import urun3resim1 from "../images/urun3/resim1.jpg"
import urun3resim2 from "../images/urun3/resim2.jpg"
import urun3resim3 from "../images/urun3/resim3.jpg"

export default class{
    constructor(){
        document.querySelector(".content").classList.add("katalog")
        this.classKatalog = document.querySelector(".katalog")


        
        this.DOMicerikOlustur([urun1resim1,urun1resim2,urun1resim3],"ürün1")
        this.DOMicerikOlustur([urun2resim1,urun2resim2,urun2resim3],"ürün2")
        this.DOMicerikOlustur([urun3resim1,urun3resim2,urun3resim3],"ürün3")



        this.DOMicerikOlustur([urun1resim1,urun1resim2,urun1resim3],"ürün1")
        this.DOMicerikOlustur([urun2resim1,urun2resim2,urun2resim3],"ürün2")
        this.DOMicerikOlustur([urun3resim1,urun3resim2,urun3resim3],"ürün3")



        this.DOMicerikOlustur([urun1resim1,urun1resim2,urun1resim3],"ürün1")
        this.DOMicerikOlustur([urun2resim1,urun2resim2,urun2resim3],"ürün2")
        this.DOMicerikOlustur([urun3resim1,urun3resim2,urun3resim3],"ürün3")



        this.DOMicerikOlustur([urun1resim1,urun1resim2,urun1resim3],"ürün1")
        this.DOMicerikOlustur([urun2resim1,urun2resim2,urun2resim3],"ürün2")
        this.DOMicerikOlustur([urun3resim1,urun3resim2,urun3resim3],"ürün3")

       
    
        document.querySelectorAll(".disDiv").forEach(element =>{
            element.addEventListener("click", ()=>{
                console.log(element);
                this.urunGoruntule(element)
            })
        })
       
    }

    urunGoruntule(element){
        const button = document.createElement("button")

        const buyukDivic = document.createElement("div")
        buyukDivic.classList.add("buyukDivic")
        const buyukDiv = document.createElement("div")
        buyukDiv.classList.add("buyukDiv")
        buyukDiv.appendChild(buyukDivic)
        button.textContent = "X"
        buyukDiv.appendChild(button)
        
        
        
        element.cloneNode(true).querySelectorAll("div").forEach(div =>{
            buyukDivic.appendChild(div)
        })


        this.classKatalog.appendChild(buyukDiv)

        button.addEventListener("click", ()=>{
            buyukDiv.remove()
        })


    }


    DOMicerikOlustur(icerikResim=[],altmetin){
        const disDiv = document.createElement("div")
        disDiv.classList.add("disDiv")
        this.classKatalog.appendChild(disDiv)

        
        for(let i=0;i<3;i++){
            const icDiv = document.createElement("div")
            disDiv.appendChild(icDiv)
            icDiv.classList.add(`div${(i+1)}`)
            const img = document.createElement("img")
            icDiv.appendChild(img)
            img.src = icerikResim[i]
            img.alt = altmetin
        }
        
        
    }
}