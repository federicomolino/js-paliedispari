//Selezione elementi per parola palindroma
const inputinsertText = document.querySelector('#insertText');
const submitButton = document.querySelector('#submit');
const finalResult = document.querySelector('#result');
const spinnerButton = document.querySelector('#spinnerButton')
const submitAgianPalindroma = document.querySelector('#submitAgianPalindroma');

//Selezione elementi per Pari o Dispari
const inpuChoice = document.querySelector('#inputInsertchoice');
const inputDivNumber = document.querySelector('#inputDivNumber');
const inputNumber = document.querySelector('#inputInsertNumber');
const submitButtonResult = document.querySelector('#submitResult');
const resultPariDispari = document.querySelector('#secondResult');
const spinnerButtonPariDispari = document.querySelector('#spinnerButtonPariDispari');
const submitAgian = document.querySelector('#submitAgian');
const labelNumber = document.querySelector('#labelNumber');
const list = document.querySelector("#list");
const listHistory = document.querySelector('#listHistory');



function insertText (nameText){
    const text = nameText;
    if(isNaN(text)){

        //tutto minuscolo per evitare differeza tra maiusc e minsc
        const word = text.toLowerCase();

        //trasformo con split(in array) in array, giro con la parola(reverse), concateno tutte le parole(join) 
        const reverseWord = word.split('').reverse().join('');

        //verifico che la prola sia uguale a quella girata e ritorno il valore
        return word === reverseWord;
    }
}

submitButton.addEventListener('click', function(event){
    event.preventDefault()

    spinnerButton.classList.toggle('d-none')

    //Inserisco nella variabile quanto scritto dall'utente
    const nameText = inputinsertText.value;

    setTimeout(() => {
        if(insertText(nameText)){
            finalResult.innerHTML = `"${nameText}" è una parola palindroma!`;
            finalResult.classList.add('normal-text');
        }else{
            finalResult.innerHTML = `"${nameText}" non è una parola palindroma!`;
            finalResult.classList.add('text-red');
        }

        spinnerButton.classList.toggle('d-none');
        
        submitAgianPalindroma.classList.remove('d-none');

        submitButton.classList.add('d-none');
    }, 1500);
})





// Faccio Generare solo il numero random e ritorno il valore
function generationNumber(){
   return Math.floor((Math.random()* 5)+1)
}

// sommo il numero random con quello generato dall'utente
function sumNumber (newNumber){
    //Richiamo la funzione generationNumber,inserisco il numero random genrato in un let
    let numberRandom = generationNumber()

    //sommo il numero randoman con quello generato
    let finalresult = numberRandom + newNumber;
    //ritorno il risultato finale

    console.log(`Numero random: ${numberRandom}, Numero utente: ${newNumber}, Somma: ${finalresult}`);
    return finalresult;

}

//array in cui andranno salvati i risultati delle partite
let history =[];

function displayList (){
    list.innerHTML ='';
    for (i = 0; i < history.length; i++){
        // Crea un nuovo elemento li
        let addElementList = document.createElement("li");

        // Imposta il testo dell'elemento li
        addElementList.innerHTML = history[i];
        
        // Aggiungi l'elemento li all'ul
        list.appendChild(addElementList);
    }
}

//funzione per aggiungere i risultati all'interno dell'array
function updateHistory (){
    history.push(resultPariDispari.innerHTML);
}

submitButtonResult.addEventListener('click', function(event){
    event.preventDefault()

    //assegno all variabile il valore inserito dall'utente
    let pariDispari = inpuChoice.value;

    //trasformo il valore inserito dall'utente tutto in minuscolo
    let pariDispariLower = pariDispari.toLowerCase();  
    
    //assegno alla variabile il numero inserito dall'utente
    const insertNumber = inputNumber.value;

    //tolgo input inserimento numero
    inputDivNumber.classList.toggle('d-none');

    spinnerButtonPariDispari.classList.toggle('d-none');

    setTimeout(() => {

        if(pariDispariLower === ('pari') || pariDispariLower === ('dispari')){
            

            //trasformo la stringa in numero
            const newNumber = parseInt(insertNumber);

            if(newNumber === 0 || newNumber > 5 || isNaN(newNumber)){
                resultPariDispari.innerHTML ='Inserisci un numero da 1 a 5';
                resultPariDispari.classList.add('text-red');            

            }else{

                // inserisco dentro resul il risultato totale della funzione
                let result = sumNumber(newNumber);

                let resultUtent;

                //verifico se pari o dispari
                if(result % 2 === 0){
                    resultUtent = 'pari';
                }else{
                    resultUtent = 'dispari';
                }

                console.log(`Risultato somma: ${result}, Risultato Utente: ${resultUtent}, Scelta Utente: ${pariDispariLower}`);


                //Verfico se il risultato è uguale quello inserito dall'utente
                if(resultUtent === pariDispariLower){
                    resultPariDispari.innerHTML =`Hai vinto il risultano è : ${result}`;
                    resultPariDispari.classList.add('normal-text');
                    listHistory.classList.remove("d-none");
                    updateHistory();
                    displayList();
                }else{
                    resultPariDispari.innerHTML =`Hai perso il risultano è : ${result}`;
                    resultPariDispari.classList.add('normal-text');
                    listHistory.classList.remove("d-none");
                    updateHistory();
                    displayList();
                }
            }
        }else{
            resultPariDispari.innerHTML = 'Devi inserire "Pari" o "Dispari", occhio agli spazi!!!';
            resultPariDispari.classList.add('text-red');
        }

        spinnerButtonPariDispari.classList.toggle('d-none');
    
        inputDivNumber.classList.toggle('d-none');
        labelNumber.innerHTML =`Il numero che hai inserito è :`;

        // faccio apparire buttone riprova
        //submitAgian.classList.remove('d-none');

        //tolgo bottone Verifica
        //submitButtonResult.classList.add('d-none');

        pulisciStoricoButton.addEventListener ('click', function(){
            // Svuota l'array elementList
            history = [];
             // Svuota il contenuto dell'elemento ul
             list.innerHTML = '';
        
             //Rimuovo lista
             listHistory.classList.add("d-none");
        })
    }, 1500);
})