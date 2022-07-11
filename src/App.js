import { useEffect, useState } from 'react'

import Movie from './components/Movies/Movie'
import GlobalStyle from './globalStyles'
import { MainContainer } from './components/Movies/styles'
import { PaginationContainer } from './styles/index'

function App() {

  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [availableFilmes, setAvailableFilmes] = useState(10)

  const baseApiUrl = 'https://api.themoviedb.org/3/search/movie?&api_key='
  const apiKey = process.env.REACT_APP_API_KEY

  useEffect(() => {
    fetch(`${baseApiUrl}${apiKey}&query=${page}`)
      .then(response => response.json()).then(data => {
        setMovies(data.results)
      })
  }, [search, page, apiKey])

  async function searchMovie() {
    try {
      if (search) {
        await fetch(`${baseApiUrl}${apiKey}&query=${search}`)
          .then(response => response.json()).then(data => {
            setMovies(data.results)
          })()
      }
    } catch (error) {
      console.log(error)
    }

  }

  function handleInput(e) {
    return setSearch(e.target.value)
  }

  function handleNextPage() {
    setPage(page + 1)
    setAvailableFilmes(availableFilmes + 10)
  }

  function handlePreviousPage() {
    if (page > 0) {
      setPage(page - 1)
      setAvailableFilmes(availableFilmes - 10)
    }
  }

  return (
    <>
      <GlobalStyle />
      <header>
        <h1>ReactFlix</h1>
        <input
          type="text"
          placeholder='busque por um título'
          onChange={handleInput}
          onKeyPress={searchMovie}
        />
        <button type='button' onClick={searchMovie}>Buscar</button>
      </header>
      <MainContainer>
        <>
        </>
        {
          movies.length > 0 && movies.map((movie, index) => (
            <Movie key={index} {...movie} />
          ))
        }
        {
          !search &&
          <strong>
            Exibindo {availableFilmes} de 5719 filmes disponíveis.
          </strong>
        }
        <PaginationContainer>
          <button
            onClick={handlePreviousPage}
            disabled={page <= 1}
          >
            Anterior
          </button>
          <button
            onClick={handleNextPage}
            disabled={page >= 286}
          >
            Próxima
          </button>
        </PaginationContainer>
      </MainContainer>
    </>
  );
}

export default App;
