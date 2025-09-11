import React from 'react'

const Singlecard = ({ image, name, description, author }) => {
    return (
        <div className='border-2 w-lg'>
            <img src={image} alt="" />
            <h1>{name}</h1>
            <p>{description}</p>
            <p>By {author}</p>

        </div>
    )
}

export default Singlecard
