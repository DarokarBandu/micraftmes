'use client'
import React, { useState } from 'react'
import Image from 'next/image'

export default function PortfolioFilter1() {
    const [filter, setFilter] = useState('*')
    
    const items = [
        { category: 'automotive', title: 'Automotive Traceability', img: '/assets/images/resources/ProductionMonitoring.jpg' },
        { category: 'cnc', title: 'CNC Machine Monitoring', img: '/assets/images/resources/DowntimeTracking.jpg' },
        { category: 'electronics', title: 'Electronics Assembly', img: '/assets/images/resources/ExecutionManagement.jpg' },
    ]

    const filteredItems = filter === '*' ? items : items.filter(item => item.category === filter)

    return (
        <div className="portfolio-filter-one" style={{ padding: '80px 0' }}>
            <div className="container">
                <div className="filter-btns text-center mb-5" style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                    <button onClick={() => setFilter('*')} style={{ color: filter === '*' ? 'white' : 'rgba(255,255,255,0.4)', background: 'transparent', border: 'none', fontWeight: 'bold' }}>ALL</button>
                    <button onClick={() => setFilter('automotive')} style={{ color: filter === 'automotive' ? 'white' : 'rgba(255,255,255,0.4)', background: 'transparent', border: 'none', fontWeight: 'bold' }}>AUTOMOTIVE</button>
                    <button onClick={() => setFilter('cnc')} style={{ color: filter === 'cnc' ? 'white' : 'rgba(255,255,255,0.4)', background: 'transparent', border: 'none', fontWeight: 'bold' }}>CNC</button>
                    <button onClick={() => setFilter('electronics')} style={{ color: filter === 'electronics' ? 'white' : 'rgba(255,255,255,0.4)', background: 'transparent', border: 'none', fontWeight: 'bold' }}>ELECTRONICS</button>
                </div>
                <div className="row g-4">
                    {filteredItems.map((item, index) => (
                        <div key={index} className="col-lg-4 col-md-6">
                            <div className="portfolio-item" style={{ position: 'relative', overflow: 'hidden', borderRadius: '15px' }}>
                                <Image src={item.img} alt={item.title} width={400} height={300} style={{ width: '100%', height: 'auto' }} />
                                <div className="overlay" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}>
                                    <h4 style={{ color: 'white', margin: 0 }}>{item.title}</h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
