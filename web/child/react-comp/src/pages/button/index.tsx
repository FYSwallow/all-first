import React from 'react';
import Button from '../../components/button'
import { LoadingOutlined } from '@ant-design/icons';

function ButtonPage() {
    return (
        <div className="page-container">
            <h3 className="page-heading">我是button页面</h3>
            <div className="page-body">
                <div className="page-list">
                    <div className="page-item">
                        <h5>按钮种类</h5>
                        <Button onClick={() => console.log(123)}>通用</Button>
                        <Button type="primary">通用</Button>
                        <Button type="warning">警告</Button>
                        <Button type="danger">危险</Button>
                        <Button type="success">成功</Button>
                        <Button type="text">文字</Button>
                    </div>
                    <div className="page-item">
                        <h5>按钮大小</h5>
                        <Button type="large">超大</Button>
                        <Button>常用大小</Button>
                        <Button type="small">小型</Button>
                        <Button type="mini">超小型</Button>
                    </div>
                    <div className="page-item">
                        <h5>按钮大小</h5>
                        <Button disabled={true}>禁用</Button>
                    </div>
                    <div className="page-item">
                        <h5>按钮大小</h5>
                        <Button icon={<LoadingOutlined />}>图标按钮</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ButtonPage