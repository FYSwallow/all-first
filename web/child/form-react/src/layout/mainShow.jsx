import React, { useContext } from 'react'
import { componentEditMap } from '../config/formEditItem'
import { createComponent } from './../components/createComponent';
import TitleEdit from '../components/edit/titleEdit'
import { FormContext } from './../components/formContext';

function MainShow({ }) {
    const { title, editData, editTitle } = useContext(FormContext)
    return (
        <>
            <h2>
                <input type="text" defaultValue={title} onChange={(event) => editTitle(event.target.value)} />
            </h2>
            {editData.map((item, index) => {
                return (
                    <TitleEdit
                        item={item}
                        order={index}
                        key={index}
                    >
                        {createComponent(componentEditMap[item.type], { ...item, order:index })}
                    </TitleEdit>
                )

            })}
        </>
    )
}

export default MainShow