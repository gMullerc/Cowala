function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function main(){
    let endereco = fazGet("https://ip-fast.com/api/ip/")
    document.getElementById("textip").value = endereco
}

function clearAll(){
    document.getElementById('textip').innerHTML = "";
    localStorage.clear();
    console.log(localStorage)
   
}

main();

clearAll();

function salvarDados(){
    var saveName = document.getElementById("nametxt");
    var saveProfission = document.getElementById("professiontxt");
    var saveNumber = document.getElementById("numbertxt");
    var saveIp = document.getElementById("textip");
    
    var dados = JSON.parse(localStorage.getItem("dadosCadastrados"));

    if(dados == null){

        localStorage.setItem('dadosCadastrados', '[]');
        dados = [];
    }
    var auxRegistro = {
        nome: saveName.value,
        Profissao: saveProfission.value,
        Numero: saveNumber.value,
        Ip: saveIp.value
    }
    dados.push(auxRegistro);

    localStorage.setItem("dadosCadastrados", JSON.stringify(dados));
    alert("registro cadastrado");
    console.log(localStorage)
}

salvarDados();

window.onload = function() {
    document.getElementById('textip').disabled = true;
    document.getElementById('textip').readOnly = true;
  }

