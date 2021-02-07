import React from 'react'
import { Tree } from 'antd'
import { treeMenuList } from '../../router/utils'

function UserSetting(props) {
    const onSelect = (selectedKeys) => {
        console.log(selectedKeys);
    }

    const onCheck = (checkedKeys ) => {
        console.log(checkedKeys);
    }

    return (
        <div>
            <Tree
                checkable
                defaultExpandAll
                treeData={treeMenuList}
                onSelect={onSelect}
                onCheck={onCheck}
            />
        </div>
    )
}

export default UserSetting