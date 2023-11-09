const { UserList, MovieList } = require('../seed-data')
const _ = require('lodash')


const resolvers = {
  Query: {
    // USER RESOLVERS
    users: () => {
      return UserList
    },
    user: (parent, args) => {
      const id = args.id
      const user = _.find(UserList, { id: Number(id) })
      return user
    },

    // MOVIE RESOLVERS
    movies: () => {
      return MovieList
    },
    movie: (parent, args) => {
      const title = args.title
      const movie = _.find(MovieList, { title })
      return movie
    }
  },
  User: {
    favoriteMovies: () => {
      return _.filter(MovieList, (movie) => movie.releaseDate >= 2000 && movie.releaseDate <= 2010)   }
  },
  Mutation: {
    createUser: (parent, args) => {
      const newUser = args.input
      // TODO: insert to database table
      newUser.id = UserList.length + 1
      UserList.push(newUser)
      console.log(newUser)
      return newUser
    },
    updateUsername: (parent, args) => {
      const { id, newUsername } = args.input
      let updatedUser
      UserList.forEach((user) => {
        if (user.id ===  Number(id)) {
          user.username = newUsername
          updatedUser = user
        }
      })

      return updatedUser
    },
    deleteUser: (parent, args) => {
      const id = args.id
      _.remove(UserList, (user) => user.id ===  Number(id))
      return null
    }
  }
}

module.exports = { resolvers }
