const imgMassa = ["imagens/massa.jpg", "imagens/massa2.jpg"]
const imgPizza = ["imagens/pizza.jpg", "imagens/pizza2.jpg"]
const imgSands = ["imagens/sandwich.jpg", "imagens/sandwich2.jpg"]

let indecMassa = 0;

setInterval(() => {
    indecMassa++;
    if(indecMassa >= imgMassa.length){
        indecMassa=0;
    }    
    document.getElementById('img-massa').src= imgMassa[indecMassa]
}, 3000);

let indecSands =0;

setInterval(()=>{
    indecSands++;
    if(indecSands >= imgSands.length){
        indecSands=0;
    }
    document.getElementById('img-sandw').src =imgSands[indecSands]
}, 3000)

let indecPizza = 0;

setInterval(() => {
    indecPizza++;
    if(indecPizza>= imgPizza.length){
        indecPizza=0;
    }
    document.getElementById('img-pizza').src= imgPizza[indecPizza]
}, 3000);