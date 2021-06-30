console.log('Conditionals');

const destinosDisponiveis = [
    'Bonito',
    'Recife',
    'Curitiba',
];

Array.prototype.listToView = function () {
    const regex = /\,\s(\w+$)/g;
    return this.join(', ').replace(regex, ' e $1.');
}

const idadeMinima  = 18;

const exibirDestinos = function () {
    console.log(`Pacotes disponíveis: ${destinosDisponiveis.listToView()}`)
}

const comprarPacote = function () {
    if (comprador.idade >= idadeMinima && comprador.temPassagem) {
        destinosDisponiveis.splice(comprador.codDestino, 1);
        console.log(`Seu pacote para ${comprador.nomeDestino} já está reservado.`);
    } else if (comprador.acompanhadoPorAdulto && comprador.temPassagem) {
        destinosDisponiveis.splice(comprador.codDestino, 1);
        console.log(`Seu pacote para ${comprador.nomeDestino} já está reservado.\nCompareça com o responsável legal no dia da viagem.`);
    } else {
        console.log('Os pacotes só podem ser vendidos para maiores de idade com passagem.');
    }
}

const comprador = {
    nome: 'João Augusto',
    idade: 15,
    acompanhadoPorAdulto: false,
    temPassagem: true,
    codDestino: 1,
    nomeDestino: destinosDisponiveis[1]
};

comprarPacote();
exibirDestinos();
