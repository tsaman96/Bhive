import React from 'react'
import { features } from '../constants/features'

const Features = () => {
    return (
        <div className="features">
            <h3>Why choose us ?</h3>
            <div className="grid-container">
                {features.map((d, index) => (
                    <div className="grid-item">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/${d.icon}.svg`}
                            alt={`icon-${index}`}
                        />{' '}
                        <p>{d.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Features
