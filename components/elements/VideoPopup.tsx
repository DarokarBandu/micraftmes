"use client"
import { useState } from 'react'

export default function VideoPopup() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="video-main-one__icon">
                <a onClick={() => setIsOpen(true)} className="video-popup cursor-pointer" style={{ cursor: 'pointer' }}>
                    <span className="icon-play-button-1"></span>
                    <i className="ripple"></i>
                </a>
            </div>

            {isOpen && (
                <div className="video-modal-overlay" onClick={() => setIsOpen(false)} 
                     style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0,0,0,0.9)',
                        zIndex: 9999,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                     }}>
                    <div className="video-modal-content" onClick={e => e.stopPropagation()} style={{ position: 'relative', width: '80%', maxWidth: '900px', aspectRatio: '16/9' }}>
                        <iframe 
                            width="100%" 
                            height="100%" 
                            src="https://www.youtube.com/embed/L61p2uyiMSo?autoplay=1" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                        </iframe>
                        <button onClick={() => setIsOpen(false)} style={{ position: 'absolute', top: '-40px', right: '-40px', background: 'none', border: 'none', color: '#fff', fontSize: '40px', cursor: 'pointer' }}>&times;</button>
                    </div>
                </div>
            )}
        </>
    )
}
