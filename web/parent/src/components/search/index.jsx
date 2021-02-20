import React, { useState } from 'react'
import classnames from 'classnames'
import { Select } from 'antd'
import { Link } from 'react-router-dom'
import {
    SearchOutlined
} from '@ant-design/icons'
import { businessRouteListTotal } from '../../router/utils'
import './index.scss'

const { Option } = Select

let timeout

function SearchInput(props) {
    const [data, setData] = useState([])
    const [value, setValue] = useState('')

    const handleSearch = (value) => {
        if (value) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            const getSelectList = () => {
                const selectList = []
                businessRouteListTotal.forEach(item => {
                    if (item.meta.title.indexOf(value) !== -1) {
                        selectList.push(item)
                    }
                })
                setData(selectList)
            }
            getSelectList()
            timeout = setTimeout(getSelectList(), 3000)
        } else {
            setData([])
        }
    }

    return (
        <Select
            showSearch
            value={value}
            placeholder='搜索'
            showArrow={false}
            onSearch={handleSearch}
            onChange={(value) => setValue(value)}
            className='search-input'
            bordered={false}
            notFoundContent={null}
        >
            {data.map(d => <Option key={d.path}><Link to={d.path}>{d.meta.title}</Link></Option>)}
        </Select>
    );
}
function Search(props) {
    const { className } = props
    const [show, setShow] = useState(false)

    return (
        <div className={classnames("search-container", className, { 'show': show })}>
            <SearchOutlined onClick={() => setShow(!show)} />
            <SearchInput/>
        </div>
    )
}

export default Search