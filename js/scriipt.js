// funzione che richide da che range prendere i numeri perche' ha un min e un max

// let numeroRandom = (max,min)=> Math.floor(Math.random()* (max+min-1))+1;

// Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.

let arrayRandomNumbers = []
let userNumbers = []
let rightNumbers= []

let risposta = document.querySelector('h1')
// creo array con numeri random
const numbers = setInterval(function(){
  let numeroRandom = Math.floor((Math.random()*100)+1)
  arrayRandomNumbers.push(numeroRandom)
  risposta.innerHTML = numeroRandom
},1000);

// interrompo il ciclo di setInterval e genero un'attesa di 3 secondi
setTimeout(()=>{
  risposta.innerHTML = ''
  clearInterval(numbers)
},6000);


// genero un attesa di 3 secondi
// genero l'array di numeri dato dall'utente 
// confronto i due array
// genero array con solo i numeri esatti
// dico quanti numeri sono stati indovinati
setTimeout(() =>{
  i=0;
  while(i<5){
    let userNumber = parseInt(prompt(`inserici valore n =${i + 1}`))
    userNumbers.push(userNumber)
    if (userNumbers.includes(arrayRandomNumbers[i])){
       rightNumbers.push(arrayRandomNumbers[i])
    }
    i++
  }
   
  if(rightNumbers.length>0){
    risposta.innerHTML = `
    i numeri indovinati sono ${rightNumbers.length} e sono:
    `
    rightNumbers.forEach((number) => {
     risposta.innerHTML += ` : ${number} `

    })
    
  }else{
    risposta.innerHTML = 'non hai indovinato nessun numero'
  }
 },7000);


 
 


