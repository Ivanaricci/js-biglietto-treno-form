



// Recupero dal DOM dei tag input e dichiarazione variabili

const km = document.getElementById('km-utente')
const age = document.getElementById('age-utente')
const enter = document.getElementById('enter')




// Corpo del programma


enter.addEventListener('click', function(){

    let kmUtente = km.value.trim()
    console.log(kmUtente)

    let ageUtente = age.value.trim()
    console.log(ageUtente)

    let price = kmUtente * 0.21;
    

    // sconti
    if(ageUtente < 18){
        price = price * 0.8;
        
        console.log(`hai diritto al 20% di sconto. Il prezzo del tuo biglietto è ${price.toFixed(2)} euro`);
    }

    else if(ageUtente > 65){
        price = price * 0.6;
        
        console.log(`hai diritto al 40% di sconto. Il prezzo del tuo biglietto è ${price.toFixed(2)} euro`);
    }

    else{
        console.log(`Il prezzo del tuo biglietto è ${price} euro`);
    }

})
