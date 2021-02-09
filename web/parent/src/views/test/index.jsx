import React from 'react'
import { connect } from 'react-redux'
import { setNum, setBoolean, setObj, setArray } from '../../store/module/test'

function Test(props) {
    const { count, flag, obj, arr, setNum, setBoolean, setObj, setArray } = props
    console.log(props)
    const editNum = () => {
        console.log('修改count-----' + count)
        setNum({ count: count + 1 })
    }
    const editFlag = () => {
        console.log('修改flag-----' + flag)

        setBoolean({flag: !flag})
    }
    const editObj = () => {
        console.log('修改obj-----' + obj.name + obj.age)

        setObj({ name: '李四', age: 18, do: !obj.do })
    }
    const editArray = () => {
        console.log('修改数组-----' + arr)

        setArray({arr: ['a', 'b', 'c']})
    }
    return (
        <div>
            <div className="count-test">
                <div onClick={editNum}>修改count----------{count}</div>
                <div onClick={editFlag}>修改flag----------{`${flag}`}</div>
                <div onClick={editObj}>修改obj----------{`我是${obj.name},今年${obj.age}岁了,${obj.do}`}</div>
                <div onClick={editArray}>修改arr----------{arr}</div>
            </div>
        </div>
    )
}

export default connect(
    ({ testReducer }) => (
        {
            count: testReducer.count,
            flag: testReducer.flag,
            obj: testReducer.obj,
            arr: testReducer.arr
        }
    ),
    {
        setNum, setBoolean, setObj, setArray
    }
)(Test)