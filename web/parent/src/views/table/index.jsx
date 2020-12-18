import React from 'react'
import { Table, Tag, Space, Input, DatePicker, Button } from 'antd'

// import moment from 'moment';
import TreeList from '../../components/treeList/index'
import './table.scss'
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
            <>
                {tags.map(tag => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <Space size="middle">
                <a>Invite {record.name}</a>
                <a>Delete</a>
            </Space>
        ),
    },
];
const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];
function onChange(date, dateString) {
    console.log(date, dateString);
}
function MyTable(props) {
    return (
        <div className='table-container'>
            <div className="table-left">
                <TreeList />
            </div>
            <div className="table-right">
                <div className="table-search">
                    <div className="search-list">
                        <Input placeholder="请输入标题内容" />
                    </div>
                    <div className="search-list">
                        <Input placeholder="请输入标题内容" />
                    </div>
                    <div className="search-list">
                        <DatePicker onChange={onChange} />
                    </div>
                </div>
                <div className="table-toobar">
                    <div className="toobar-list">
                        <Button type="primary">新增</Button>
                    </div>
                    <div className="toobar-list">
                        <Button>编辑</Button>
                    </div>
                    <div className="toobar-list">
                        <Button danger>删除</Button>
                    </div>
                </div>
                <Table columns={columns} dataSource={data} />
            </div>
        </div>
    )
}

export default MyTable
