console.log('Loops');

(() => {
    const destinosDisponiveis = [
        'Bonito',
        'Recife',
        'Curitiba',
    ];

    Array.prototype.exibeLista = function () {
        const regex = /\,\s(\w+$)/g;
        return this.join(', ').replace(regex, ' e $1.');
    }

    const idadeMinima  = 18;

    const exibirDestinos = function () {
        console.log(`Destinos disponíveis: ${destinosDisponiveis.exibeLista()}`)
    }

    const comprarPacote = function () {
        let mensagem;
        const codDestino = destinosDisponiveis.indexOf(comprador.nomeDestino);
        const podeComprar = comprador.idade >= idadeMinima || comprador.acompanhadoPorAdulto;

        if (codDestino >= 0) {
            if (podeComprar) {
                destinosDisponiveis.splice(codDestino, 1);
                comprador.temPassagem =  true;

                mensagem = (comprador.temPassagem)
                    ? 'Passagem já adquirida. Aproveite sua viagem!'
                    : `Passagem para ${comprador.nomeDestino} adquirida com sucesso. Tenha uma boa viagem!`
                ;
            } else mensagem = 'As passagens só podem ser vendidas para maiores de idade.';
        } else mensagem = 'Destino não disponível';

        console.log(mensagem)
    }

    const comprador = {
        nome: 'João Augusto',
        idade: 15,
        acompanhadoPorAdulto: true,
        nomeDestino: 'Bonito',
        temPassagem: false,
    };

    comprarPacote();
    exibirDestinos();
})();
