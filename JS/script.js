//.. Richiamo il div da HTML.

const elemento = document.getElementById('mio_id');

//.. Chiedo all'utente la sua mail.

let Mail = prompt('Qual è la tua mail?');

//.. Creo la lista mail.

const list=  ["salvo.mess@gmail.it" , "beniamino.messina@alice.it" , "serymagic@hotmail.it"]

console.log(list)

//.. Verifico le mail.

for (let i = 0; i < Mail.length; i++){

    if(list[i] === Mail) {
        mio_id.innerHTML = "Accettato"
        }

    else{
        mio_id.innerHTML = "Non accettato"
    }
};
