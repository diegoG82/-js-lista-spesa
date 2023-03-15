// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
// Rivediamo l’esercizio visto insieme, ma questa volta con il ciclo while al posto del ciclo for. Facciamo attenzione a non dimenticare tutte le differenze implementative che il ciclo while ci impone, in particolare alla variabile di indice.


// CREO L'ARRAY CON LA LISTA DELLA SPESA
const listaDellaSpesa = ["Latte", "Pane", "Pasta", "Carne", "Frutta"];
console.log(listaDellaSpesa);

// INSERISCO IL QUERYSELECTOR
const listElem = document.querySelector("ul")


//  OBIETTIVO:
//  INSERISCO GLI ELEMENTI NELLA LISTA FINO A QUANDO NON LI HO INSERITI TUTTI

// PREPARO IL CONTENITORE DELLA MIA LISTA
let ul = document.querySelector("ul");
console.log("ul")

// SETTO IL VALORE DELL'ARRAY AL PUNTO INIZIALE
let i = 0;

// FINCHE' I E' MINORE DELLA LISTA DELLA SPESA:
while
    (i < listaDellaSpesa.length){

        // CREO ELEMENTO LI NEL DOM
        let li = document.createElement("li");

        // CON APPEND METTO NELLA LI GLI ELEMENTI DELL'ARRAY
        li.append(listaDellaSpesa[i]);

        // CON APPEND METTO NELLA UL GLI ELEMENTI LI
        ul.append(li);
 
        i++ 
        // (se non lo metto ciclo infinito?)
    }


        // FUNZIONE CON IL CICLO FOR

        // Stampare la lista della spesa e stampare nel dom con il ciclo FOR


        // // CREO L'ARRAY CON LA LISTA DELLA SPESA
        // const listaDellaSpesadue = ["Latte!", "Pane!", "Pasta!", "Carne!", "Frutta!"];

        // // PREPARO IL CONTENITORE DELLA MIA LISTA CON QUERYSELECTOR
        // const listElemdue = document.querySelector("ul");

        // // DICHIARO LA LISTA VUOTA CHE DOVRO' RIEMPIRE
        // let listItems = "";

        // // CICLO FOR PER IL QUALE I CHE E' IL PRIMO VALORE DELL'ARRAY VIENE INCREMENTATO FINO A QUANDO RIMANE MINORE DELLA LUNGHEZZA DELLA LISTA DELLA SPESA
        // for (let i = 0; i < listaDellaSpesadue.length; i++) {
      
        // // AL VALORE VUOTO DI LISTITEMS VIENE AGGIUNTO (+-) UN LI CHE CONTIENE IL VALORE I PRESENTE NELL'ARRAY(LISTADELLASPESADUE) DA 0 A 4 NEL NOSTRO CASO SPECIFICO
        // listItems += `<li>${listaDellaSpesadue[i]}</li>`;
        
        // listElem.innerHTML = listItems; (PERCHE' ALLA FINE DEL CICLO E NON AL SUO INTERNO?)

        // }

        // ALLA FINE DEL CICLO INSERIAMO NELL'HTML LISTITEMS CON LA FUNZIONE INNERHTML 
        // listElem.innerHTML = listItems;

