'use client'
export default function TeamSliderText() {
    return (
        <div className="team-slider-text" style={{ padding: '20px 0', textAlign: 'center' }}>
            {/* Horizontal sliding text or background decoration */}
            <p style={{ 
                fontSize: '120px', 
                fontWeight: '900', 
                color: 'rgba(255,255,255,0.02)', 
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                margin: 0,
                lineHeight: 1
            }}>
                Expert Team • Industrial Excellence • Smart Manufacturing
            </p>
        </div>
    )
}
