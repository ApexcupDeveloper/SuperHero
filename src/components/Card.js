import React from 'react'
import '../assets/css/card.css'

export default function Card(props) {

    return (
        <div className="card-container">
            <div className="card-img-container">
                <img src="https://www.superherodb.com/pictures2/portraits/10/100/639.jpg" alt="hero" />
            </div>
            <div className="card-body">
                <div className="card-name-container">
                </div>
                <div className="card-name">Negasonic Teenage Warhead</div>
                <div className="card-gender">gender</div>
                <div className="card-fullname">Full Name</div>
                <div className="card-place">place-of-birth</div>
            </div>
        </div>
    )
}