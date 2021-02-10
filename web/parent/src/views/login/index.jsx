import React from 'react'
import { connect } from 'react-redux'
import { Form, Input, Button, Card } from 'antd';
import { reqLogin } from '../../store/module/user'

import './login.scss'

const layout = {
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 16,
    },
}
const tailLayout = {
    wrapperCol: {
        offset: 4,
        span: 16,
    },
}
function Login(props) {
    const hash = props.location.search.replace('?redirectUrl=', '')
    const onFinish = async (values) => {
        props.reqLogin(values)
        props.history.replace({ pathname: hash || '/' })
    }
    return (
        <div className="login">
            <Card title="用户登录" className="login-card">
                <Form
                    {...layout}
                    name="login"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    // eslint-disable-next-line react/jsx-no-duplicate-props
                    initialValues={{
                        username: '张三',
                        password: '123456',
                    }}
                >
                    <Form.Item
                        label="用户名"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: '请输入用户名!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="密码"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: '请输入密码!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit"> 登录</Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

export default connect(
    () => ({}),
    { reqLogin }
)(Login)
