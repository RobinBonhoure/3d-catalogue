"use client"

import { useEffect, useRef } from 'react'



export default function Loader(props) {
    const loading = props.progress < 100
    const loadingBar = useRef(null)
    useEffect(() => {
        loadingBar.current.style.transform = `scaleX(${props.progress / 100})`
        loadingBar.current.style.transition = 'transform 0.5s, opacity 1s'
    }, [props.progress])
    return (
        <>
            <div className={loading ? 'loader active' : 'loader'}>
                <h1>Loading...</h1>
                <div className="loading-bar_container">
                    <div ref={loadingBar} className="loading-bar"></div>
                </div>
            </div>
        </>
    )
}