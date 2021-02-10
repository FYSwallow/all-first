import React, { useState } from 'react'
import {
    Tree,
    Button,
    Table,
    Space,
    Modal,
    Form,
    Input,
    Select
} from 'antd'
import { treeMenuList } from '../../router/utils'

const FormSizeDemo = (props) => {
    
    const onSelect = (selectedKeys) => {
        console.log(selectedKeys);
    }

    const onCheck = (checkedKeys) => {
        flatterMenuList(checkedKeys)
    }
    return (
        <>
            <Form
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
            >
                <Form.Item label="角色名">
                    <Input />
                </Form.Item>
                <Form.Item label="角色介绍">
                    <Input />
                </Form.Item>
                <Form.Item label="编辑权限">
                    <Tree
                        checkable
                        defaultExpandAll
                        treeData={treeMenuList}
                        onSelect={onSelect}
                        onCheck={onCheck}
                    />
                </Form.Item>
            </Form>
        </>
    );
}

function flatterMenuList(list) {
    const resultItem = []
    list.forEach(item => {
        const itemArr = item.split('/')
        if (itemArr.length <= 2) {
            if (resultItem.includes(item)) return
            resultItem.push(item)
        } else {
            let preVal
            itemArr.forEach((val, index) => {
                if (index > 1) {
                    preVal = '/' + itemArr[index - 1] + '/' + val
                } else if (index === 1) {
                    preVal = '/' + val
                } else {
                    return
                }
                if (resultItem.includes(preVal)) return
                resultItem.push(preVal)
            })
        }
    });

}

function UserSetting(props) {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const columns = [
        {
            title: '角色名',
            dataIndex: 'role',
            key: 'role',
            render: text => <a>{text}</a>,
        },
        {
            title: '角色介绍',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: '创建时间',
            dataIndex: 'createTime',
            key: 'createTime',
        },
        {
            title: '权限设置',
            dataIndex: 'permission',
            key: 'permission',
            render: role => (
                <Space size="middle">
                    <a  onClick={showModal}>编辑权限</a>
                </Space>
            ),
        },
        {
            title: '操作',
            key: 'role',
            dataIndex: 'role',
            render: role => (
                <Space size="middle">
                    <a>编辑</a>
                    <a>删除</a>
                </Space>
            ),
        }
    ]
    
    const data = [
        {
            key: '1',
            role: 'admin',
            phone: 13288487566,
            createTime: Date.now() - 3600000,
            description: '管理员'
        },
        {
            key: '2',
            role: 'editor',
            phone: 13388487566,
            createTime: Date.now() - 3600000,
            description: '普通用户'
    
        },
        {
            key: '3',
            role: 'guest',
            phone: 15265445933,
            createTime: Date.now() - 3600000,
            description: '游客预览'
        },
    ]
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };


    return (
        <div className='role-container'>
            <Button type="primary" onClick={showModal}>新增角色</Button>
            <Table columns={columns} dataSource={data} />
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <FormSizeDemo />
            </Modal>

        </div>
    )
}

export default UserSetting