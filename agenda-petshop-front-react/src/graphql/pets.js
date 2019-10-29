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
