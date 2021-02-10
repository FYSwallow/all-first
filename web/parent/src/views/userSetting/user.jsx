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


const FormSizeDemo = () => {
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
                <Form.Item label="用户名">
                    <Input />
                </Form.Item>
                <Form.Item label="手机号">
                    <Input />
                </Form.Item>
                <Form.Item label="角色">
                    <Select>
                        <Select.Option value="demo">Demo</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Button">
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

const columns = [
    {
        title: '登录名',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: '手机号',
        dataIndex: 'phone',
        key: 'phone',
    },
    {
        title: '创建时间',
        dataIndex: 'createTime',
        key: 'createTime',
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
];
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

const data = [
    
]

function UserSetting(props) {
    const [isModalVisible, setIsModalVisible] = useState(false);

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