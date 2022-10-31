
/*
Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
*/


//funzione che fa partire gioco al click
//funzione che crea 100 div 
//funzione che crea 100 numeri progressivi 
 //funzione che fa attivare il gioco al play



// richiamo la  gliglia  da html

const gligliaHtml = document.getElementById('griglia');

// creo una funzione per creare un div quadrato dentro la griglia

function creazioneQuadrato(){
   const div = document.createElement('div');
   div.classList.add('quadrato');
   return div;
}

//inserisci l'elemeno qadrato appena creato all'intenro della griglia
//appendo l'elemento creato nela griglia
//griglia.append(creazioneQuadrato());


//crea 64 quadrati


for(let i = 0 ; i<100 ; i++){
// creo una variabile che contiene quadrato 
    let elementoCorrente = creazioneQuadrato();

    //tutti e 64 gli elmenti hanno un evento al click
    elementoCorrente.addEventListener('click', function(){
        //dentro la funzione metto this
        //classe active, toggle(add e remove insieme)
        //con this capisco in quale quadrato sto cliccando
        this.classList.toggle('active')
    })

    //ogni elemeno viene appeso dento alla griglia
    griglia.append(elementoCorrente);

}

console.log(griglia);s




