import React from 'react'
import {Button} from 'antd'
import { conmmon } from '../common/index';
import '../style/index.css'
import '../style/index.less'
function One() {
    return (
        <div className="react-box">这是路由一{conmmon(1)}<Button type="primary">路由一</Button></div>
    )
}
export default One