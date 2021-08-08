console.log ("Bem vindo(a) ao jogo de Blackjack!")
if (confirm ("Deseja iniciar uma nova rodada?")) {
   
    const cartas = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "K", "Q", "J", "A"]
    const naipes = ["♦️", "♥️", "♣️", "♠️"]
    let cartaTexto 
    let cartaValor
    let cartaSorteada
             
    function compraCarta () {
        let cartaNumero = cartas [Math.floor(Math.random() * 13)].toString()
        let cartaNaipe = naipes [Math.floor(Math.random() * 4)]
        cartaTexto = (cartaNumero + cartaNaipe)
                                            
            if (cartaNumero === "A"){
                cartaValor = 11
            } else if (cartaNumero === "K" || cartaNumero === "Q" || cartaNumero === "J") {
                cartaValor = 10
            } else {
                cartaValor = Number(cartaNumero)
            }
                     
            cartaSorteada = {
                texto: cartaTexto,
                valor: cartaValor
            }
    
            return cartaSorteada
    }
    
    let cartaUmUsuario = compraCarta()
    let cartaDoisUsuario = compraCarta()
    let cartaUmComputador = compraCarta ()
    let cartaDoisComputador = compraCarta()

    while (cartaUmUsuario.valor === 11 && cartaDoisUsuario.valor === 11 || cartaUmComputador.valor === 11 && cartaDoisComputador.valor === 11){
        cartaUmUsuario = compraCarta()
        cartaDoisUsuario = compraCarta()
    }
    
    let pontuacaoUsuario = cartaUmUsuario.valor + cartaDoisUsuario.valor
    let pontuacaoComputador = cartaUmComputador.valor + cartaDoisComputador.valor
    
    console.log (`Usuário - cartas ${cartaUmUsuario.texto} ${cartaDoisUsuario.texto} - pontuação ${pontuacaoUsuario}`)
    console.log (`Computador - cartas ${cartaUmComputador.texto} ${cartaDoisComputador.texto} - pontuação ${pontuacaoComputador}`)
    
    if (pontuacaoUsuario > pontuacaoComputador){
        console.log("O usuário ganhou!")
    } else if (pontuacaoUsuario < pontuacaoComputador){
        console.log("O computador ganhou!")
    } else {
        console.log("Empate!")
    }
      
 } else {
   console.log ("O jogo acabou")
}
