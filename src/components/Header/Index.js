import React from 'react'

import {BsSearch} from 'react-icons/bs'

import {SearchContainer, SearchInput, SearchButton} from './styles'

export default function Header() {
    return (
        <SearchContainer>
            <SearchInput placeholder='search'/>
            <SearchButton ><BsSearch size={24}/></SearchButton>
        </SearchContainer>
    )
}
