


function fibo() {
    let fiboescolha = prompt("Quantos números da sequência você");

    var fibonacci = [];
    fibonacci[0] = 0;
    fibonacci[1] = 1;
    for (var i = 2; i < fiboescolha; i++) {
        fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    }

    let show = document.getElementById('fibonacci').innerHTML = (fibonacci.toString())

}