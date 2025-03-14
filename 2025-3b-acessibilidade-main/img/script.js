const  aumentaFonteBotao = document.getElementById('aumentar-fonte');

let tamanhoFonteAtual = 1;

aumentaFonteBotao.addEventListener('click', function(){
    tamanhoFonteAtul += 0.1;
    document.body.style.fontSize = `${tamanhoFonteAtual}rem`
})