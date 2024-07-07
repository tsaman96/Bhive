import React from 'react'

const Topbar = () => {
    return (
        <nav className="top-bar">
            <div>
                <img
                    src={`${process.env.PUBLIC_URL}/images/logo.svg`}
                    alt="logo"
                />
            </div>
            <div className="top-bar__telephone">
                <img
                    src={`${process.env.PUBLIC_URL}/images/telephone.svg`}
                    alt="contact"
                />
            </div>
        </nav>
    )
}

export default Topbar
