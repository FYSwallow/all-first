import React, { Component } from 'react';

import './index.scss'

class Semantic extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="decorate-container">
                <div className="decorate-left">
                    设置
                </div>
                <div className="decorate-md">
                    显示
                </div>
                <div className="decorate-right">
                    配置
                </div>
            </div>
        );
    }
}

export default Semantic;