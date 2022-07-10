import styled from 'styled-components'


export const MainContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1080px;
    margin: 0 auto;
    @media (max-width: 1080px) {
        max-width: 560px;
    }
`

export const OverviewContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: space-evenly;

    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: #fff;
    text-align: justify;
    overflow: hidden;
    margin-top: 10px;
    transition: all .5s ease-in-out;
    

`

export const H4 = styled.h4`
    font-size: .8rem;
    color: #111;
    margin: 5px auto 10px;
`

export const MovieContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    position: relative;
    width: 220px;

    background-color: #222;
    margin: 20px;
    transition: all 1s ease-in-out;

    &:hover{
        ${OverviewContainer}{
            height: 300px;
            padding: 15px;
            overflow: auto;
            background-color: #222;
            color: #ddd;
        }

        ${H4}{
            color: #ddd;
        }
    }
    @media (max-width: 1080px) {
        max-width: 320px;
    }

    @media (max-width: 720px) {
        max-width: 200px;
    }

    @media (max-width: 480px) {
        max-width: 80%;
    }


`

export const IMG = styled.img`
    width: 100%;
    margin-bottom: 10px;
`

export const H3 = styled.h3`
    font-size: 1rem;
    color: #fff;
    align-self: center;
    text-align: center;
`



export const InfoContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    height: 20px;
    margin: 10px auto 20px;
`

export const VoteAverage = styled.p`
    font-size: .8rem;
    font-weight: bold;
    
`



