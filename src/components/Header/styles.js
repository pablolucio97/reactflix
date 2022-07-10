import styled from 'styled-components'

export const SearchContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 44px;
    background-color: #444;
`

export const SearchInput = styled.input`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 260px;
    height: 36px;
    background-color: #fff;
    padding: 5px;
    border: none;
    outline: none;
    margin: 10px 20px 10px;
    font-size: 1rem;
    transition: all .3s;

    &:hover{
        background-color: #333;
        border: 2px solid #fff;
        color: #fff;
    }
`

export const SearchButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 72px;
    height: 36px;
    background-color: #11aaff;
    padding: 5px;
    border: none;
    outline: none;
    margin: 10px 20px 10px 5px;
    font-size: 1rem;
    transition: all .3s;

    &:hover{
        background-color: #22aacc;
    }
`