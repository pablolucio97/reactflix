import React from 'react'
import {MainContainer, MovieContainer, IMG, H3, H4, InfoContainer, VoteAverage, 
    OverviewContainer
} from './styles'

const IMG_API = 'https://image.tmdb.org/t/p/w1280'


const Movie = ({title, overview, poster_path, vote_average}) => {
    return(
        <MainContainer>
            <MovieContainer>
                <IMG src={IMG_API + poster_path} alt={title}/>
                <InfoContainer>
                    <H3>{title}</H3>
                    <VoteAverage style={{color: vote_average > 5? '#33ddaa' : '#ff0'}}>
                        {'⭐' + vote_average}
                    </VoteAverage>
                </InfoContainer>
                <OverviewContainer>
                    <H4>Overview:</H4>
                    <p>{overview}</p>
                </OverviewContainer>
            </MovieContainer> 
         </MainContainer> 
    )
}

export default Movie