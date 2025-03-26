



// Recupero dal DOM dei tag input e dichiarazione variabili

const km = document.getElementById('km-utente')
const age = document.getElementById('age-utente')
const enter = document.getElementById('enter')

let price = km * 0.21;


// Corpo del programma


enter.addEventListener('click', function(){

    let kmUtente = km.value.trim()
    console.log(kmUtente)

    let ageUtente = age.value.trim()
    console.log(ageUtente)

    
    

})
