// Carne - 400 gr por pessoa  + de 6 horas - 650
// Cerveja - 1200 ml por Pessoa + 6 horas - 2000 ml
// Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500ml

// Criança valem por 0.5 pessoa

let inputAdult = document.getElementById("adult");
let inputChild = document.getElementById("child");
let inputTime = document.getElementById("time");

let divResult = document.getElementById("result")


function calc(){
    console.log("Calculando...");

    let adult1 = inputAdult.value;
    let child1 = inputChild.value;
    let time1 = inputTime.value;

    let meatTotal = meatPP(time1) * adult1 + (meatPP(time1)/2 * child1);
    let beerTotal = beerPP(time1) * adult1 ;
    let drinksTotal = drinksPP(time1) * adult1 + (drinksPP(time1)/2 * child1);
    
    divResult.innerHTML = `<p>${meatTotal / 1000} Kg de Carne</p>`
    divResult.innerHTML += `<p>${Math.ceil(beerTotal / 355)} Latas de Cerveja</p>`
    divResult.innerHTML += `<p>${Math.ceil(drinksTotal / 2000)} Refrigerantes/Água - 2L</p>`


}

function meatPP (time){
    if(time >= 6){
        return 650;
    }else{ 
        return 400;
    }

}
function beerPP (time){
    if(time >= 6){
        return 2000;
    }else{ 
        return 1200;
    }

}
function drinksPP (time){
    if(time >= 6){
        return 1500;
    }else{ 
        return 1000;
    }

}
