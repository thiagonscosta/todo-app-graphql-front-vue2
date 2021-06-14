import gql from 'graphql-tag'

export const TODOS = gql`
  query {
    todos {
      id
      title
      done
      createdAt
      updatedAt
    }
  }
`

export const TODO = gql`
  query($id: String!) {
    todo(id: $id) {
      id
      title
      done
      createdAt
      updatedAt
    }
  }
`
export const CREATE_TODO = gql`
  mutation($input: CreateTodoInput!) {
    createTodo(input: $input) {
      id
      title
      done
      createdAt
      updatedAt
    }
  }
`
export const UPDATE_TODO = gql`
  mutation($id: String!, $input: UpdateTodoInput!) {
    updateTodo(input: $input, id: $id) {
      id
      title
      done
      createdAt
      updatedAt
    }
  }
`
export const DELETE_TODO = gql`
  mutation($id: String!) {
    deleteTodo(id: $id)
  }
`

export const CREATE_USER = gql`
  mutation($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      name
      email
    }
  }
`
export const LOGIN = gql`
  mutation($input: AuthInput!) {
    login(input: $input) {
      user {
        id
        name
        email
      }
      token
    }
  }
`
