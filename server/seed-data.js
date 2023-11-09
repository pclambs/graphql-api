const UserList = [
  {
    id: 1,
    name: 'John Doe',
    username: 'johndoe',
    age: 27,
    nationality: 'AMERICAN',
    friends: [
      {
        id: 2,
        name: 'Jane Doe',
        username: 'janedoe',
        age: 25,
        nationality: 'BRITISH',
      }
    ]
  },
  {
    id: 2,
    name: 'Jane Doe',
    username: 'janedoe',
    age: 25,
    nationality: 'BRITISH',
    friends: [
      {
        id: 1,
        name: 'John Doe',
        username: 'johndoe',
        age: 27,
        nationality: 'AMERICAN',
      }
    ]
    
  },
  {
    id: 3,
    name: 'John Smith',
    username: 'johnsmith',
    age: 30,
    nationality: 'CANADIAN',
    friends: [
      {
        id: 1,
        name: 'John Doe',
        username: 'johndoe',
        age: 27,
        nationality: 'AMERICAN',
      }
    ]
    
  },
  {
    id: 4,
    name: 'Jane Smith',
    username: 'janesmith',
    age: 31,
    nationality: 'AUSTRALIAN',
    friends: [
      {
        id: 3,
        name: 'John Smith',
        username: 'johnsmith',
        age: 30,
        nationality: 'CANADIAN',
      },
      {
        id: 1,
        name: 'John Doe',
        username: 'johndoe',
        age: 27,
        nationality: 'AMERICAN',
      }
    ]  
  }
]

const MovieList = [
  {
    id: 1,
    title: 'The Matrix',
    releaseDate: 1999,
    isInTheaters: false
  },
  {
    id: 2,
    title: 'The Matrix Reloaded',
    releaseDate: 2003,
    isInTheaters: false
  },
  {
    id: 3,
    title: 'The Matrix Revolutions',
    releaseDate: 2003,
    isInTheaters: false
  },
  {
    id: 4,
    title: 'The Matrix 4',
    releaseDate: 2021,
    isInTheaters: true
  }
]

module.exports = { UserList, MovieList }