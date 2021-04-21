// 数组转树
export const transTree = (arrList) => {
    if (Array.isArray(arrList) && arrList.length) {
        // 找出最高层级
        const rootList = arrList.filter(item => item.pId === null);
        // 找出子节点 并循坏递归
        const addChild = (node, dataList) => {
            console.log(node, dataList)
            const children = dataList.filter(item => item.pId === node.id).map(item => {
                return addChild(item, dataList)
            });
            return { ...node, children }
        }
        return rootList.map(node => {
            return addChild(node, arrList)
        })
    }
    return arrList;
}