import React, { lazy } from 'react'

const InputEdit = lazy(()=> import('../components/edit/inputEdit'))
const SelectEdit = lazy(()=> import('../components/edit/selectEdit'))
const TextareaEdit = lazy(()=> import('../components/edit/textareaEdit'))

const InputView = lazy(()=> import('../components/preview/inputview'))
const SelectView = lazy(()=> import('../components/preview/selectview'))
const TextareaView = lazy(()=> import('../components/preview/textareaview'))

export const inputEditProp = {
    type: 'input',
    title: '请选择一个选项',
    content: [
        { label: 'a', value: "选项1" },
        { label: 'b', value: "选项2" },
        { label: 'c', value: "选项3" },
        { label: 'd', value: "选项4" },
    ]
}
export const selectEditProp = {
    type: 'select',
    title: '请选择多个选项',
    content: [
        { option: 'a', value: "选项1" },
        { option: 'b', value: "选项2" },
        { option: 'c', value: "选项3" },
        { option: 'd', value: "选项4" },
    ]
}
export const textareaEditProp = {
    type: 'textarea',
    title: '请选择一个选项',
    content: '请填写你最想说的一句话'
}

export const componentEditMap = {
    input: InputEdit,
    select: SelectEdit,
    textarea: TextareaEdit
}
export const componentViewMap = {
    input: InputView,
    select: SelectView,
    textarea: TextareaView
}