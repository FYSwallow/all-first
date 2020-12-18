import React, {useState} from 'react'

import {
    CloseOutlined,
    SettingOutlined
} from '@ant-design/icons'

import './rightPanel.scss'
function RightPanel(props) {
    const [show, setShow] = useState(false)
    const buttonTop = 260
    const theme = 'red'

    // 设置窗口显示配置
    function closeRightPanel () {
        setShow(!show)
    }

    return (
        <div className={["rightPanel-container", show? 'show': null].join(" ")}>
            <div className="rightPanel-background" onClick={closeRightPanel}></div>
            <div className="rightPanel">
                <div className="handle-button" style={{top: buttonTop + 'px', 'bacgroundColor': theme}} onClick={closeRightPanel}>
                    {show? <CloseOutlined />: <SettingOutlined />}
                </div>
                <div className="rightPanel-items">
                    <div className="drawer-container">
                        <div className="drawer-title">
                            <span>页面样式设置</span>
                        </div>
                        <div className="drawer-item">
                            <span>主题颜色</span>
                        </div>
                        <div className="drawer-item">
                            <span>标签栏显示</span>
                        </div>
                        <div className="drawer-item">
                            <span>头部布局</span>
                        </div>
                        <div className="drawer-item">
                            <span>logo展示</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightPanel