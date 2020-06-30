import React from 'react'

export default function NotFound() {
    return (
        <div className="not-found">
            <svg viewBox="0 0 960 300">
                <symbol id="s-text">
                    <text textAnchor="middle" x="50%" y="50%">404</text>
                </symbol>

                <g className="g-ants">
                    <use xlinkHref="#s-text" className="text"></use>
                    <use xlinkHref="#s-text" className="text"></use>
                    <use xlinkHref="#s-text" className="text"></use>
                    <use xlinkHref="#s-text" className="text"></use>
                    <use xlinkHref="#s-text" className="text"></use>
                </g >
            </svg >

            <h1>Page Not Found</h1>
            <a href="/">Back to Home</a>
        </div >
    )
}