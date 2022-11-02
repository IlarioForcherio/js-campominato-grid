// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.



function playGame(){
    //richiamo l'elemento html che è il div "grid-cnt"
    let gridContainerHtml = document.getElementById('grid-cnt')
    //funzione crea quadrato
    //questa funzione crea un quadrato con createElement  e associa una classe ccon classList.add
    
    
    //chiedere perchè senza questo crea la griglia tante volte quante clicchi
    gridContainerHtml.innerHTML ="";
    
    function creaBox(){
        
    const box = document.createElement('div');
    box.classList.add('square-100');
    
    return box;
    
    
    }
    console.log(creaBox());
    
    //inserimento box dentro alla griglia
    //appendo la funzione perchè se appendessi "box" non si potrebbe fare in quanto box è statoi inzializzato dentro alla funzione di creazione quadrato
    //per richiamare una variabile nata dentro a una parentesi quadra dovrei inizializzarla come variabile globale
    
    //inserimento box dentro alla griglia
    // gridContainerHtml.append(creaBox());
    
    
    // per creare 100 box, devo ciclare la funzione crea quadrato che è stata appesa al div "grid-cnt"
    for( i=1; i<=100 ; i++ ){
        
        const box100 = creaBox();
         //ho creato una variabile che contiene la funzione che crea un box 
         //questa variabile è box100 perchè è la funzione crea un quadrato ciclata per 100 volte
    

         box100.addEventListener('click', function(){
        //dentro la funzione metto this
        //aggiungo la  classe active
        // alla classe active aggiungo toggle(add e remove insieme)
        //con this capisco in quale quadrato sto cliccando
        this.classList.toggle('active')
    
    })
    console.log( box100 )
    
       // con l'innerHTML ho inserito "i" dentro ai box100, (cioè il numero corrispondente all'iterazione) 
       box100.innerHTML = i ; 
       gridContainerHtml.append(box100);
    //con append ho appeso il tutto al div "grid-cnt"
    }
    }
    




