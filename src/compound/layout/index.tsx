import * as React from 'react'
import * as css from './styles.scss'
import classNames from 'classnames/bind'

interface P {
    className?: string;
    children?: JSX.Element[] | JSX.Element | string;
}

const cx = classNames.bind(css)

export class Layout extends React.Component<P, {}> {
    static defaultProps = {
        children: '',
        className: ''
    }

    render () {
        const { className, children } = this.props

        return (
            <div className={cx({ layout: true }, className)}>
                {children}
            </div>
        )
    }
}
