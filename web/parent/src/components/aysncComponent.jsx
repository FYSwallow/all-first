import React, { useState, useEffect} from 'react'

/**
 * 异步加载组件
 * @param {*} importComponent 
 * @returns
 */
function asyncComponent(importComponent) {
    function AsyncComponent(props) {
        const [component, setComponent] = useState(null)

        useEffect(() => {
            const fetchComponent = async() => {
                const {default: Component} = await importComponent()
                document.title = props.route.meta.title || 'react-admin'
                setComponent(<Component {...props}></Component>)
            }
            fetchComponent()
        }, [])

        return component
    }
    return AsyncComponent
}

export default asyncComponent
