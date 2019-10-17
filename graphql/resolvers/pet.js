const Operations = require('../../infraestrutura/operations')
const Pets = new Operations("pet")

const resolvers = {
  Mutation: {
    adicionarPet: (root, params) => Pets.adiciona(params),
    atualizarPet: (root, params) => Pets.atualiza(params),
    deletarPet: (root, { id }) => Pets.deleta(id),
  },
  Query: {
    pets: () => Pets.lista(),
    pet: (root, { id }) => Pets.buscaPorId(id)
  }
}

module.exports = resolvers
