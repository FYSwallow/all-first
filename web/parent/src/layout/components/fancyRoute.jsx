import React, {useState, useEffect} from 'react'
import nprogress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style

function FancyRoute(props) {
    useState(nprogress.start())
    useEffect(() => {
        nprogress.done();
        return () => nprogress.start();
    });
    return props.children
}

export default FancyRoute