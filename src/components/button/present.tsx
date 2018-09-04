import * as React from 'react'
import * as css from './styles.scss'

import { classes } from 'helpers'

export interface P {
    primary?: boolean;
    children?: JSX.Element[] | JSX.Element | string;
}

const cx = classes.bind(css)

export const Present = ({ children, primary }: P) => (
    <button className={cx(css.button, { primary })}>
        {children}
    </button>
)

// // Здесь мы задаем свой обработчик событий
// const onChangeHandler = event => onChange && onChange(event.target.value);

// export const OnChange = ({ onChange, children }) => {
//    // Проверка на то, что нам передали
//    // только один компонент в виде children
//    const Child = React.Children.only(children);

//    // Клонируем элемент и передаем в него новые props
//    return React.cloneElement(Child, {onChange: onChangeHandler});
// }

// // Здесь мы задаем свой обработчик событий
// const onChangeHandler = event => onChange(event.target.value);

// export const OnChange = ({ onChange, children }) =>
//    React.cloneElement(children, {...children.props, onChange: onChangeHandler});
