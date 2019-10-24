import { restApi } from './config'
import { graphqlApi } from './config'

const listarClientes = () => 
  graphqlApi
    .query('clientes { id nome cpf }')
    .then(resposta => resposta.json())
    .then(dados => dados.data.clientes)

const buscarClientePorId = id => 
  graphqlApi
    .query(`cliente(id: ${id}) { nome cpf }`)
    .then(resposta => resposta.json())
    .then(dados => dados.data.cliente)

const adicionarCliente = cliente => 
  graphqlApi
    .mutation(`adicionarCliente(nome: "${cliente.nome}", cpf: "${cliente.cpf}") { id nome }`)
    .then(resposta => resposta.json())
    .then(dados => dados.data.cliente)

const alterarCliente = (id, cliente) =>
  graphqlApi
    .mutation(`atualizarCliente(id: ${id}, nome: "${cliente.nome}", cpf: "${cliente.cpf}") { id nome }`)
    .then(resposta => resposta.json())
    .then(dados => dados.data)

const removerCliente = id => 
  graphqlApi
    .mutation(`deletarCliente(id: ${id})`)

export default {
  listarClientes,
  buscarClientePorId,
  adicionarCliente,
  alterarCliente,
  removerCliente
}
