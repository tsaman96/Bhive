import React from 'react'

const Header = () => {
    return (
        <header
            style={{
                background: `url(${process.env.PUBLIC_URL}/images/header-left-bg.svg) no-repeat left top / cover`,
            }}
        >
            <h1>
                Host your meeting with world-class amenities. Starting at{' '}
                <span className="text-dark-yellow">₹199/-!</span>
            </h1>
            <div
                style={{
                    background: `url(${process.env.PUBLIC_URL}/images/header-right-bg.svg) no-repeat right top / contain`,
                }}
                className="right-container"
            >
                <img
                    src={`${process.env.PUBLIC_URL}/images/header-right.svg`}
                    alt="video"
                />
            </div>
        </header>
    )
}

export default Header
