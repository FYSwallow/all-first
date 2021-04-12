import React from 'react'

function Textarea({ content }) {
    return (
        <textarea
            cols="30"
            rows="10"
            value={content}
            readOnly
        >
        </textarea>
    )
}

export default Textarea