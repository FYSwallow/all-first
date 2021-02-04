import React from 'react'
import classnames from 'classnames'
import './style/index.scss'

function List (props) {
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
            {/* eslint multiline-ternary: ["error", "never"] */ }
            { renderHeader ? (<div className={`${prefixCls}-header`}>
                {typeof renderHeader === 'function' ? renderHeader() : renderHeader }
            </div>
            ) : null}
            { children ? (
                <div className={`${prefixCls}-body`}>{children}</div>
            ) : null}
            { renderFooter ? (
                <div className={`${prefixCls}-footer`}>
                    {typeof renderHeader === 'function' ? renderFooter() : renderFooter }
                </div>
            ) : null}
        </div>
    )
}
export default List
