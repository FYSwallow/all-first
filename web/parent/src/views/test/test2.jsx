import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setNum, setBoolean, setObj, setArray } from '../../store/module/test'

function Test(props) {
    const { count, flag, obj, arr } = useSelector(({ testReducer }) => ({
        count: testReducer.count,
        flag: testReducer.flag,
        obj: testReducer.obj,
        arr: testReducer.arr
    }))
    const dispatch = useDispatch()

    const editNum = useCallback(
        () => dispatch(setNum({ count: count + 1 })),
        [count, dispatch]
    )
    const editFlag = useCallback(
        () => dispatch(setBoolean({ flag: !flag })),
        [dispatch, flag]
    )

    const editObj = useCallback(
        () => dispatch(setObj({ name: '李四', age: 18, do: !obj.do })),
        [dispatch, obj.do]
    )

    const editArray = useCallback(
        () => dispatch(setArray({ arr: ['a', 'b', 'c'] })),
        [dispatch]
    )
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

export default Test