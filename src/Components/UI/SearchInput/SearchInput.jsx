import React from 'react'
import './SearchInput.css'

export const SearchInput = ({funct}) => {
    return (
        <input className="input_search" onKeyUp={funct} type="text" placeholder="Busque un personaje..." />
    )
}