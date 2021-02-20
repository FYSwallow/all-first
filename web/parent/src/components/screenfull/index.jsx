import React, { useState, useEffect } from 'react'
import screenfull from 'screenfull'
import {
    FullscreenOutlined,
    FullscreenExitOutlined
} from '@ant-design/icons'

function ScreenFull() {
    const [isFullscreen, setFullscreen] = useState(false)

    useEffect(() => {
    }, [isFullscreen])

    const handleClick = () => {
        setFullscreen(!isFullscreen)
        screenfull.toggle()

    }

    return <div onClick={handleClick}  className='right-menu-item'>
        {isFullscreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
    </div>

}

export default ScreenFull