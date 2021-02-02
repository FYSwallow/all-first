import React from 'react'
import classnames from 'classnames'

function List (props) {
    const {
        style,
        className,
        children,
        renderHeader,
        renderFooter,
        ...restProps
    } = props

    const wrapCls = classnames(className)
    return (
        <div style={style} className={wrapCls} {...restProps}>
            { renderHeader
                ? (
                    <div>123</div>
                )
                : null}
            {children}
        </div>
    )
}
export default List
