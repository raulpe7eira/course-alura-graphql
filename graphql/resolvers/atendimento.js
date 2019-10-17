const Operations = require('../../infraestrutura/operations')
const Atendimentos = new Operations("atendimento")

const resolvers = {
  Mutation: {
    adicionarAtendimento: (root, params) => Atendimentos.adiciona(params),
    atualizarAtendimento: (root, params) => Atendimentos.atualiza(params),
    deletarAtendimento: (root, { id }) => Atendimentos.deleta(id)
  },
  Query: {
    atendimentos: () => Atendimentos.lista(),
    atendimento: (root, { id }) => Atendimentos.buscaPorId(id)
  }
}

module.exports = resolvers
