import React from 'react'

const EmbeddedMap = () => {
    return (
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3034.395847957664!2d55.30007835900746!3d25.25291447466522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43000ab4b8ed%3A0xb841c92a2428953c!2sBurjuman%20Business%20Tower!5e0!3m2!1sen!2sin!4v1763803456604!5m2!1sen!2sin"
            className='border-none w-full h-[45vh] '
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
    )
}

export default EmbeddedMap
