import React from 'react'

const DownloadNow = () => {
    return (
        <div className="download-now">
            <h3>Download our app now</h3>
            <div className="content">
                <div className="footer-image">
                    <img src={`${process.env.PUBLIC_URL}/images/footer.svg`} 
                    alt='mobile-phone'
                    />
                </div>
                <div className="message">
                    <p>
                        Boost your productivity with the BHIVE Workspace app.
                        Elevate your workspace, collaborate efficiently, and
                        unlock exclusive perks.
                    </p>
                    <div className="download-icons">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/google-play.svg`}
                            alt='play-store'
                        />
                        <img
                            src={`${process.env.PUBLIC_URL}/images/app-store.svg`}
                            alt='app-store'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DownloadNow
