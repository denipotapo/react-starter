import 'core-js/es6/map'
import 'core-js/es6/set'

import 'app.scss'
import React from 'react'
import { render } from 'react-dom'

// import { nanoid } from 'nanoid'

// https://github.com/minhtranite/react-progress-bar-plus

// Layouts
import { CoreLayout } from 'layouts'

// Pages
import { ComponentPage } from 'containers'

performance.mark('start')

// console.log('nanoid: ', nanoid())

render((
    <CoreLayout>
        <ComponentPage />
    </CoreLayout>
), document.getElementById('root'))

if (process.env.NODE_ENV === 'development') {
    if (module.hot) {
        module.hot.accept()
        console.log('Accepting the updated printMe module!')
    }
}

// // a chunks with a, b, c
// require(["./a", "./b", "./c"], function(a, b, c) {});

// // a chunk with a, b, d
// require.ensure(["./a"], function(require) {
//     require("./b");
//     require("./d");
// });

// password: _.debounce(async function() {
//     const zxcvbn = await import(/* webpackChunkName: "zxcvbn" */ 'zxcvbn');
//     this.strength = zxcvbn(this.password).score;
//     this.checkedPassword = this.password;
// }, 500)

performance.mark('end')
performance.measure('t', 'start', 'end')

// import { importCss } from 'babel-plugin-dual-import/importCss.js'

// importCss('react-select/dist/react-select.css')
// importCss('react-virtualized/styles.css')
// importCss('react-virtualized-select/styles.css')
