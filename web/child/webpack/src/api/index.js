import axios from 'axios'

export const testProxy = () => {
    axios.get('/api/test').then(res => {
        console.log(res.data)
    })
}