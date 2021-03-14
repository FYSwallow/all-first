import React, { useState, useContext, useEffect } from 'react'
import { FormContext } from '../formContext'

function SelectEdit({ title, content, order, type }) {
    const { addEditData } = useContext(FormContext)
    const [inputData, setInputData] = useState(content)

    useEffect(() => {
        addEditData({title, content: inputData, type}, true, order)
    }, [inputData])

    const editData = (index, event, item) => {
        setInputData((inputData) => {
            item.value = event.target.value
            inputData.splice(index, 1,
                item
            )
            inputData[index] = item

            return [...inputData]
        })
    }

    return (
        <div className="select-edit-warpper">
            <section>
                {
                    inputData.map((item, index) => {
                        return (
                            <label key={index}>{item.label}
                                <input
                                    type="text"
                                    defaultValue={item.value}
                                    onChange={
                                        (e) => editData(index, e, item)
                                    }
                                />
                            </label>
                        )
                    })
                }
            </section>
        </div>
    )
}

export default SelectEdit