import {useEffect, useState} from 'react'
import Movie from './components/Movies/Movie'
import Header from './components/Header/Index'

import GlobalStyle from './globalStyles'
import {MainContainer} from './components/Movies/styles'


function App() {

  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')

useEffect(async () => {
  await fetch('https://api.themoviedb.org/3/search/movie?&api_key=430d44ac1cf4ba6e8d2bb9aa79e4b544&query=1').then(response => response.json()).then(data => {
   setMovies(data.results)
 })
}, [])


  async function searchMovie(){
    try {
      await fetch(`https://api.themoviedb.org/3/search/movie?&api_key=430d44ac1cf4ba6e8d2bb9aa79e4b544&query=${search}`).then(response => response.json()).then(data => {
        setMovies(data.results)
      })()
    } catch (error) {
      console.log(error)
    }
    
  }

  function handleInput(e){
    return setSearch(e.target.value)
  }

  return (
    <>
      <GlobalStyle/>
          <MainContainer>
            <>
            <header>
              <h1>ReactFlix</h1>
              <input type="text" onChange={handleInput}/>
              <button type='button' onClick={searchMovie}>Search</button>
            </header>
            </>
            {
              movies.length > 0 && movies.map((movie, index) => (
                <Movie key={index} {...movie}/>
                ))
            }
       </MainContainer>
    </>
  );
}

export default App;
