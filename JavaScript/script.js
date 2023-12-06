// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
//

// let playBtn = document.getElementById("play")
let griglia = document.querySelector(".grid");

let punteggioMax = 0;


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
        if ( casualNums.includes(i) ) {
            quadro.className = "bomb_square";
            console.log("Bomba!");
            alert("Hai preso una Bomba")
        } else {
            quadro.className = ("clicked_square");
            console.log(i);
            punteggioMax += 1;

            let punteggio = document.querySelector(".punti")
            punteggio.innerHTML="il tuo punteggio attuale è: " + punteggioMax;

        }


        
       


    });
};




//In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
// Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.






