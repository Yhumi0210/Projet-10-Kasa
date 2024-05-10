import React from 'react'

const RentalTags = ({ tags }) => {
    return (
        <div className="rental__boxtag">
            {tags.map((tag, index) => (
                <div key={index} className="rental__boxtag__tags">
                    {tag}
                </div>
            ))}
        </div>
    )
}

export default RentalTags