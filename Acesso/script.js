function acesso(){
   let numeroCartao = Number(prompt('Qual é o numero do seu cartão?'))
    let fundo = document.querySelector('#corpo')
    let texto = document.querySelector('#titulo')
    if(numeroCartao<=1999 && numeroCartao>=1000){
        alert('Acesso total')
        fundo.style.backgroundColor = ''
        texto.textContent = 'Acesso total'
    }
    else if(numeroCartao<=2999 && numeroCartao>=2000){
        alert('Acesso restrito')
        fundo.style.backgroundColor = ''
        texto.textContent = 'Acesso restrito'
    }
    else{
        alert('Acesso negado')
        fundo.style.backgroundColor = ''
        texto.textContent = 'Acesso negado'
    } 
}
