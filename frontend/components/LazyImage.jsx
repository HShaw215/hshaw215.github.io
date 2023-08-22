import React from 'react';
import hunter from '/Users/huntershaw/codingPrep/personal-site/frontend/assets/hunterwide.webp'

const LazyImage = () => {
    return (
        <img src={hunter} class="pic" alt="Hunter Shaw"></img>
    )
}

export default LazyImage;