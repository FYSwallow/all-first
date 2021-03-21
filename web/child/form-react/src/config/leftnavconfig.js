import {
    inputRadioEditProp,
    inputCheckEditProp,
    inputSelectEditProp,
    textareaEditProp
} from '../config/formEditItem'

export const leftNavConfig = [
    {
        type: 'inputRadio',
        title: '单选题',
        defaultProps: inputRadioEditProp
    },
    {
        type: 'inputCheck',
        title: '多选题',
        defaultProps: inputCheckEditProp
    },
    {
        type: 'inputSelect',
        title: '下拉题',
        defaultProps: inputSelectEditProp
    },
    {
        type: 'texarea',
        title: '文本框',
        defaultProps: textareaEditProp
    }
]

