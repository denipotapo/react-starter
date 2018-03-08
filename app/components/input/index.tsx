import * as React from 'react'
import * as css from './styles.scss'

interface T {
    name: string;
    value?: string | number;
    children?: string | number;
    type?: string;
    hint?: string;
    focus?: boolean;
    error?: string | boolean;
    cleaned?: boolean;
    className?: string | boolean;
    placeholder?: string;
    tabindex?: number | boolean;
    maxlength?: number | boolean;
    multiline?: number | boolean;
    handleChange?: ((value: string) => void);
    status?: 'warn' | 'error' | 'valid' | 'normal';
    textControl?: React.ReactDOM
}

interface S {
    value: string | number;
}

export default class Input extends React.Component<T, S> {
    static defaultProps = {
        type: 'text',
        status: 'normal',
        value: 0,
        children: '',
        focus: false,
        cleaned: false,
        tabindex: false,
        maxlength: false,
        className: false,
        multiline: false,
        placeholder: 'Введите текст…',
        handleChange: (value) => {
            console.log(': = ', value)
        }
    }

    state = {
        value: this.props.value || this.props.children || 0
    }

    textControl: any = []

    prefix: string = Math.random().toString()

    componentDidMount () {
        // if (this.props.focus) {
        //     this.textControl.focus()
        // }
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.value !== this.state.value) {
            this.setState({...this.state, value: nextProps.value})
        }
    }

    handleChange = (e) => {
        const value = e.target.value

        this.setState({ value })

        if (this.props.handleChange) {
            this.props.handleChange(value)
        }
    }

    handleClear = () => {
        this.setState({ value: '' }, () => {
            this.textControl.focus()
        })
    }

    renderClearButton = () => {
        const clearButton: any = []
        const { value, cleaned } = this.props

        if (value && cleaned) {
            clearButton.push(
                <button
                    type="button"
                    className={css.clear}
                    onClick={this.handleClear}
                    key={[this.prefix, 'clear'].join('.')}
                />
            )
        }

        return clearButton
    }

    renderAdditional = () => {
        const addition: any = []

        const { hint, error } = this.props

        if (hint) {
            addition.push(
                <span className={css.hint} key={[this.prefix, 'hint'].join('.')}>
                    {hint}
                </span>
            )
        }

        if (error) {
            addition.push(
                <span className={css.error} key={[this.prefix, 'error'].join('.')}>
                    {error}
                </span>
            )
        }

        return addition
    }

    renderInput = () => {
        const cn: any = []
        const props: any = {}

        const { value } = this.state
        const { name, error, multiline, maxlength, tabindex, className } = this.props

        const id = `input_${name}`

        cn.push(css.control)

        if (className) {
            cn.push(className)
        }

        if (error) {
            cn.push(css.control_error)
        }

        if (multiline) {
            cn.push(css.control_textarea)
        } else {
            cn.push(css.control_input)
        }

        props.value = value
        props.spellCheck = false
        props.autoCorrect = 'off'
        props.autoComplete = 'off'
        props.autoCapitalize = 'off'
        props.onChange = this.handleChange
        props.className = cn.join(' ')

        props.ref = (c) => { this.textControl = c }

        if (tabindex) {
            props.tabindex = tabindex
        }

        if (maxlength) {
            props.maxlength = maxlength
        }

        return (
            <label className={css.label} htmlFor={id}>
                {multiline
                    ? <textarea id={id} {...props} rows={multiline || 10}>{props.value}</textarea>
                    : <input id={id} {...props} />
                }
                { this.renderClearButton() }
            </label>
        )
    }

    render () {
        return (
            <div className={css.wrapper}>
                { this.renderInput() }
                { this.renderAdditional() }
            </div>
        )
    }
}
