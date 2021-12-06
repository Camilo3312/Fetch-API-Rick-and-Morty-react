import React from 'react'

export const Button = ({funtion, text}) => {
    return (
        <button className="button" onClick={funtion}>{text}</button>
    )
}