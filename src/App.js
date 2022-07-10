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

  useEffect(async () => {
    await fetch(`https://api.themoviedb.org/3/search/movie?&api_key=430d44ac1cf4ba6e8d2bb9aa79e4b544&query=${page}`).then(response => response.json()).then(data => {
      setMovies(data.results)
      console.log(movies.length)
    })
  }, [search, page])


  async function searchMovie() {
    try {
      if (search) {
        await fetch(`https://api.themoviedb.org/3/search/movie?&api_key=430d44ac1cf4ba6e8d2bb9aa79e4b544&query=${search}`).then(response => response.json()).then(data => {
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
    console.log(page)
  }

  function handlePreviousPage() {
    if (page > 0) {
      setPage(page - 1)
      setAvailableFilmes(availableFilmes - 10)
    }
    console.log(page)
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
          <strong>Exibindo {availableFilmes} de 5719 filmes disponíveis.</strong>
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
