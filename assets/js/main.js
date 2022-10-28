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


for(let i = 0 ; i<64 ; i++){
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