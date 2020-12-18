import React from 'react'

import { Card } from 'antd'

export default function CardItem(props) {
    return (
        <div>
            <Card title={props.title}  style={{ width: 300 }}>
                <p>{props.content}</p>
            </Card>
        </div>
    )
}