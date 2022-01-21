
function countDown(){
    let chosenDate = prompt("Digite uma data ex:'9 Oct 2022' ");

    const newYears = chosenDate

    const newYearsDate = new Date(newYears);

    const currentDate = new Date();

    console.log(newYearsDate);

    console.log(currentDate);

    if(newYearsDate < currentDate){
        let show = document.getElementById('date').innerHTML = 'A comida ainda está válida'
    }else {
        let show = document.getElementById('date').innerHTML = 'A comida ESTRAGOUU, NÃO COMA'
    }

    
}


