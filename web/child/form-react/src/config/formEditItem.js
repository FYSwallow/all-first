import { lazy } from 'react'

const InputEdit = lazy(()=> import('../components/edit/inputEdit'))
const TextareaEdit = lazy(()=> import('../components/edit/textareaEdit'))

const InputView = lazy(()=> import('../components/preview/inputview'))
const SelectView = lazy(()=> import('../components/preview/selectview'))
const TextareaView = lazy(()=> import('../components/preview/textareaview'))

export const inputBaseEditProp = {
    type: 'input',
    title: '请选择一个选项',
    content: [
        { label: 'a', value: "选项1" },
        { label: 'b', value: "选项2" },
        { label: 'c', value: "选项3" },
        { label: 'd', value: "选项4" },
    ]
}
export const inputRadioEditProp = {...inputBaseEditProp, type: 'inputRadio'}
export const inputSelectEditProp = {...inputBaseEditProp, type: 'inputSelect'}
export const inputCheckEditProp = {...inputBaseEditProp, type: 'inputCheck'}

export const textareaEditProp = {
    type: 'textarea',
    title: '请选择一个选项',
    content: '请填写你最想说的一句话'
}

export const componentEditMap = {
    inputRadio: InputEdit,
    inputSelect: InputEdit,
    inputCheck: InputEdit,
    textarea: TextareaEdit
}
export const componentViewMap = {
    input: InputView,
    select: SelectView,
    textarea: TextareaView
}