const SET_COUNT = "SET_NUM" // 设置data
const SET_BOOLEAN = "SET_BOOLEAN" // 设置data
const SET_OBJ = "SET_OBJ" // 设置data
const SET_ARRAY = "SET_ARRAY" // 设置data

const initTest = {
    count: 1,
    flag: true,
    obj: {
        name: '张三',
        age: 14,
        do: true
    },
    arr: [1, 'q', 3]
}

export const setNum = (data) => ({ type: SET_COUNT, data })
export const setBoolean = (data) => ({ type: SET_BOOLEAN, data })
export const setObj = (data) => ({ type: SET_OBJ, data })
export const setArray = (data) => ({ type: SET_ARRAY, data })


const testReducer = (state = initTest, action) => {
    switch (action.type) {
        // 设置data值
        case SET_COUNT:
            console.log(action.data)
            return {...state,  ...action.data}
        case SET_BOOLEAN:
            return {...state,  ...action.data}
        case SET_OBJ:
            return {...state, obj: {...action.data}}
        case SET_ARRAY:
            return {...state,  ...action.data}
        default:
            return state
    }
}

export default testReducer