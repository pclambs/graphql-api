import React from "react"
import { useQuery, useLazyQuery, gql } from "@apollo/client"

const QUERY_ALL_USERS = gql`
  query GetAllUsers {
    users {
      id
      name
      username
      age
      nationality
      friends {
        name
      }
    }
  }
`

const QUERY_ALL_MOVIES = gql`
  query GetAllMovies {
    movies {
      id
      title
      releaseDate
      isInTheaters
    }
  }
`

const QUERY_MOVIE_BY_NAME = gql`
  query Movie($title: String!) {
    movie(title: $title) {
      title
      releaseDate
    }
  }
`

function DisplayData() {
  const [movieSeached, setMovieSearched] = React.useState('')
  const { data, loading, error } = useQuery(QUERY_ALL_USERS)
  const { data: dataMovies, loading: loadingMovies, error: errorMovies } = useQuery(QUERY_ALL_MOVIES)
  const [fetchMovie, { data: dataMovieSearched, error: errorMovieSearched }] = useLazyQuery(QUERY_MOVIE_BY_NAME)


  if (loading) {
    return <p>Loading...</p>
  }

  if (data) {
    console.log(data)
  }

  if (error) {
    console.log(error)
  }

  if (errorMovieSearched) {
    console.log(errorMovieSearched)
  }

  return (
    <div>
      {data && data.users.map((user) => {
        return (
          <div>
            <h2>Name: {user.name}</h2>
            <h2>Username: {user.username}</h2>
            <h2>Age: {user.age}</h2>
            <h2>Nationality: {user.nationality}</h2>
            <h2>Friends: {user.friends.name}</h2>
          </div>
        )
      })}

      {dataMovies && dataMovies.movies.map((movie) => {
        return (
          <div>
            <h2>Title: {movie.title}</h2>
          </div>
        )
      })}
      <h1>Search for a movie</h1>
      <div>
        <input
          type="text"
          placeholder="Movie Title"
          onChange={(event) => {
            setMovieSearched(event.target.value
            )
          }}
        />
        <button onClick={() => {
          fetchMovie({
            variables: {
              title: movieSeached
            }
          })
        }}
        >Fetch Data
        </button>
        <div>
          {dataMovieSearched && (
            <div>
              <h2>Title: {dataMovieSearched && dataMovieSearched.movie.title}</h2>
              <h2>Release Date: {dataMovieSearched && dataMovieSearched.movie.releaseDate}</h2>
            </div>
          )}
          {errorMovieSearched && <h1>Movie not found</h1>}
        </div>
      </div>
    </div>
  )
}

export default DisplayData