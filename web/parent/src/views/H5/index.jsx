import React from 'react'
import { Card } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons'
import './index.scss'

const YuYiHua = () =>
    <Card title="语义化标签" style={{ width: 400, height: 280 }} className="yuyihua">
        <header>
            header
            <nav>
                nav
            </nav>
        </header>
        <main>
            main
        </main>
        <aside>
            aside
        </aside>
        <div style={{ clear: 'both' }}></div>
        <footer>
            footer
        </footer>
    </Card>

const Style = () =>
    <Card title="样式" style={{ width: 400, height: 280 }} className="yuyihua">
        
    </Card>
function H5() {
    return (
        <div className="h5-container">
            <div className="h5-list">
                <YuYiHua />
                <div style={{ margin: 'auto' }}><ArrowRightOutlined style={{
                    fontSize: 40,
                    color: '#000'
                }} /></div>
                <Style />
            </div>

        </div>
    )
}

export default H5