const inputinsertText = document.querySelector('#insertText');
const submitButton = document.querySelector('#submit');
const finalResult = document.querySelector('#result');
const spinnerButton = document.querySelector('#spinnerButton')

function insertText (nameText){
    const text = nameText;
    if(isNaN(text)){

        //tutto minuscolo per evitare differeza tra maiusc e minsc
        const word = text.toLowerCase();

        //trasformo con split(in array) in array, giro con la parola(reverse), concateno tutte le parole(join) 
        const reverseWord = word.split('').reverse().join('');

        //verifico che la prola sia uguale a quella girata e ritorno il valore
        return word === reverseWord;
    }else{
        console.log('Inserisci una parola!')
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
        }else{
            finalResult.innerHTML = `"${nameText}" non è una parola palindroma!`;
            finalResult.classList.add('text-red');
        }

        spinnerButton.classList.toggle('d-none');
    }, 1500);
})





/*// Faccio Generare solo il numero random e ritorno il valore
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
    return finalresult;
}

//trasformo il valore inserito dall'utente tutto in minuscolo
const pariDispari = InsertpariDispari.toLowerCase()

if(pariDispari === ('pari') || pariDispari === ('dispari')){

    const insertNumber = prompt ('Inserisci un numero da 1 a 5!');

    //trasformo la stringa in numero
    const newNumber = parseInt(insertNumber);

    if(newNumber === 0 || newNumber > 5 || isNaN(newNumber)){
        console.log('Inserisci un numero da 1 a 5')

    }else{

        // inserisco dentro resul il risultato totale della funzione
        let result = sumNumber(newNumber);

        let resultUtent;

        //verifico se pari o dispari
        if(result % 2 === 0){
            resultUtent = 'Pari';
        }else{
            resultUtent = 'Dispari';
        }

        //Verfico se il risultato è uguale quello inserito dall'utente
        if(resultUtent === pariDispari){
            console.log(`Hai vinto il risultano è:"${result}"`)
        }else{
            console.log(`Hai perso il risultato è:"${result}"`)
        }
    }
}else{
    console.log('Devi inserire "Pari" o "Dispari", occhio agli spazi!!!');
}*/

