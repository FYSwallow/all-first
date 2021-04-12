import React, { useState } from 'react'
import {
    Tree,
    Form,
    Input
} from 'antd'
import { treeMenuList } from '../../router/utils'

function EditUser() {
    const onSelect = (selectedKeys) => {
        console.log(selectedKeys);
    }

    const onCheck = (checkedKeys) => {
        // flatterMenuList(checkedKeys)
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
    )
}

export default EditUser