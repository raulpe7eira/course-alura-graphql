const { GraphQLServer } = require('graphql-yoga')
const conexao = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/database/tabelas')

conexao.connect(erro => {
  if (erro) {
    console.log(erro)
  }

  console.log('conectou no banco')

  Tabelas.init(conexao)
})

const resolvers = {
  Mutation: {
    adicionarCliente: (root, params) => ({
      id: 1,
      nome: params.nome,
      cpf: params.cpf
    })
  },
  Query: {
    status: () => "Servidor rodando!"
  }
}
const server = new GraphQLServer({
  resolvers,
  typeDefs: 'schema.graphql'
})

server.start(() => console.log('Server up...'))
