import * as React from 'react'
import * as css from './styles.scss'

// const Number = styled.h1`
//   font-size: 36px;
//   line-height: 40px;
//   margin-right: 5px;
//   padding: 0px;
// `;
// //..
// <Container>
//   <Number>{skipRatePre}</Number>
//   <InfoName>Skip Rate</InfoName>
// </Container>

import classNames from 'classnames/bind'

interface P {
    value?: string;
    label?: string;
    referrer: any;
    handleChange: (e: any) => void;
}

const cx = classNames.bind(css)

export const Present = ({ referrer, value, label, handleChange }: P) => (
    <div className={cx({ wrapper: true })}>
        <p>{label}</p>
        <p>value: {value}</p>
        <input
            ref={referrer}
            value={value}
            onChange={handleChange}
        />
    </div>
)