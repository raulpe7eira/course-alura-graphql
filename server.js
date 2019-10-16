const { GraphQLServer } = require('graphql-yoga')
const conexao = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/database/tabelas')
const Operations = require('./infraestrutura/operations')

conexao.connect(erro => {
  if (erro) {
    console.log(erro)
  }

  console.log('conectou no banco')

  Tabelas.init(conexao)
})

const Clientes = new Operations("cliente")
const resolvers = {
  Mutation: {
    adicionarCliente: (root, params) => Clientes.adiciona(params)
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
