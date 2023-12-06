// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
//

// let playBtn = document.getElementById("play")
let griglia = document.querySelector(".grid");

let casualNums = [];
for (let j = 0; j <16; j++) {
    let fire = Math.floor(Math.random() *100) +1;
    casualNums.push(fire);
}
console.log(casualNums);

for (let i=1; i<=100; i++) {

    let quadro = document.createElement("div");

    quadro.className = ("square");

    griglia.append(quadro);
    
    quadro.append(i);

    //
    let cellNums = [];
    cellNums.push(i);
    //
    
    
    quadro.addEventListener("click",
    
    function(){

        quadro.className = ("clicked_square");
        console.log(i);
        
       


    });
    let indice = cellNums.indexOf(i);

    if (casualNums.includes(i)) {
        quadro.addEventListener("click",
    
        function(){
        
            quadro.className = "bomb_square";
            console.log("Bomba!");
        
        
        
        
        });
    
    };

};




//In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
// Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.






