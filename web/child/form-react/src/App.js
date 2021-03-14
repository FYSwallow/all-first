import React, { useState, useEffect } from 'react'
import LeftNav from './layout/leftnav'
import MainShow from './layout/mainShow'
import PreView from './components/preview/index';
import { FormContext } from './components/formContext'

const initTitle = '第一期问卷'

function App() {
  const [editData, setEditData] = useState([])
  const [title, setTitle] = useState(initTitle)
  const [viewData, setViewData] = useState(null)
  const [preview, setPreview] = useState(true)

  useEffect(() => {
    setPreview(!preview)
  }, [viewData])

  // 修改调研选项
  const addEditData = (params, replace, index) => {
    if (replace) {
      return setEditData(editData => {
        editData.splice(index, 1,
          params
        )
        return [...editData]
      })
    }
    return setEditData([...editData, params])
  }

  // 修改标题
  const editTitle = (title) => {
    setTitle(title)
  }

  //组合数据
  const concatData = () => {
    setViewData({
      title,
      list: editData
    })
  }

  return (
    <div className="form-edit-container">
      <header className="form-edit-header">
        <h3>表单配置化</h3>
      </header>
      <main className="form-edit-warpper">
        <aside className="form-edit-left">
          <LeftNav
            addEditData={addEditData}
          />
        </aside>
        <content className="form-edit-show">
          {
            preview
              ? <PreView viewData={viewData}/>
              : <FormContext.Provider value={{ title, editData, editTitle, addEditData }}>
                <MainShow />
              </FormContext.Provider>
          }

          <button onClick={concatData}>收集数据</button>
        </content>
        <aside className="form-edit-right"></aside>
      </main>
    </div>
  );
}

export default App;
