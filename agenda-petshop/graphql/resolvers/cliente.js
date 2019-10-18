const Operations = require('../../infraestrutura/operations')
const Clientes = new Operations("cliente")

const resolvers = {
  Mutation: {
    adicionarCliente: (root, params) => Clientes.adiciona(params),
    atualizarCliente: (root, params) => Clientes.atualiza(params),
    deletarCliente: (root, { id }) => Clientes.deleta(id)
  },
  Query: {
    clientes: () => Clientes.lista(),
    cliente: (root, { id }) => Clientes.buscaPorId(id)
  }
}

module.exports = resolvers
