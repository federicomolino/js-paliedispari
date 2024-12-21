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
        console.log('Metti un testo');
    } 
}    

const nameText = prompt ('Inserisci la parola');

if(insertText(nameText)){
    console.log(`"${nameText}" è una parola palindroma!`);
}else{
    console.log(`"${nameText}" non è una parola palindroma!`);
}