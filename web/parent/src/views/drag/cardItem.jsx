import React from 'react'

import { Card } from 'antd'

export default function CardItem({title, content}) {
    return (
        <div>
            <Card title={title}  style={{ width: 300 }}>
                <p>{content}</p>
            </Card>
        </div>
    )
}