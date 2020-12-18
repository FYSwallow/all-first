const microApps = [
  {
    name: 'sub-react',
    entry: '//localhost:7777',
    activeRule: '/sub-react',
    container: '#subapp-viewport', // 子应用挂载的div
  }
]

// const apps = microApps.map(item => {
//   return {
//     ...item,
//     container: '#subapp-viewport', // 子应用挂载的div
//     props: {
//       routerBase: item.activeRule, // 下发基础路由
//       getGlobalState: store.getGlobalState // 下发getGlobalState方法
//     }
//   }
// })

export default apps
