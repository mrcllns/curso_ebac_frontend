let form = document.getElementById('validacaoFinal')

function formVal(){
    let campoA1 = document.getElementById('CampoA')
    let campoB2 = document.getElementById('CampoB')

    if (campoA1.value < campoB2.value){
        alert ('Seu formulário é valido!')
    } else{
        alert ('Seu formulário não é válido! Tente novamente.');
    }
}


form.addEventListener('submit',function(e){
    e.preventDefault();
    formVal();
})
