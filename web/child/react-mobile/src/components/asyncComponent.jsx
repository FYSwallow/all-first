/**
 * 异步加载
 * */

import React, { useEffect, useState } from 'react'

const asyncComponent = (importComponent) => {
    function AsyncComponent (props) {
        const [component, setComponent] = useState(null)
        useEffect(async () => {
            const { default: Component } = await importComponent()
            document.title = props.route.meta.title
            setComponent(<Component {...props} />)
        }, [])

        return component
    }
    return AsyncComponent
}

export default asyncComponent
