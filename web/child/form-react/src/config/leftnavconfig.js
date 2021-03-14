import {
    inputEditProp,
    selectEditProp,
    textareaEditProp
} from '../config/formEditItem'

export const leftNavConfig = [
    {
        type: 'input',
        title: '单选题',
        defaultProps: inputEditProp
    },
    {
        type: 'select',
        title: '多选题',
        defaultProps: selectEditProp
    },
    {
        type: 'texarea',
        title: '文本框',
        defaultProps: textareaEditProp
    }
]

