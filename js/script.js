

// Recupero dal DOM dei tag input e dichiarazione variabili

const km = document.getElementById('km-utente')
const age = document.getElementById('age-utente')
const button = document.querySelector('button')

// Recupero i segnaposto della card

const offerta = document.querySelector('.offerta')
const costoBiglietto = document.querySelector('.costo-biglietto')




// Corpo del programma


button.addEventListener('click', function(event){
    event.preventDefault();

    let kmUtente = parseFloat(km.value.trim())
    console.log(kmUtente)

    let ageUtente = parseInt(age.value.trim())
    console.log(ageUtente)

    let price = kmUtente * 0.21;
    let tipoOfferta = 'Biglietto standard'
    

    // sconti
    if(ageUtente < 18){
        price = price * 0.8;
        tipoOfferta = 'Sconto Minorenni 20%'
        console.log(`hai diritto al 20% di sconto. Il prezzo del tuo biglietto è ${price.toFixed(2)} euro`);
    }

    else if(ageUtente > 65){
        price = price * 0.6;
        tipoOfferta = 'Sconto over 65 40%'
        console.log(`hai diritto al 40% di sconto. Il prezzo del tuo biglietto è ${price.toFixed(2)} euro`);
    }

    // Stampo i dati nella card
    offerta.innerText = tipoOfferta;
    costoBiglietto.innerText = price.toFixed(2) + 'euro'

     

       
})
