import React, { useState, useContext, useEffect } from 'react'
import { FormContext } from '../formContext'
import { debounce, deepClone } from '../../utils/index'

function InputEdit({ title, content, order, type }) {
    const { addEditData } = useContext(FormContext)
    const [inputData, setInputData] = useState(deepClone(content))

    useEffect(() => {
        addEditData({ title, content: inputData, type }, true, order)
    }, [inputData])

    const editData = (index, event, item) => {
        debounce(() => {
                setInputData((inputData) => {
                    item.value = event.target.value
                    inputData.splice(index, 1,
                        item
                    )
                    // inputData[index] = item
                    return inputData
                })
            }
        )()

    }

    return (
        <div className="input-edit-warpper">
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

export default InputEdit