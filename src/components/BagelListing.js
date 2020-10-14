import React from 'react'
import './BagelListing.css'

export default function BagelListing({ type, rating }) {
    return (
        <div>
            <p>{type}: {rating}</p>
        </div>
    )
}
