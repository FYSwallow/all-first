import React from 'react'
import PreViewWarpper from './title';
import { createComponent } from '../createComponent';
import { componentViewMap } from '../../config/formEditItem'

function PreView({ viewData }) {
    console.log(viewData)
    return (
        <>
            { viewData
                ? <div>
                    < h3 > {viewData.title}</h3 >
                    {
                        viewData.list.map((item, index) => {
                            return (
                                <PreViewWarpper
                                    info={item}
                                    key={index}
                                    order={index}
                                >
                                    {createComponent(componentViewMap[item.type], { ...item, order: index })}
                                </PreViewWarpper>
                            )
                        })
                    }
                </div >
                : null
            }
        </>
    )
}

export default PreView