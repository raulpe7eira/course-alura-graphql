import gql from 'graphql-tag'

export const LISTAR_PETS = gql`
  query {
    pets {
      id
      nome
      tipo
      observacoes
      dono {
        id
        nome
      }
    }
  }
`

export const ADICIONAR_PET = gql`
  mutation adicionarPet(
    $nome: String!,
    $donoId: Int!,
    $tipo: String,
    $observacoes: String
  ) {
    adicionarPet(
      nome: $nome
      donoId: $donoId
      tipo: $tipo
      observacoes: $observacoes
    ) {
      nome
    }
  }
`
