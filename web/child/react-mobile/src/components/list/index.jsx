import React from 'react'
import classnames from 'classnames'
import './style/index.scss'

function List(props) {
    const {
        style,
        className,
        children,
        renderHeader,
        renderFooter,
        ...restProps
    } = props

    const prefixCls = 'am-list'

    const wrapCls = classnames(prefixCls, className)
    return (
        <div style={style} className={wrapCls} {...restProps}>
            {renderHeader
                ? (
                    <div>123</div>
                )
                : null}
            {children
                ? (
                    <div className={prefixCls + '-body'}>{children}</div>
                )
                : null}
            {renderFooter
                ? (
                    <div>456</div>
                )
                : null}
        </div>
    )
}
export default List
