for (let i = 0; i < 10; i++) {
    console.log(i);
};

/*while (condition) {
    //run the code

    //aggiungi un'istruzione che modifichi la condizione al fine di interrompere il loop
}*/

let i = 0;
while (i < 10) {
    console.log(i);


    i++
}
    
let j = 0;
const list = [1, 2, 3, 4, 5];
while (j < list.length) {
    const element = list[j];

    j++
}


let play = true; 

while (play) {
    //create random number for pc
    const pcNumb = Math.floor(Math.random() * 6) + 1;
    //create random number for player
    const playerNumb = Math.floor(Math.random() * 6) + 1;

    //show the winner
    const winner = 'player';
    alert(`${winner} - ${playerNumb}${pcNumb}`);

   
    //mettere un'istruzione per terminare il loop (altrimenti creo un loop infinito)
    play = confirm ('Do you want to play again?')
    console.log(play);
}

console.log('Outside the loop');


console.log(***********************************);

