// Scrivere un programma che chieda all’utente:
// Il numero di chilometri da percorrere
// Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// il prezzo del biglietto è definito in base ai km (0.267113 € al km)
// va applicato uno sconto del 24.552% per gli under 21
// va applicato uno sconto del 37.893% per gli over 63.


const bottone = document.querySelector('section>button');

bottone.addEventListener('click', function(){
    const kmtravel = document.querySelector('#kmtravel');
    const age = document.querySelector('#age');

    // console.log('CLICK!!!',kmtravel.value, age.value);
    
    const userDistance = kmtravel.value;
    const userAge = age.value;
    const priceCost = 0.267113;

    let tripCost = userDistance * priceCost;
    let userPrice

    if(userAge < 21){
        userPrice = (tripCost /100) * 24.552;
    }else if(userAge > 63){
        userPrice = (tripCost /100) * 37.893;
    }else{
        userPrice = tripCost;
    }

    console.log(userPrice)
    document.getElementById('output').innerHTML= userPrice.toFixed(2);

})



