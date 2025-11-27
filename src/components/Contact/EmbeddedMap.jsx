import React from 'react'

const EmbeddedMap = ({ locationURL }) => {
    return (
        <iframe src={locationURL}
            className='border-none w-full h-[45vh] '
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
    )
}

export default EmbeddedMap
