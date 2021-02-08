import React from 'react'
import { Tree } from 'antd'
import { treeMenuList } from '../../router/utils'

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
    const onSelect = (selectedKeys) => {
        console.log(selectedKeys);
    }

    const onCheck = (checkedKeys) => {
        console.log(flatterMenuList(checkedKeys))
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