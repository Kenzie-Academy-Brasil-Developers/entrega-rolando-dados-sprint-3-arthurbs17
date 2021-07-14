function showResults(n){

    let divNova = document.createElement("div");
    let newP = document.createElement("ul");
    
    divNova.appendChild(newP);

    for (let i = 0; i < n.length; i++){
        let liBox = document.createElement("li");
        newP.appendChild(liBox);
        let kata = document.createTextNode(n[i]);
        liBox.appendChild (kata);
    }

    let destination = document.getElementById("dicesResults");

    destination.appendChild(divNova);
}

function showBox(n){

    let divNova = document.createElement("div");

    let ulBox = document.createElement("ul");

    divNova.appendChild(ulBox);

    for (let i = 0; i < n.length; i++){
        let liBox = document.createElement("li");
        ulBox.appendChild(liBox);
    }

    let destination = document.getElementById("dicesBox");

    destination.appendChild(divNova);
}


function rollDice(){
    let min = 1;
    let max = 6;
    let dice1 = Math.floor(Math.random() * (max - min + 1)) + min;
    let dice2 = Math.floor(Math.random() * (max - min + 1)) + min;

    let result = dice1 + dice2;

    return result
}

function frequencyResults(){

    let contador = [0,0,0,0,0,0,0,0,0,0,0,0];

    for (i = 1; i <= 1000; i++){
        
        let resultRollsDices = rollDice();

        contador[resultRollsDices - 1] += 1;
    }

    return contador
}

function captureFrequency(){
    
    const frequencyResultsArr = frequencyResults();

    let frequencyResultsDisplay = [];
    let frequencyResultsStr = "";

    for (let i = 1; i < frequencyResultsArr.length; i++){
        frequencyResultsStr = i+1 + ': ' + frequencyResultsArr[i];
        frequencyResultsDisplay.push(frequencyResultsStr);
    }

    showResults(frequencyResultsDisplay);

    showBox(frequencyResultsArr);

    let sizesBoxFrequency = document.querySelectorAll('#dicesBox div ul li');
    let sizesBoxFrequencyArr = [...sizesBoxFrequency];

    for (let i = 1; i < sizesBoxFrequencyArr.length; i++){
        sizesBoxFrequencyArr[i].style.width = frequencyResultsArr[i]+'px'
    }

    return frequencyResultsDisplay
}

captureFrequency()
