import React, { useState } from 'react'
import UnknownHero from '../assets/imgs/unknown.png'
import '../assets/css/card.css'

export default function Card(props) {
    const [imgStatus, setImgStatus] = useState('loading')

    const onLoadImage = () => {
        setImgStatus('loaded')
    }

    const onErrorImage = () => {
        setImgStatus('error')
    }

    const lessString = (value) => {
        let newValue = ''
        if(value.length > 18) {
            newValue = value.substring(0, 15) + '...'
        } else {
            newValue = value
        }
        return newValue
    }

    const { data, onSelect, clickMore, status } = props

    return (
        <div className={`card-container ${status}`} onClick={onSelect}>
            <div className="card-img-container">
                {
                    imgStatus === 'error' ? (
                        <img
                            src={UnknownHero}
                            alt="hero-error"
                        />
                    ) : (
                        <img
                            src={data.image.url}
                            alt="hero"
                            loading="lazy"
                            onLoad={onLoadImage}
                            onError={onErrorImage}
                        />
                    )
                }
            </div>
            <div className="card-body">
                <div className="card-name"><span>Name: </span>{data.name}</div>
                <div className="card-name"><span>Gender: </span>{data.appearance.gender}</div>
                <div className="card-name"><span>Full Name: </span>{lessString(data.biography["full-name"])}</div>
                <div className="card-name"><span>Place of Birth: </span>{lessString(data.biography["place-of-birth"])}</div>
                <div className="card-learn" onClick={clickMore}>Learn more</div>
            </div>
        </div>
    )
}