console.log('Working with lists');

const destinosPossiveis = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro',
);

destinosPossiveis.push('Curitiba');
destinosPossiveis.splice(1, 1);

console.log(destinosPossiveis);

console.log(destinosPossiveis[1]);
