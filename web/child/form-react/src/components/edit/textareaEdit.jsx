import React, { useState, useContext, useEffect } from 'react'
import { FormContext } from '../formContext'
import { debounce, deepClone } from '../../utils/index'

function InputEdit({ title, content, order, type }) {
    const { addEditData } = useContext(FormContext)
    const [inputData, setInputData] = useState(deepClone(content))

    useEffect(() => {
        addEditData({ title, content: inputData, type }, true, order)
    }, [inputData])

    const editData = (event) => {
        debounce(() => setInputData(event.target.value))()
    }

    return (
        <div className="textarea-edit-warpper">
            <section>
                <textarea  cols="30" rows="10" defaultValue={inputData} onChange={editData}></textarea>
            </section>
        </div>
    )
}

export default InputEdit