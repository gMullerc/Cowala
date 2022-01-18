function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function main(){
    let endereco = fazGet("https://ip-fast.com/api/ip/")
    document.getElementById("textip").innerHTML = `${endereco}`   
}



main()

jQuery(function($){
    
    $("#campoTelefone").mask("(999) 999-9999");
    
    });

