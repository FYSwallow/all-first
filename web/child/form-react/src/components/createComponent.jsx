import React, { lazy, Suspense } from 'react'

export const createComponent = (MyContent, props) => {
    return <Suspense fallback={<div>Loading</div>}><MyContent {...props}/></Suspense>
}