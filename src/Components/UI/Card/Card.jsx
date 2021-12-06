import React from 'react'
import './Card.css'
import Wabe from '../../../Assets/images/Wabe2.svg'

export const Card = ({info}) => {
    const {name, image} = info

    return (
        <div className="card">        
            <div className="image_card">
                <img src={image} alt="" />
                <img className="wabe" src={Wabe} alt="" />
            </div>
            <div className="info_card">
                <p>{name}</p>   
            </div>
        </div>
    )
}