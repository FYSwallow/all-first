import React, { useState, useContext, useEffect } from 'react'
import { FormContext } from '../formContext'

function TitleEdit({ item, order, children }) {
    const { addEditData } = useContext(FormContext)
    const [itemTitle, setItemTitle] = useState(item.title)

    useEffect(() => {
        addEditData({ ...item, title: itemTitle }, true, order)
    }, [itemTitle])

    return (
        <div className="edit-title">
            <h3>
                <input
                    type="text"
                    className="edit-title-input"
                    defaultValue={itemTitle}
                    onChange={(event) => {
                        setItemTitle(event.target.value)
                    }} />
            </h3>
            {children}
        </div>
    )
}

export default TitleEdit
