const endereco = {
    rua: 'Rua dos Bobos',
    numero: 0
}

const usuario = {
    nome: 'Clemerson',
    idade: 19,
    email: 'clemerson.santos@aluno.ifsp.edu.br',
    cidade: 'Caragua',
    prof: false,
    end: endereco,
    familia: {
        mae: 'Maria',
        pai: 'João',
        irmao: 'José'
    },
    pets: [ 'Cachorro', 'Gato', 'Peixe' ],
}

delete usuario.prof


console.log(usuario.nome)