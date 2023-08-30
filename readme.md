##Ciclo While

while(condizione){
    //codice da eseguire

    //istruzioni per teerminare il ciclo
};

Con while si usa l'algebra booleana per terminare il ciclo bisogna far si che l'ultima istruzione sia falsa.

For e While sono equivalenti: tutto ciò che può essere realizzato con un ciclo for può essere realizzato anche con un ciclo while. Per questo motivo si possono intercambiare.


L'unica differenza è: 
- il ciclo "for" è pratico per eseguire un set di interazione a partire da un conteggio.
- il ciclo "while" si usa quando non si sa quante volte devo ripetere il ciclo non abbiamo un counter (contatore).



Dopo la graffa di while non devo mettere il punto e virgola se intercambio il ciclo loop con il ciclo while il mio incremento/decremento diventa la condizione che mi fa terminare il ciclo while. 


##Ciclo do-while

Il ciclo do-while è il fratellino di while!
Se la condizione è falsa la esegue comunque almeno una volta anche se la condizione risultasse falsa fin dall'inizio.


let x = 110;
do{
    console.log(x);

    x++
} while (x < 10)

//fuori dal do while 


Se mentre sto guardando il mio codice voglio almeno eseguirla almeno di una volta anche se la condizione è comunque falsa 
