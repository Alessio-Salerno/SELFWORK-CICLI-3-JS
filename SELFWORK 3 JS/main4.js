// let scelta_bevanda = prompt ('Scegli una bevanda: \n  1 - Acqua \n  2 - Cocacola\n  3 - Birra \n  4 - Vino');

// if(scelta_bevanda == 1){
//     console.log('È stata selezionata La tua acqua');
// }
// else if(scelta_bevanda == 2 ){
//     let coliche = prompt('Se soffri di coliche renali niente coca. Tu soffri?')
//          if(coliche == 'si'){
//          console.log('È stata selezionata la tua cocacola')
// }
// else{
//     console.log('Ninete coca cola, soffri di coliche');
// }
// }

// else if(scelta_bevanda == 3){
//     let age = prompt('Non puoi bere se non sei maggiorenne. Tu quanti anni hai?')
//     if(age >= 18){
//         console.log('È stata selezionata la tua birra')
//     }
//     else{
//         console.log('Non puoi bere perchè non sei maggiorenne')
//     }
// }
// else if(scelta_bevanda == 4){
//     let age = prompt('Non puoi bere se non sei maggiorenne. Tu quanti anni hai?')
//     if( age >= 18){
//         console.log('È Stato selezionato il tuo vino');
//     }
//     else{
//         console.log('Non puoi bere il vino')
//     }
// }
// else{
//     let domanda = prompt('Scegliere la propria bevanda, tu cosa scegli?')
// }



let scelta_bevanda;
while (true) {
    scelta_bevanda = prompt('Scegli una bevanda: \n  1 - Acqua \n  2 - Cocacola\n  3 - Birra \n  4 - Vino');
    
    if (scelta_bevanda == 1) {
        console.log('È stata selezionata la tua acqua');
        break;
    } 
    else if (scelta_bevanda == 2) {
        let coliche = prompt('Se soffri di coliche renali niente coca. Tu soffri?');
        if (coliche.toLowerCase() == 'si') {
            console.log('Niente coca cola, soffri di coliche');
        } 
        else {
            console.log('È stata selezionata la tua cocacola');
        }
        break;
    } 
    else if (scelta_bevanda == 3) {
        let age = prompt('Non puoi bere se non sei maggiorenne. Tu quanti anni hai?');
        if (age >= 18) {
            console.log('È stata selezionata la tua birra');
        } 
        else {
            console.log('Non puoi bere perchè non sei maggiorenne');
        }
        break;
    } 
    else if (scelta_bevanda == 4) {
        let age = prompt('Non puoi bere se non sei maggiorenne. Tu quanti anni hai?');
        if (age >= 18) {
            console.log('È stato selezionato il tuo vino');
        } 
        else {
            console.log('Non puoi bere il vino');
        }
        break;
    } 
    else {
        let domanda = prompt('Scelta non valida. Scegliere la propria bevanda, tu cosa scegli?');
    }
}

