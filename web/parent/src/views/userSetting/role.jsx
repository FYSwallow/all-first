import React from 'react'
import { Link } from 'react-router-dom'
import {
    Button,
    Table,
    Space,
} from 'antd'
import XLSX from 'xlsx'
import { exportTableData, exportTable} from '@/utils/export.js'


function UserSetting(props) {
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
                    编辑权限
                    {/* <Link>编辑权限</Link> */}
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

    return (
        <div className='role-container'>
            {/* <Button type="primary"><Link to="/permission/role/add">新增</Link></Button> */}
            <Button type="primary" onClick={() => exportTable(exportTableData(data, columns), '人员分析.xlsx')}>导出</Button>
            <Table columns={columns} dataSource={data} id="data-table"/>
        </div>
    )
}

export default UserSetting
